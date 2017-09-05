import httpClient from './httpClient';

export const getTasks = () => httpClient.get('http://localhost:3002/api/tasks/today');