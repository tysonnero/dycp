function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json().then(data => ({ data, response }));
}

export const fetchData = (url, options) => {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(({ data, response }) => {
      if (!response.ok) return Promise.reject(data);
      return { data, response };
    });
};