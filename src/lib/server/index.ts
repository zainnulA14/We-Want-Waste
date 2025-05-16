import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | any;
  message: string;
  status: boolean | number;
}

export const get = async <T = any>(url: string): Promise<ApiResponse<T[]>> => {
  let data: T[] = [];
  let message = "";
  let status: boolean | number = false;

  try {
    const res: AxiosResponse = await axios.get(url);
    data = res.data;
    message = res.data.message || "Request Successful";
    status = res.status === 200;
  } catch (error: any) {
    console.error("error", error);
    if (error.response) {
      data = [];
      message = error.response.data.error || "Error occurred";
      status = false;
    } else {
      data = [];
      message = "No server response";
      status = false;
    }
  }

  return { status, message, data };
};
