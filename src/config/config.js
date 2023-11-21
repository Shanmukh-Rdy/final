const { REACT_APP_API_BASE_URL, REACT_APP_SERVER_PORT } = process.env;

const API_URL = process.env.API_URL;
const PORT = process.env.REACT_APP_SERVER_PORT;

//REACT_APP_SERVER_PORT ? `${REACT_APP_API_BASE_URL}:${REACT_APP_SERVER_PORT}` : `${REACT_APP_API_BASE_URL}`;

export const config = {
  api: {
    articles: `http://localhost:4000/news`,
    articlesByCategory: (category) => `${API_URL}/news/${category}`,
  },
};
