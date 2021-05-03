export const ipFetch = () => {

  fetch("https://ipinfo.io/json?token=f2bb08d190a472")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      document.querySelector("#ipText").innerHTML = myJson.ip;
    })
    .catch((error) => {
      console.log("Error: " + error);
    })};
