import { getTasks } from '../services/tasksService';

export function getChores() {
  return dispatch => {
    return getTasks()
      .then((response) => {
        console.log(response);
      });
  };
}