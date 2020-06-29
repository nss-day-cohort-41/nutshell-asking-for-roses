//defining factory function responsible for generating user object
const createUserObject = (email, username, password) => {
    const userObject = {
        email,
        username,
        password
    }
    return userObject
    }

export default createUserObject
