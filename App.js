import { StatusBar } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="rgba(255, 255, 255, 1)"
      />
      <Navigation />
    </Provider>
  );
}
