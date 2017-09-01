const oddOrEven = async (num: number): Promise<string> => {
  const returnValue = num % 2 === 0 ? "even" : "odd";
  return returnValue;
};

export { oddOrEven };
