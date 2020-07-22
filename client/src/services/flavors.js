import api from './api-helper';

export const getAllFlavors = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}