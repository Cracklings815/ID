// Ctu ID
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardWrapper}>
        <LinearGradient colors={["#f5f5dc", "#d4e157", "#c0ca33"]} style={styles.cardGradient}>
          
          
          <View style={styles.headerSection}>
            <View style={styles.logoWrapper}>
              <Image source={require('@/assets/images/ctu-logo.png')} style={styles.logoImage} resizeMode="contain" />
              <Image source={require('@/assets/images/asean-logo.png')} style={styles.logoImage} resizeMode="contain" />
            </View>
            <View style={styles.universityDetails}>
              <Text style={styles.republicText}>Republic of the Philippines</Text>
              <Text style={styles.universityName}>CEBU TECHNOLOGICAL</Text>
              <Text style={styles.universityName}>UNIVERSITY</Text>
              <Text style={styles.campusAddress}>
                Main Campus: M.J. Cuenco Avenue{"\n"}
                corner R. Palma St., Cebu City
              </Text>
            </View>
          </View>

         
          <View style={styles.photoWrapper}>
            <View style={styles.photoFrame}>
              <Image source={require('@/assets/images/2x2.png')} style={styles.userPhoto} resizeMode="cover" />
            </View>
          </View>

         
          <View style={styles.userInfoSection}>
            <Text style={styles.userName}>JOHN PAUL B. LLEMIT</Text>
            <View style={styles.courseWrapper}>
              <Text style={styles.courseName}>           BSIT           </Text>
            </View>
            <Text style={styles.courseLabel}>COURSE</Text>
          </View>

          
          <View style={styles.idSection}>
            <Text style={styles.idLabel}>ID No.:</Text>
            <Text style={styles.idNumber}>1333741</Text>
          </View>

          
          <View style={styles.footerSection}>
            <Image source={require('@/assets/images/campus.png')} style={styles.campusBackground} />
            <Image source={require('@/assets/images/iso-logo.jpg')} style={styles.isoLogo} resizeMode="contain" />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
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
  cardGradient: {
    width: "100%",
    height: "100%",
    padding: 15,
  },
  headerSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  logoWrapper: {
    width: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  logoImage: {
    width: 80,
    height: 50,
    marginLeft: 60,
    marginBottom: 5,
  },
  universityDetails: {
    flex: 1,
  },
  republicText: {
    fontSize: 14,
    marginLeft: 30,
    color: "#333",
    marginBottom: 2,
  },
  universityName: {
    fontSize: 18,
    marginLeft: 30,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 0.5,
  },
  campusAddress: {
    fontSize: 12,
    marginLeft: 30,
    color: "#333",
    marginTop: 2,
  },
  photoWrapper: {
    alignItems: "center",
    marginVertical: 2,
  },
  photoFrame: {
    width: 170,
    height: 190,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  userPhoto: {
    width: "100%",
    height: "100%",
  },
  userInfoSection: {
    alignItems: "center",
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  courseWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 2,
    marginBottom: 2,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  courseLabel: {
    fontSize: 14,
    color: "#333",
  },
  idSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  idLabel: {
    fontSize: 12,
    color: "#333",
    marginRight: 5,
  },
  idNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  footerSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  campusBackground: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  isoLogo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 10,
    right: -100,
    marginBottom: 30,
  },
});








