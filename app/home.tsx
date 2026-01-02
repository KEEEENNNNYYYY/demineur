import bombImage from "@/assets/images/bomb.png";
import { RedirectButton } from "@/components/redirect-button";
import { Image, Text, View } from "react-native";
import { HomeBackground } from "@/components/HomeBackground";

const Home = () => {
    return (
        <HomeBackground>
            <View className="flex-1 justify-center items-center px-6">

                <View className="mb-6">
                    <Image
                        source={bombImage}
                        className="w-32 h-32"
                        resizeMode="contain"
                    />
                </View>

                <Text className="text-3xl font-extrabold tracking-widest text-slate-800 mb-8">
                    DÉMINEUR - HEI
                </Text>

                <View className="w-full space-y-4 gap-2">
                    <RedirectButton href="/game" title="Nouveau jeu" />
                    <RedirectButton href="/game" title="Continuer le jeu" />
                    <RedirectButton href="/options" title="Options" />
                    <RedirectButton href="/help" title="Aide" />
                </View>

            </View>
        </HomeBackground>
    );
};

export default Home;
