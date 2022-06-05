import { CHANGE_COMPOSE_DATA, CHANGE_TAB, GETMENU } from "./menu-types"


const initialState = {
    menu: {
        currentTab: "contacts",
    },
    composeData: {
        firstName: "",
        lastName: "",
        number: "",
        message: ""
    }
}
export default function menuReducer(state = initialState, action: any) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                menu: action.payload
            }
        case CHANGE_COMPOSE_DATA:
            return {
                ...state,
                composeData: action.payload
            }
        default:
            return state
    }
}