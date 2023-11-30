export default function MyButton3({ count, onClick }) {
   //
   return (
      <button
         className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white font-bold"
         onClick={onClick}
      >
         Clicked {count} times
      </button>
   );
}
