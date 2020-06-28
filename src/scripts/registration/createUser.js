//defining factory function responsible for generating user object
const createUserObject = (username, email, password) => {
    const userObject = {
        username,
        email,
        password
    }
    return userObject
    }

export default createUserObject
