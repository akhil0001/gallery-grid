export const getImage = async () => {
  const { url: imageUrl } = await fetch("https://source.unsplash.com/random");
  return imageUrl;
};
