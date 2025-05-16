import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkipCard from "../components/SkipCard";
import { get } from "@/lib/server";
import { queryNames, Skip, SKIPS_BY_LOCATION_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import Loader from "/assets/images/loader.gif";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleSelectSkip = (skip: Skip) => {
    if (selectedSkip?.id === skip?.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const handleContinue = () => {};

  const fetchSkipsByLocation = async () => {
    const { status, message, data } = await get(
      `${SKIPS_BY_LOCATION_URL}?postcode=NR32&area=Lowestoft`
    );

    if (status) {
      return data;
    } else {
      toast.error(message);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: [queryNames.SKIPS_BYLOCATION],
    queryFn: fetchSkipsByLocation,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-2">Choose Your Skip Size</h1>
            <p className="text-md dark:text-gray-200">
              Select the skip size that best suits your needs
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center">
              <img src={Loader} alt="Loader" />
            </div>
          ) : (
            <>
              {data?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {data?.map((skip: Skip) => (
                    <SkipCard
                      key={skip.id}
                      skip={skip}
                      selectedSkip={selectedSkip}
                      handleSelectSkip={handleSelectSkip}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No skip found.</p>
                </div>
              )}
            </>
          )}
        </div>

        {selectedSkip && (
          <div className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-t border-border p-5 flex flex-col sm:flex-row justify-between items-center gap-4 animate-slide-in-right shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-sm text-muted-foreground">Selected:</span>
              <span className="text-lg font-semibold">
                {selectedSkip.size} Yard Skip
              </span>
              <span className="text-2xl text-theme-lightGreen font-bold animate-pulse">
                £
                {(
                  selectedSkip?.price_before_vat *
                  (1 + selectedSkip?.vat / 100)
                )?.toFixed(0)}
              </span>
            </div>
            <Button
              onClick={handleContinue}
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
