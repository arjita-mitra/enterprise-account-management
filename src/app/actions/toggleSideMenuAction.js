import * as appConstants from '../../constants/appConstants.js'


function getClassName(newClassName) {
    return {
        type: appConstants.TOGGLE_CLASS_NAME,
        newClassName
    }
}

export const toggleSideMenuAction = (newClassName) => (dispatch) => {
    dispatch(getClassName(newClassName));
}