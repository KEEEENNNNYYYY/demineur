import { helpStyles } from "@/styles/help-styles";
import { FC, ReactNode } from "react";
import { Text, View } from "react-native";

interface HelpSectionProps {
  children: ReactNode;
  title: string;
}

export const HelpSection: FC<HelpSectionProps> = ({ children, title }) => {
  return (
    <View style={helpStyles.section}>
      <Text style={helpStyles.title}>{title}</Text>
      {children}
    </View>
  );
};
