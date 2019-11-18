import  RoleSelector from './RoleSelector';
import Welcome from './Welcome.js'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import DemographicInformation from './DemographicInformation';
import PeopleInvoloved from './PeopleInvolved.js';
import InvolvedPeopleInformation from './InvolvedPeopleInformation';
import Place from './Place';
import MyDate from './MyDate';
import Event from './Description';
const Routing=createStackNavigator({
    Home:{
        screen:Welcome
    },
    RoleSelect:{
        screen:RoleSelector
    },
    DemographicInformation:{
        screen:DemographicInformation
    },
    People:{
        screen:PeopleInvoloved
    },
    Involved:{
        screen:InvolvedPeopleInformation
    },
    PlaceOccured:{
        screen:Place
    },
    DateOccured:{
        screen:MyDate
    },
    EventHappened:{
        screen:Event
    }
})
export default createAppContainer(Routing);