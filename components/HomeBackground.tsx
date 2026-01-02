import {LinearGradient} from "expo-linear-gradient";
import {View} from "react-native";

// @ts-ignore
export const HomeBackground = ({children}) => {
    return (
        <View className="flex-1 relative">
            <LinearGradient
                colors={["#f7eaff", "#fde2ea"]}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute inset-0"
            />

            {/* Faux radial gradients (bulles) */}
            <View className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-purple-400/40 blur-3xl"/>
            <View className="absolute top-32 right-10 w-[350px] h-[350px] rounded-full bg-yellow-300/50 blur-3xl"/>
            <View className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-pink-400/40 blur-3xl"/>
            <View className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-400/45 blur-3xl"/>

            {/* Contenu */}
            <View className="flex-1 z-10">
                {children}
            </View>
        </View>
    );
};