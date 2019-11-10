import  RoleSelector from './RoleSelector';
import Welcome from './Welcome.js'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
const Routing=createStackNavigator({
    Home:{
        screen:Welcome
    },
    RoleSelect:{
        screen:RoleSelector
    }
})
export default createAppContainer(Routing);