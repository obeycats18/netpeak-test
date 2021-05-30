import { IClient } from "./base.client";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosClient implements IClient {
  private client: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.client = axios.create(options);
  }

  async get<D>(url: string): Promise<D> {
    const { data } = await this.client.get<D>(url);

    return data;
  }

  async post<D, P>(url: string, payload: P) {
    const { data } = await this.client.post<D>(url, payload);
    return data;
  }

  async put<D, P>(url: string, payload: P) {
    const { data } = await this.client.put<D>(url, payload);
    return data;
  }

  async delete<D>(url: string) {
    const { data } = await this.client.delete<D>(url);
    return data;
  }
}
