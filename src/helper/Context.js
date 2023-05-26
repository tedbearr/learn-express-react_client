import { createContext } from "react";

const base_url = createContext("http://103.54.170.25:3009/");
const authContext = createContext();
let isExpanded = createContext(false);

export { base_url, authContext, isExpanded };
