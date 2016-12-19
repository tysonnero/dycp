export function getChores() {

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  return dispatch => {
    return fetchData(`${appConfig.chatApi.url}/api/Post/${channelId}`, config)
      .then(({ data }) => {
        const messages = data;
        dispatch(receiveMessages(messages));
      });
  };
}