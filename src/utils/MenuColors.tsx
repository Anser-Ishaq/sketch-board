export const getMenuIconClass = (currentItem: string, expectedItem: string) => {
  return currentItem === expectedItem ? "bg-teal-900" : "bg-transparent";
};
