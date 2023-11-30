export default function RespondingEvent() {
   function handleClick() {
      alert("You clicked me!");
   }

   return <button onClick={handleClick}>Alert Button!</button>;
}
