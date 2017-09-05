import { store } from '../store/configureStore';

const errorPages = [401, 403, 404];

function handleResponse(response) {
  if (response.status === 204) {
    return response;
  }

  const json = response.json();

  if (response.status < 200 || response.status >= 300) {
    if (errorPages.includes(response.status)) {
      window.location.href = `/error/${response.status}`;
      return json;
    }
    const error = new Error(json.message);
    error.body = json;
    throw error;
  }

  return json;
}

function prepareRequestBody(method, data) {

  const token = store.getState().auth.token;
  const authHeaders = token ? {
    'Authorization': `Bearer ${token}`
  } : {};

  const options = {
    method,
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...authHeaders
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return options;
}

const HttpClient = {
  get: uri => fetch(uri, prepareRequestBody('GET')).then(handleResponse),
  post: (uri, data) => fetch(uri, prepareRequestBody('POST', data)).then(handleResponse),
  put: (uri, data) => fetch(uri, prepareRequestBody('PUT', data)).then(handleResponse),
  delete: (uri, data) => fetch(uri, prepareRequestBody('DELETE', data)).then(handleResponse),
};

export default HttpClient;