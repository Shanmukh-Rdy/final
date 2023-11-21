import { config } from "../config/config";

const ApiService = {
  fetchArticles: async (category) => {
    const url = category === 'general' ? config.api.articles : config.api.articlesByCategory(category);
    const response = await fetch(url);
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);
    if(response.ok){
      const data = await response.json();
      console.log(response);
      return data;
    } else {
      console.log('Error:', response.statusText);
      throw new Error(response.statusText);
    }
  },
};

export default ApiService;