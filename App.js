import React from 'react';
import FrontScreen from './Screens/FrontScreen';
import ShowStudentData from './Screens/ShowStudentData';
import StudentCard from './Screens/StudentCard';
import StudentsForm from './Screens/StudentsForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from "./Redux/store"
import AllStudents from './Screens/AllStudents';
import Summary from './Screens/Summary';
import EditPage from './Screens/EditPage';

const Stack = createStackNavigator();

const App = () => {


  return (

    <React.Fragment>

      <Provider store={store}>
        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen
              name="Front"
              component={FrontScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Students"
              component={AllStudents}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Edit"
              component={EditPage}
              options={{ headerShown: false }}
            />


            <Stack.Screen
              name="ShowScreen"
              component={ShowStudentData}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="StuCardPage"
              component={StudentCard}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="StuForm"
              component={StudentsForm}
              options={{ headerShown: false }}
            />




          </Stack.Navigator>

        </NavigationContainer>
      </Provider>



    </React.Fragment>

    // <FrontScreen />
    // <StudentsForm />

    // <StudentCard />
    // <ShowAndEdit />

  );
};



export default App;
