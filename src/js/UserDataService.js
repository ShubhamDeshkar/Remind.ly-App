import axios from "axios";

class UserDataService {

    isUser(creds) {
        return axios.post("http://localhost:8080/users/signin", creds)
    }

    signupUser(user) {
        return axios.post("http://localhost:8080/users/signup", user)
    }
}

export default new UserDataService();
