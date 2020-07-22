import api from "./api-helper";

export const getAllFoods = async () => {
  const resp = await api.get("/foods");
  return resp.data;
};

export const getOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
};

export const createFood = async (foodData) => {
  const resp = await api.post("/foods", { food: foodData });
  return resp.data;
};

export const updateFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
};

export const deleteFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp;
};

export const foodToFlavor = async (flavorId, foodId) => {
  const resp = await api.get(`/flavors/${flavorId}/foods/${foodId}`);
  return resp.data;
};
