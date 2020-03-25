import api from '../api/restaurants';

export const searchApi = async searchTerm => {
  try {
    const response = await api.get('/search', {
      params: {
        term: searchTerm,
        limit: 50,
        location: 'Los Angeles',
      },
    });
    return response.data.businesses;
  } catch (err) {
    console.warn(err);
  }
};
