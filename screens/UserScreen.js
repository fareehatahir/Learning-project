import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import UserProfile from "../assets/components/UserProfile";

const UserScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching random user:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Innercontainer}>
        <Text style={styles.text}>Random User Generator</Text>
      </View>
      {user && <UserProfile user={user} />}
      <TouchableOpacity style={styles.button} onPress={fetchRandomUser}>
        <Text style={styles.logo}>Generate Random User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  Innercontainer: {
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    color: "black",
    marginTop: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: "900",
    color: "black",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 40,
  },
});

export default UserScreen;

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';

// export default function App() {
//   const [region, setRegion] = useState(null);
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     // Request location permission
//     Geolocation.requestAuthorization('whenInUse').then((granted) => {
//       if (granted) {
//         // Get current location
//         Geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setRegion({
//               latitude,
//               longitude,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             });

//             // Fetch nearby restaurants (replace this with your actual API endpoint)
//             fetchNearbyRestaurants(latitude, longitude);
//           },
//           (error) => console.log('Error getting location:', error),
//           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//         );
//       } else {
//         console.log('Location permission denied');
//       }
//     });
//   }, []);

//   const fetchNearbyRestaurants = async (latitude, longitude) => {
//     try {
//       // Replace this URL with your actual API endpoint
//       const apiUrl = `https://your-api-endpoint.com/nearby-restaurants?lat=${latitude}&lng=${longitude}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       setRestaurants(data);
//     } catch (error) {
//       console.log('Error fetching nearby restaurants:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={region}
//         onRegionChangeComplete={setRegion}
//       >
//         {/* Render markers for nearby restaurants */}
//         {restaurants.map((restaurant) => (
//           <Marker
//             key={restaurant.id}
//             coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
//             title={restaurant.name}
//             description={restaurant.description}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });
