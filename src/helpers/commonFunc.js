export const clickHandler = (id, dispatch, action) => {
   dispatch(action(id));
}

export const cartHandler = (id, arr, dispatch, action) => {
   const value = arr.find((item) => item.phone_name === id);
   dispatch(action(value));
}

export const compareHandler = (id, arr, dispatch, action, compare_arr) => {
   if (compare_arr.length < 2) {
      const value = arr.find((item) => item.phone_name === id);
      dispatch(action(value.detail.replace("http", "https")));
   } else {
      alert("Вы можете выбрать только 2 устройства для сравнения");
   }
}

export const desireHandler = (id, arr, dispatch, action, status) => {
   if (status) {
      const value = arr.find((item) => item.phone_name === id);
      dispatch(action(value));
   }
}

export const addToModal = (arr, setPhone, setStatus, setTitle, title) => {
   if (arr && arr.length >= 1) {
      const copy = [...arr];
      const { phone_name } = copy.pop();
      setPhone(phone_name);
      setStatus(true);
      setTitle(title);
   }
   setTimeout(() => {
      setStatus(false);
   }, 1000);
}