import axios from "axios";

const BASE_URL = "https://back-to-the-disc-backend.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("backtothedisc"));

  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function getProducts(page) {
  const promise = axios.get(`${BASE_URL}/products/?page=${page}`);
  return promise;
}

function putLogout() {
  const config = createHeaders();

  const promise = axios.put(`${BASE_URL}/logout`, {}, config);

  return promise;
}

function getProductDescription(id) {
  const promise = axios.get(`${BASE_URL}/description/${id}`);
  return promise;
}

function postHistoric(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/historic`, body, config);
  return promise;
}

function getHistoric() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/historic`, config);
  return promise;
}

export {
  postSignUp,
  postSignIn,
  getProducts,
  getProductDescription,
  postHistoric,
  putLogout,
  getHistoric,
};
