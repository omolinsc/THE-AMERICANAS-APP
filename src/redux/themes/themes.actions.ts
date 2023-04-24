import store from "../store";

const { dispatch } = store;

export const changeTheme = (theme: string) => {
    dispatch({ type: "BLUE", payload: theme});
};