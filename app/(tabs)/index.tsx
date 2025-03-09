import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <LinearGradient colors={["#f5f5dc", "#d4e157", "#c0ca33"]} style={styles.gradient}>
          {/* Header with logos and university name */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={require('@/assets/images/ctu-logo.png')} style={styles.logo} resizeMode="contain" />
              <Image source={require('@/assets/images/asean-logo.png')} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.universityInfo}>
              <Text style={styles.republicText}>Republic of the Philippines</Text>
              <Text style={styles.universityName}>CEBU TECHNOLOGICAL</Text>
              <Text style={styles.universityName}>UNIVERSITY</Text>
              <Text style={styles.addressText}>
                Main Campus: M.J. Cuenco Avenue{"\n"}
                corner R. Palma St., Cebu City
              </Text>
            </View>
          </View>

          {/* Photo section */}
          <View style={styles.photoSection}>
            <View style={styles.photoContainer}>
              <Image source={require('@/assets/images/2x2.png')} style={styles.photo} resizeMode="cover" />
            </View>
          </View>

          {/* Name and course section */}
          <View style={styles.infoSection}>
            <Text style={styles.nameText}>JOHN PAUL B. LLEMIT</Text>
            <View style={styles.courseContainer}>
              <Text style={styles.courseText}>           BSIT           </Text>
            </View>
            <Text style={styles.courseLabel}>COURSE</Text>
          </View>

          {/* ID Number section */}
          <View style={styles.idSection}>
            <Text style={styles.idLabel}>ID No.:</Text>
            <Text style={styles.idNumber}>1333741</Text>
          </View>

       
          <View style={styles.footer}>
            
            <Image source={require('@/assets/images/campus.png')} style={styles.campusImage}  />
            <Image source={require('@/assets/images/iso-logo.jpg')} style={styles.isoLogo} resizeMode="contain" />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: 370,
    height: 550,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    width: "100%",
    height: "100%",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  logoContainer: {
    width: 50, // Reduced width
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  logo: {
    width: 80, // Reduced width
    height: 50, // Reduced height
    marginLeft: 60,
    marginBottom: 5,
  },
  universityInfo: {
    flex: 1,
  },
  republicText: {
    fontSize: 14, // Reduced font size
    marginLeft: 30,
    color: "#333",
    marginBottom: 2,
  },
  universityName: {
    fontSize: 18, // Reduced font size
    marginLeft: 30,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 0.5,
  },
  addressText: {
    fontSize: 12, // Reduced font size
    marginLeft: 30,
    color: "#333",
    marginTop: 2,
  },
  photoSection: {
    alignItems: "center",
    marginVertical: 2,
  },
  photoContainer: {
    width: 170,
    height: 190,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  infoSection: {
    alignItems: "center",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20, // Reduced font size
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  courseContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 2,
    marginBottom: 2,
  },
  courseText: {
    fontSize: 18, // Reduced font size
    fontWeight: "bold",
    color: "#333",
  },
  courseLabel: {
    fontSize: 14, // Reduced font size
    color: "#333",
  },
  idSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  idLabel: {
    fontSize: 12, // Reduced font size
    color: "#333",
    marginRight: 5,
  },
  idNumber: {
    fontSize: 14, // Reduced font size
    fontWeight: "bold",
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  campusImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  isoLogo: {
    width: "100%", // Reduced width
    height: "100%", // Reduced height
    position: "absolute",
    bottom: 10,
    right: -100,  
    marginBottom: 30,
  },
});