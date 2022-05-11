import { Device } from '@capacitor/device';


const logDeviceInfo = async () => {
  const info = await Device.getId();

                    localStorage.setItem('item', JSON.stringify(info));}

logDeviceInfo()
let uniqueId = JSON.parse(localStorage.getItem('item'))["uuid"];
export const user_id =  uniqueId;

export const backend = "161.35.144.228:3050";