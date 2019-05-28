import phone from "./phone";
import tablet from "./tablet";
import Device from "react-native-device-detection";

//this returns either the phone styles or the tablet styles
export default (Device.isTablet ? tablet : phone);
