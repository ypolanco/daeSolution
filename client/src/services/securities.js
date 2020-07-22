import api from "./api-helper";

export const getAllSecurities = async (id) => {
  const resp = await api.get(`/portfolios/${id}/securities`);
  return resp.data;
};

export const getOneSecurity = async (id) => {
  const resp = await api.get(`/securities/${id}`);
  return resp.data;
};

export const createSecurities = async (securityData) => {
  // console.log("MFCCCCCCCCCCCC", securityData);
  let security = {ticker: securityData.ticker}
  const resp = await api.post(`/portfolios/${securityData.portfolio_id}/securities`, { security});
  return resp.data;
};

export const updateSecurities = async (id, securityData) => {
  const resp = await api.put(`/securities/${id}`, { security: securityData });
  return resp.data;
};

export const deleteSecurities = async (id) => {
  const resp = await api.delete(`/securities/${id}`);
  return resp;
};
