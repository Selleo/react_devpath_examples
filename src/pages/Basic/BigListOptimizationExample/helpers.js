const getIp = (id, shortId) => {
  const randomPart = Math.random().toString().slice(-4, -1);
  return `231.${randomPart}.${id.slice(-7, -4)}.${shortId}`;
};

export const getItem = () => {
  const id = Date.now().toString(10);
  const shortId = id.slice(-4, -1);
  return {
    id,
    first_name: `User${shortId}`,
    last_name: `Some${shortId}`,
    email: `user.some${shortId}@test.test`,
    gender: shortId % 2 ? "Male" : "Female",
    ipAddress: getIp(id, shortId),
  };
};
