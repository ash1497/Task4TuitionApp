import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            height: 70,
            width: '100%',
            marginBottom: 20,
            backgroundColor: COLORS.primary,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            Payment Information
          </Text>
        </View>

        <View
          style={{
            height: 40,
            width: 300,
            marginBottom: 20,
            backgroundColor: COLORS.primary,
            borderRadius: 20,
          }}>
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            Accepted Credit Cards
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightGray,
          }}>
          <Image
            source={icons.visa}
            style={{height: 40, width: 65, margin: 10}}
          />
          <Image
            source={icons.mastercard}
            style={{height: 40, width: 65, margin: 10}}
          />
          <Image
            source={icons.amex}
            style={{height: 40, width: 65, margin: 10}}
          />
        </View>
        <View
          style={{
            margin: 15,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{margin: 10, flexDirection: 'row'}}>
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 150,
              }}
              placeholder="Card Number"
            />
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 150,
              }}
              placeholder="Full Name"
            />
          </View>

          <View style={{margin: 10, flexDirection: 'row'}}>
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 150,
                marginLeft: 20,
              }}
              placeholder="Expiry Date: eg: 02/25"
            />
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 60,
              }}
              placeholder="CVV"
            />
            <Image
              source={icons.cvv}
              style={{height: 40, width: 65, margin: 10}}
            />
          </View>
          <TextInput
            style={{
              margin: 5,
              borderRadius: 10,
              backgroundColor: COLORS.lightGray2,
              fontWeight: 'bold',
              fontSize: 14,
              width: 300,
            }}
            placeholder="Street: eg: 45 crossbridge avenue"
          />
          <View style={{margin: 10, flexDirection: 'row'}}>
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 100,
              }}
              placeholder="City"
            />
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 100,
              }}
              placeholder="Province"
            />
            <TextInput
              style={{
                margin: 5,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 100,
              }}
              placeholder="Postal Code"
            />
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              height: 30,
              width: 200,
              margin: 10,
              backgroundColor: COLORS.primary,
              borderRadius: 50,
              elevation: 8,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              SUBMIT PAYMENT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default Payment;
