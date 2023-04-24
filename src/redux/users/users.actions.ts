import store from "../store";

const { dispatch } = store;

export const getUser = () => {
    dispatch({ type: "LOADING"});
    const user: string | null = localStorage.getItem("user");
    if (user) {
        dispatch({type: "GET_USER", payload: user});
    } else {
        dispatch({type: "ERROR", payload: "NINGÚN USUARIO CONECTADO"})
    };
};