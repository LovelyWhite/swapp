export function getGlobal<T>(name: "loginData"): T;
export function setGlobal(key: string, value: any);
export interface LoginData {
  id: number;
  userCode: string;
  phone: string;
  userName: string;
  password: string;
  email: string;
  minPortrait: string;
  maxPortrait: string;
  userStatus: number;
  qrCode: string;
  sex: number;
  mood: string;
  site: string;
  loginDatetime: string;
  updDatetime: string;
  gmtDatetime: string;
  token: string;
}
