import { CHANGE_COMPOSE_DATA, CHANGE_TAB } from "../reducers/menu-types"


export const changeMenu = (menu: string) => (dispatch: any) => {

    dispatch({
        type: CHANGE_TAB,
        payload: { currentTab: menu }
    });
};

export const changeComposeData = (data: any) => (dispatch: any) => {

    dispatch({
        type: CHANGE_COMPOSE_DATA,
        payload: {
            composeData: {
                firstName: data.firstName,
                lastName: data.lastName,
                number: data.number
            }
        }
    });
}