import axios from "axios";

export async function getUser() {
    return axios.get("https://team-alpha-webform-131.herokuapp.com/api/user/62589fb0b40ed680c2b62168");
}