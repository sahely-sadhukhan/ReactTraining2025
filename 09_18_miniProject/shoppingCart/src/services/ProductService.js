import axios from 'axios';

const BASE_URL = 'http://localhost:3500';
const AUTH_URL = '/users';
const PRODUCTS_URL = '/products';

//const AUTH_URL = 'http://localhost:3500/users';

const axiosObj = axios.create();

axiosObj.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem("AUTH_TOKEN");
      console.log("Attaching token to request: " + token);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

axiosObj.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("JWT expired or invalid. Logging out...");
      sessionStorage.removeItem("AUTH_TOKEN");

      // Optionally trigger a full reload or redirect
      window.location.href = "/Login"; 
    }
    return Promise.reject(error);
  }
);

  class ProductService {

 
    async login(userName, password) {
        try {
                const response = await axiosObj.get(`${BASE_URL}${AUTH_URL}`, {
                    params: { userName: userName, password: password }
                });
                //console.log("Login response:", response);
                if (response.status == 200 && undefined !== response.data[0] 
                    && undefined !== response.data[0].token && response.data[0].token.length > 0) {
                    const token = response.data[0].token;
                    //console.log("Storing token in sessionStorage: " + token);
                    sessionStorage.setItem("AUTH_TOKEN", token);
                } else {
                    throw new Error("Invalid login response");
                }
                return response.data[0];
        } catch (err) {
            console.error("Login failed:", err);
            throw err;
        }
  }

async getAll() {
    console.log("Message from ProductService");
    return axiosObj.get(`${BASE_URL}${PRODUCTS_URL}`);   
  }

  async getById(id) {
    return axiosObj.get(`${BASE_URL}${PRODUCTS_URL}/${id}`);
    //return axiosObj.get(`${API_URL}/${id}`);
  }

}
export default new ProductService();