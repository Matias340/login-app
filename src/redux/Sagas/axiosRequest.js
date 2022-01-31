import axios from 'axios';

const url = "https://60dcb7a3c2b6280017febc27.mockapi.io/api/tabla/loginUsers";

//este seria un get
export const axiosGetUsers = async () => {
  try {
      const response = await axios.get(url);
      return (response);
  } catch (error) {
      throw error;
  }
}

//este seria un post
export const axiosCreateUsers = async (users) => {
  try {
     const response = await axios.post(url, users);
     return (response);
  } catch (error) {
      throw error;
  }
}

export const axiosSignIn = async (user) => {
  try { 
     const response = await axios.get(url)
      for(let i=0; i<response.data[i]; i++){ 
        console.log(response.data[i])
        if(user.password === response.data[i].password){
          return response.data[i];
      }
     }
     return (response);
  } catch (error) {
      throw error;
  }
}
