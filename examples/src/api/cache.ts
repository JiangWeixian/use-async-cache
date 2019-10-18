import axios from 'axios';

export const cache = {
  async fetch(): Promise<{ data: number }> {
    return axios.get(`/cache`, {}).then(res => res.data);
  },
};
