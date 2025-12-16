import bombImage from "@/assets/images/bomb.png";
import { RedirectButton } from "@/components/redirect-button";
import { homeStyle } from "@/styles/home-styles";
import { Image, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <View style={homeStyle.logoContainer}>
        <Image style={homeStyle.logo} source={bombImage} />
      </View>
      <View style={homeStyle.titleContainer}>
        <Text style={homeStyle.title}>DÉMINEUR - HEI</Text>
      </View>
      <View style={homeStyle.buttonContainer}>
        <RedirectButton href="/game" title="Nouveau jeu" />
        <RedirectButton href="/game" title="Continuer le jeu" />
        <RedirectButton href="/options" title="Options" />
        <RedirectButton href="/help" title="Aide" />
      </View>
    </View>
  );
};

export default Home;
