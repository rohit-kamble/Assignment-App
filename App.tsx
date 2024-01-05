import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeInput from './HomeInput';
import ImagePreView from './ImagePreView';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeInput}
          options={{title: 'Input Image'}}
        />
        <Stack.Screen name="Preview" component={ImagePreView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
