import api from "./api-helper";

export const getAllPortfolios = async () => {
  const resp = await api.get("/portfolios");
  return resp.data;
};

export const getOnePortfolio = async (id) => {
  const resp = await api.get(`/portfolios/${id}`);
  return resp.data;
};

export const createPortfolio = async (portData) => {
  const resp = await api.post("/portfolios", { portfolio: portData });
  return resp.data;
};

export const updatePortfolio = async (id, portData) => {
  const resp = await api.put(`/portfolios/${id}`, { portfolio: portData });
  return resp.data;
};

export const deletePortfolio = async (id) => {
  const resp = await api.delete(`/portfolios/${id}`);
  return resp;
};

// export const portToSecurity = async (portId, securityId) => {
//   const resp = await api.get(`/portfolios/${portId}/security/${securityId}`);
//   return resp.data;
// }
