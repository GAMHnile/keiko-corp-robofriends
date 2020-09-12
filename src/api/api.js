const apiCall = (link) =>
  fetch(link).then(response => {
    console.log({response: response})
    return response.json()})

    export default apiCall;