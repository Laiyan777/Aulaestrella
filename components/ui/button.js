export function Button({ children, className }) {
  return (
    <button className={"bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition " + className}>
      {children}
    </button>
  );
}
