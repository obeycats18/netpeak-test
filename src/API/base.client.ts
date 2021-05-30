export interface IClient {
  get<D>(url: string): D | Promise<D>;
  post<D, P>(url: string, payload: P): D | Promise<D>;
  put<D, P>(url: string, payload: P): D | Promise<D>;
  delete<D>(url: string): D | Promise<D>;
}
