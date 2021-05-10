import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const iconMapping = {
    'map-marker': { lib: FontAwesome, name: 'map-marker' },
    'user': { lib: FontAwesome, name: 'user' },
    'caret-down': { lib: Ionicons, name: 'caret-down' },
    "home-city": { lib: MaterialCommunityIcons, name: 'home-city' },
    "wechat": { lib: AntDesignIcons, name: 'wechat' },
    "appstore1": { lib: AntDesignIcons, name: 'appstore1' },
    "home-filled": { lib: MaterialIcons, name: 'home-filled' },
    "sensor-door": { lib: MaterialIcons, name: 'sensor-door' },
    "power-off": { lib: FontAwesome, name: 'power-off' },
}


export default iconMapping