import { SafeAreaView,StatusBar} from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      }}>
      <StatusBar  
        barStyle={'dark-content'}
        backgroundColor= "rgba(52, 52, 52, 0.0)"
      />
      <ProductScreen/>
    </SafeAreaView>
  );
}


