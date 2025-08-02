import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

/** 
 * Fetches GitHub user data based on username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<object>} - The user data from GitHub API.
 */
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found or API error');
  }
};

export default fetchUserData;