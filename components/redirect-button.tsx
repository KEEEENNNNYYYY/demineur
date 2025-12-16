import { buttonStyle } from "@/styles/button-styles";
import { Link, LinkProps } from "expo-router";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface RedirectButtonProps {
  title: string;
  href: LinkProps["href"];
}

export const RedirectButton: FC<RedirectButtonProps> = ({ href, title }) => {
  return (
    <Link href={href} asChild>
      <Pressable style={buttonStyle.container}>
        <Text style={buttonStyle.text}>{title}</Text>
      </Pressable>
    </Link>
  );
};
