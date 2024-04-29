import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import SelectDevice from './screens/SelectDevice';
import SelectSeeder from './screens/SelectSeederType';
import Loader from './screens/Loader';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Select Device" component={SelectDevice} />
        <Stack.Screen name="Select Seeder" component={SelectSeeder} />
        <Stack.Screen name="Loader" component={Loader} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

