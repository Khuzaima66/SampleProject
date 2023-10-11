import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import NIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#F8F9F5'
    }}>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Icon name="chevron-back-outline" size={25} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Order Number : Nu0000001</Text>
        </View>
      </View>

      <Text style={{
        fontSize: 25,
        color: '#000',
        margin: 15
      }}>Location</Text>

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 28.42178,
            longitude: 70.29714,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
          }}
        />
      </View>

      <View style={styles.sections}>
        <View style={styles.sectionstyle}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 10
          }}>
            <Text style={{}}>Aug,24,2023</Text>
            <View style={{
              flexDirection: 'row'
            }}>
              <Icon name="navigate-circle" size={20} color={'#FF1493'} />
              <Text style={{ marginLeft: 10 }}>Starting Point</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 5
          }}>
            <Text style={{}}>8:12 Pm</Text>
            <Text style={styles.text}>Xyz City</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 20
          }}>
            <Text style={{}}>Aug,24,2023</Text>
            <View style={{
              flexDirection: 'row'
            }}>
              <Icon name="navigate-circle" size={20} color={'#FF1493'} />
              <Text style={{
                marginLeft: 10,
                marginRight: 15
              }}>Destination</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 5
          }}>
            <Text style={{}}>8:12 Pm</Text>
            <Text style={styles.text}>Xyz City</Text>
          </View>

          <Text style={{ color: '#FF1493', margin: 20 }}>Estimated</Text>
        </View>
      </View>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>
        <View style={styles.box}>
          <View style={styles.icon}>
            <NIcon name="truck-delivery-outline" size={30} color={'#FF1493'} />
          </View>
          <View>
            <Text>Nissan</Text>
            <Text>Ab-0202</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.icon}>
            <Image source={require('./src/assests/img.png')} style={{ height: 50, width: 50, resizeMode: 'contain' }}/>
          </View>
          <View>
            <Text>Nubira</Text>
            <Text>4.8 Ratings</Text>
          </View>
        </View>
      </View>

      <View style={styles.sections}>
        <View style={styles.sectionstyle1}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20
          }}>
            <Text style={styles.text}>Total Distance</Text>
            <Text style={styles.text}>Total Time</Text>
            <Text style={styles.text}>Total Weight</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
            <Text >15 Miles</Text>
            <Text >1 Hour</Text>
            <Text >12 Kg</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20
          }}>
            <Text style={{color: '#000', fontWeight: 'bold', marginLeft: 15 }}>Dimensions</Text>
            <Text style={{color: '#000', fontWeight: 'bold', marginLeft: 45 }}>Price</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 5,
          }}>
            <Text  style={{marginLeft: 15}}>30*30*30 cm</Text>
            <Text  style={{marginLeft: 35}}>15$</Text>
          </View>
        </View>
      </View>

      <View style={styles.sections}>
        <View style={styles.sectionstyle2}>
          <Text style={{color: '#000', fontWeight: 'bold', margin: 15}}>Package Status</Text>

          <View style={{flexDirection: 'column'}}>
            <View style={styles.status}>
              <View style={styles.border}>
                <View style={styles.circle}></View>
              </View>
              <Text style={styles.statustext}>Pickup Request Generated</Text>
            </View>
          </View>

          <View style={styles.status}>
            <View style={styles.border}>
              <View style={styles.circle}></View>
            </View>
            <Text style={styles.statustext}>Booking is Confirmed And Amount Is Deducted</Text>
            
          </View>

          <View style={styles.status}>
            <View style={styles.border}>
              <View style={styles.circle}></View>
            </View>
            <Text style={styles.statustext}>Driver Picked Up The Parcel</Text>
          </View>
          
          <View style={styles.status}>
            <View style={styles.border}>
              <View style={styles.circle}></View>
            </View>
            <Text style={styles.statustext}>On The Way</Text>
          </View>

          <View style={styles.status}>
            <View style={styles.border}>
              <View style={styles.circle}></View>
            </View>
            <Text style={styles.statustext}>Driver Delivered The Parcel</Text>
          </View>

        </View>
      </View>


    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  sections: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionstyle: {
    height: 180,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15
  },
  sectionstyle1: {
    height: 140,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15
  },
  sectionstyle2: {
    height: 250,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15
  },
  text: {
    color: '#000',
    fontWeight: 'bold'
  },
  box: {
    height: 70,
    width: '42%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  status: {
    flexDirection: 'row',
    margin: 8
  },
  border: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FF1493'
  },
  statustext: {
    marginLeft: 5
  }

})