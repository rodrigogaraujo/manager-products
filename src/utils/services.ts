import Toast from 'react-native-toast-message'

export const showToast = (type: string, title: string, message: string) => {
  Toast.show({
    type: type,
    text1: title,
    text2: `${message} 👋`,
  })
}

export const truncate = (source: string, size: number) => {
  return source.trim().length > size ? source.trim().slice(0, size - 1) + "…" : source.trim();
}

export const formatReal = (int: number) => {
  let tmp = `${int}`;
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

  return tmp;
}
