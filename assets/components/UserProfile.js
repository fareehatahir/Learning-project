import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserProfile = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Here the new change Is Your User Profile</Text>
      <Image source={{ uri: user.picture.large }} style={styles.profileImage} />
      <View>
        <Text
          style={styles.name}
        >{`${user.name.first} ${user.name.last}`}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    margin: 20,
    borderRadius: 30,
  },
  logo: {
    fontSize: 20,
    fontWeight: "900",
    color: "black",
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "yellow",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    fontWeight: "800",
    color: "black",
  },
  email: {
    fontWeight: "bold",
    fontWeight: "600",
    color: "black",
  },
});

export default UserProfile;
