const oddOrEven = async (num: number): Promise<string> => {
  debugger;
  const returnValue = num % 2 === 0 ? "even" : "odd";
  return returnValue;
};

export { oddOrEven };
