import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 16,

        backgroundColor: "rgba(255, 255, 255, 0.85)",

        borderWidth: 1,
        borderColor: "#cbd5e1", // slate-300

        borderRadius: 14,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 4,

        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#1e293b", // slate-800
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 2,
        textTransform: "uppercase",
    },
});
