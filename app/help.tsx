import { HelpSection } from "@/components/help-section";
import { helpStyles } from "@/styles/help-styles";
import React from "react";
import { ScrollView, Text } from "react-native";

const Help = () => (
  <ScrollView contentContainerStyle={helpStyles.container}>
    <HelpSection title="🧨 Démineur – Description">
      <Text>
        Le Démineur est un jeu de logique où le but est de révéler toutes les
        cases sûres sans déclencher de mines.
      </Text>
    </HelpSection>

    <HelpSection title="🎯 Objectif">
      <Text>• Révéler toutes les cases sans mine</Text>
      <Text>• Marquer les mines avec un drapeau 🚩</Text>
      <Text>• Éviter les mines 💣</Text>
    </HelpSection>

    <HelpSection title="🕹️ Commandes">
      <Text>• Appui simple : révéler une case</Text>
      <Text>• Appui long : poser / retirer un drapeau 🚩</Text>
    </HelpSection>

    <HelpSection title="🔢 Signification des chiffres">
      <Text>1️⃣ = 1 mine autour</Text>
      <Text>2️⃣ = 2 mines autour</Text>
      <Text>0️⃣ = aucune mine autour</Text>
    </HelpSection>

    <HelpSection title="🧩 Exemple visuel">
      <Text>⬜ ⬜ ⬜</Text>
      <Text>⬜ 2️⃣ 🚩</Text>
      <Text>⬜ 1️⃣ ⬜</Text>
      <Text>Le 2️⃣ indique deux mines autour</Text>
    </HelpSection>

    <HelpSection title="💡 Conseils">
      <Text>• Commence par les zones ouvertes</Text>
      <Text>• Les 0️⃣ ouvrent les cases voisines</Text>
      <Text>• Utilise les drapeaux pour éviter les erreurs</Text>
    </HelpSection>
  </ScrollView>
);

export default Help;
