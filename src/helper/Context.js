import { createContext } from "react";

const base_url = createContext("http://localhost:3009/");
const authContext = createContext();

export { base_url, authContext };
