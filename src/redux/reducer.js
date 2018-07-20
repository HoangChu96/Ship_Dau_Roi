import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from './AppNavigator';


const firstAction = RootNavigator.router.getActionForPathAndParams('Menu');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Home');
const initialNavState = RootNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Back':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Place':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'GooglePlacesAutocomplete' }),
                state
            );
            break;
        case 'Comment':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Comment' }),
                state
            );
            break;

        case 'SearchOrder':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'SearchOrder' }),
                state
            );
            break;

        case 'Manual':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Manual' }),
                state
            );
            break;

        case 'Notify':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Notify' }),
                state
            );
            break;

        case 'Profile':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Profile' }),
                state
            );
            break;

        case 'ReceiveOrder':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ReceiveOrder' }),
                state
            );
            break;

        case 'Setting':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Setting' }),
                state
            );
            break;

        case 'Wallet':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Wallet' }),
                state
            );
            break;

        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

const AppReducer = combineReducers({
    nav
});

export default AppReducer;