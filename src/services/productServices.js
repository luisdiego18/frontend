import httpServices from "./httpServices";

const apiEndPoint = "https://jsonplaceholder.typicode.com/users";

export function getProducts() {
  return httpServices.get(apiEndPoint);
}
