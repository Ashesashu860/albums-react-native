import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) =>{
    const { textStyle, viewStyle } = styles;
    return(
        <View style={ viewStyle }>
            <Text style={ textStyle }>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#f3f3f3',
        jsutifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        elevation: 3,
        position: 'relative',
    },
    textStyle : {
        fontSize: 20
    }
};

export default Header;