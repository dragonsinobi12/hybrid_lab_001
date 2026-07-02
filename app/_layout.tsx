import React from 'react';
import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function PortfolioScreen() {
  // ฟังก์ชันสำหรับเปิดแอปอีเมลในเครื่อง
  const handleGitHubPress  = () => {
    Linking.openURL('https://github.com/dragonsinobi12/hybrid_lab_001');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* ส่วนหัวสีแดงตกแต่งด้านหลัง */}
        <View style={styles.headerBackground} />

        <View style={styles.card}>
          {/* รูปโปรไฟล์ */}
          <View style={styles.profileContainer}>
            <Image
              // เรียกใช้ path รูปภาพตามโครงสร้าง alias ของ Expo
              source={require('@/assets/images/my_photo.jpg')}
              style={styles.profileImage}
            />
          </View>

          {/* ข้อมูลส่วนตัว */}
          <Text style={styles.name}>Mr. Ronnakit Sakeaw</Text>
          <Text style={styles.studentId}>Student ID: 663450351-5</Text>
          <Text style={styles.major}>Computer Science and Information Technology</Text>

          {/* เส้นคั่น */}
          <View style={styles.divider} />

          {/* ทักษะความสามารถ */}
          <Text style={styles.sectionTitle}>Core Skills</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillBadge}><Text style={styles.skillText}>Python & Pandas</Text></View>
            <View style={styles.skillBadge}><Text style={styles.skillText}>Advanced SQL</Text></View>
            <View style={styles.skillBadge}><Text style={styles.skillText}>HTML & Bootstrap</Text></View>
            <View style={styles.skillBadge}><Text style={styles.skillText}>Server Administration</Text></View>
          </View>

          {/* ปุ่มติดต่อ */}
          <TouchableOpacity style={styles.button} onPress={handleGitHubPress }>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000', // พื้นหลังหลักสีดำ
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '35%',
    backgroundColor: '#D32F2F', // สีแดงเข้มเสริมความโดดเด่น
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF', // การ์ดสีขาวตัดกับพื้นดำและแดง
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    marginTop: 50,
  },
  profileContainer: {
    marginTop: -75, // ดันรูปขึ้นไปทับเส้นขอบการ์ด
    marginBottom: 15,
    borderRadius: 75,
    backgroundColor: '#FFFFFF',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#000000', // กรอบรูปสีดำ
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
    textAlign: 'center',
  },
  studentId: {
    fontSize: 16,
    color: '#D32F2F', // เน้นรหัสนักศึกษาด้วยสีแดง
    fontWeight: '600',
    marginBottom: 5,
  },
  major: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'flex-start',
    marginBottom: 10,
    width: '100%',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
    width: '100%',
  },
  skillBadge: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  skillText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#D32F2F', // ปุ่มสีแดง
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#D32F2F',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});