import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/** 
 * Fetches GitHub user data based on username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<object>} - The user data from GitHub API.
 */

export const fetchUserData = async (username, location = '', minRepos = '', page = 1) => {
  try {
    let query = '';
    if (username) query += `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 10,
        page,
      },
    });

    return {
      users: response.data.items,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    throw new Error('Failed to fetch user list');
  }
};

export const fetchFullUserDetails = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`);
    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch full profile');
  }
};