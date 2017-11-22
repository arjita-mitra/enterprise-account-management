export default function toggleSideMenuReducer(state = {
    sideNavClass: 'nav-md'
}, action) {
    switch (action.type) {
        case 'TOGGLE_CLASS_NAME':
            return {
                ...state,
                sideNavClass: action.newClassName
            }
        default:
            return state;
    }
}