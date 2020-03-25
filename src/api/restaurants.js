import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer EYRVdLan-lD84bDHBuq0VueSx_wGJODsFxpdgPhVrwvtdM42HHro-yfou_kMtXKUP-_O7bd6gTEdD930RmkoSyjGZC7APQJdQ8tlcL0WvyOx78jXoGqq5c8wVZl6XnYx',
  },
});
