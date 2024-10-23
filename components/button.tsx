import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c0e864",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
  },
});
