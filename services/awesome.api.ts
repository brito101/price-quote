let baseurl = "https://economia.awesomeapi.com.br/json";

export const getUSD = async () => {
  try {
    const response = await fetch(`${baseurl}/last/USD-BRL`);
    const data = await response.json();
    if (data.USDBRL) {
      return parseFloat(data.USDBRL.ask);
    }
    return 0;
  } catch (error) {
    return 0;
  }
};

export const getEUR = async () => {
  try {
    const response = await fetch(`${baseurl}/last/EUR-BRL`);
    const data = await response.json();
    if (data.EURBRL) {
      return parseFloat(data.EURBRL.ask);
    }
    return 0;
  } catch (error) {
    return 0;
  }
};
