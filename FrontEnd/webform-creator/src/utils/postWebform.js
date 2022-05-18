import axios from "axios";

const endpoint = "https://team-alpha-webform-131.herokuapp.com/api/webform/create/"

export async function postWebform(webform) {
    console.log(webform)
    axios.post(endpoint, webform)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        });
}