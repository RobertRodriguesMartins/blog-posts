const getToken = async () => {
  const token = localStorage.getItem('token');
  if(!token) throw new Error('token not found');

  return token;
}

export default getToken;
