import axios from 'axios'

class GoalsDataService {
    getGoals(userId) {
        return axios.get(`http://localhost:8080/users/${userId}/todos`);
    }
}

export default new GoalsDataService();