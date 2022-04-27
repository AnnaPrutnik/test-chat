const BASE_URL = 'https://api.chucknorris.io/jokes/random';

export const fetchAnswer = async () => {
  const data = await fetch(BASE_URL).then((res) => res.json());
  return data.value;
};
