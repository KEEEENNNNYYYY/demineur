import { HelpSection } from "@/components/help-section";
import { HomeBackground } from "@/components/HomeBackground";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Help = () => (
    <HomeBackground>
        <ScrollView
            contentContainerClassName="px-4 py-6"
            showsVerticalScrollIndicator={false}
        >
            <View className="gap-5">
                <HelpSection title="🧨 Démineur – Description">
                    <Text className="text-slate-700">
                        Le Démineur est un jeu de logique où le but est de révéler toutes les
                        cases sûres sans déclencher de mines.
                    </Text>
                </HelpSection>

                <HelpSection title="🎯 Objectif">
                    <Text className="text-slate-700">• Révéler toutes les cases sans mine</Text>
                    <Text className="text-slate-700">• Marquer les mines avec un drapeau 🚩</Text>
                    <Text className="text-slate-700">• Éviter les mines 💣</Text>
                </HelpSection>

                <HelpSection title="🕹️ Commandes">
                    <Text className="text-slate-700">• Appui simple : révéler une case</Text>
                    <Text className="text-slate-700">
                        • Appui long : poser / retirer un drapeau 🚩
                    </Text>
                </HelpSection>

                <HelpSection title="🔢 Signification des chiffres">
                    <Text className="text-slate-700">1️⃣ = 1 mine autour</Text>
                    <Text className="text-slate-700">2️⃣ = 2 mines autour</Text>
                    <Text className="text-slate-700">0️⃣ = aucune mine autour</Text>
                </HelpSection>

                <HelpSection title="🧩 Exemple visuel">
                    <Text className="text-slate-700">⬜ ⬜ ⬜</Text>
                    <Text className="text-slate-700">⬜ 2️⃣ 🚩</Text>
                    <Text className="text-slate-700">⬜ 1️⃣ ⬜</Text>
                    <Text className="mt-2 text-slate-600 italic">
                        Le 2️⃣ indique deux mines autour
                    </Text>
                </HelpSection>

                <HelpSection title="💡 Conseils">
                    <Text className="text-slate-700">• Commence par les zones ouvertes</Text>
                    <Text className="text-slate-700">
                        • Les 0️⃣ ouvrent les cases voisines
                    </Text>
                    <Text className="text-slate-700">
                        • Utilise les drapeaux pour éviter les erreurs
                    </Text>
                </HelpSection>
            </View>
        </ScrollView>
    </HomeBackground>
);

export default Help;
