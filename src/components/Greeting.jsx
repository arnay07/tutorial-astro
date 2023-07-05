import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = (index) => {
    let newIndex = Math.floor(Math.random() * messages.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * messages.length);
    }
    setIndex(newIndex);
    return newIndex;
  };

  const [index, setIndex] = useState(0);
  const [greeting, setGreeting] = useState(messages[index]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(messages[randomMessage(index)])}>New Greeting</button>
    </div>
  );
}
