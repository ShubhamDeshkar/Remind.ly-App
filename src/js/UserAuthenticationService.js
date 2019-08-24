class UserAuthenticationService {
    login(user) {
        sessionStorage.setItem("id", user.id);
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("firstName", user.firstName);
        sessionStorage.setItem("lastName", user.lastName);
        sessionStorage.setItem("dateOfBirth", user.dateOfBirth);
        sessionStorage.setItem("dateOfJoining", user.dateOfJoining);
    }

    logout() {
        sessionStorage.clear();
    }

    isUserLoggedIn() {
        var email = sessionStorage.getItem("email");
        return email === null ? false : true
    }

    getId() {
        var id = sessionStorage.getItem("id");
        return id === null ? "" : id
    }

    getEmail() {
        var email = sessionStorage.getItem("email");
        return email === null ? "" : email
    }

    getName() {
        var name = sessionStorage.getItem("firstName");
        return name === null ? "" : name
    }
}

export default new UserAuthenticationService();
