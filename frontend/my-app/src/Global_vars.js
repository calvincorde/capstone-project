import { Device } from '@capacitor/device';

const logDeviceInfo = async () => {
  const info = await Device.getId();
 localStorage.setItem('item', JSON.stringify(info["uuid"]))
}
logDeviceInfo()
export const backend = "161.35.144.228:3050";
export const user_id = JSON.parse(localStorage.getItem('item'));
//export const user_id = "test";

