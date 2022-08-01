import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './Pages/LoginPage';
import SeriesPage from './Pages/SeriesPage'

const AppNavigator=createStackNavigator({

  'Login':{

    screen:LoginPage,
    navigationOptions:{
      title:'Bem Vindo',
    }
  },
  'Main':{
    screen:SeriesPage,
    navigationOptions:{
      title:'Series',
    }


  },


},{
  defaultNavigationOptions:{
    title:"series",
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'#E50914',
      borderBottomWidth:1,
      borderBottomColor:'##c5c5c5'
      
    },
    headerTitleStyle:{
      color:'white',
      fontSize:30,



    }
  }

});

const AppConteiner=createAppContainer(AppNavigator);
export default AppConteiner;