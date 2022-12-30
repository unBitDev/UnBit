export const styles = {
  contentTable: "overflow-x-auto my-5 relative shadow-md sm:rounded-lg",
  table: "w-full text-sm text-left text-white",
  thead: "text-xs text-gray-700 uppercase bg-primary",
  trNormal: "bg-white text-black border-b",
  trHover: "bg-gray-300 text-black border-b"
}

export const interspersed = (key: number) => {
  if(key % 2 === 0) return styles.trNormal;
  else return styles.trHover;
}
