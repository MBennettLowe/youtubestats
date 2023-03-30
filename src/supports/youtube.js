import axios from 'axios';

const KEY = "AIzaSyCGn6RNVKRQXnlhz4lUPWsqeWfCAW97Ucs";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet, statistics",
        key: KEY
    }
  });