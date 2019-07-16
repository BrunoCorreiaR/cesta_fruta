import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const Routes = createAppContainer(createStackNavigator({ 
    Main 
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "#7159c1"
        },
        headerTintColor:"#000"
    },
}));

export default Routes;
