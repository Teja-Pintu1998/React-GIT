import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Teja - dummy value",
})

export default UserContext;


// Now, we can able to access this UserContext anywhere from our app