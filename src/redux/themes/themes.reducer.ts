import { IDefaultRedux } from "../interfaces/default";

const INITIAL_STATE: IDefaultRedux = {
    user: null,
    token: null,
    loading: false,
    error: null,
    theme: null
};

export const themesReducer = (state: IDefaultRedux = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "BLUE":
            return {...state, theme: action.payload};
        case "GREEN":
            return {...state, theme: action.payload};
        case "LIGHT":
            return {...state, theme: action.payload};
        case "DARK":
            return {...state, theme: action.payload};
        default:
            return {...state};
    }
}