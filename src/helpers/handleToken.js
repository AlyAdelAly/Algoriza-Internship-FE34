export const generateToken = (length = 16) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}

export const generateExpireDate = () => {
  const currentDate = new Date();
  const expirationDate = new Date(currentDate.getTime() + 30 * 60 * 1000);
  return expirationDate;
}