export default function MyButton({ title, onClick }) {
   return (
      <button
         onClick={onClick}
         className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white font-bold"
      >
         {title}
      </button>
   );
}
