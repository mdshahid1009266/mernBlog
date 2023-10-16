const Reducer = (State, Action) => {
    switch (Action.type) {
        case "Loginstart":
            return {
                user: null,
                isFeatching: true,
                error: false,
                islogin: false
            }
        case "Loginsuccess":
            return {
                user: Action.userData,
                isFeatching: false,
                error: false,
                islogin: true
            }
        case "Loginfail":
            return {
                user: null,
                isFeatching: false,
                error: true,
                islogin: false
            }
        case "Logout":
            return {
                user: null,
                isFeatching: false,
                error: false,
                islogin: false
            }

        default:
            return State;
    }
}
export default Reducer