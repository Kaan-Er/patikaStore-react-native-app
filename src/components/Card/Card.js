import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';

const Card = props => {
  const {title, imgURL, price, inStock} = props.item;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imgURL,
        }}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>{price}</Text>
      </View>
      <View style={styles.inStock}>
        {!inStock && <Text style={styles.inStockText}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default Card;
