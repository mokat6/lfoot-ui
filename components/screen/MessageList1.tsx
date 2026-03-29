import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

const fakeMessages = [
  "here is a fake message.",
  "Another old message.",
  "Lorem ipsum dolor ist amte.",
  "Short one.",
  "Testing animation.",
  "The quick brown fox jumps over the lazy dog.",
  "Smooth reveal incoming...",
  "React + Tailwnd = <3",
];

const MessageList1 = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Older message" },
    { id: 2, text: "Another one" },
    { id: 3, text: "Initial bottom message" },
  ]);

  const scrollRef = useRef(null);

  function addMessage() {
    const text = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];

    // new message goes to FRONT because flex-col-reverse

    setMessages((prev) => [{ id: Date.now(), text }, ...prev]);
  }

  // Keep scroll stuck to bottom

  useEffect(() => {
    scrollRef.current.scrollTop = 0;
  }, [messages.length]);

  const bottomMessage = messages[0];
  const olderMessages = messages.slice(1);

  return (
    <div className="h-[500px] bg-gray-100 p-4 rounded flex flex-col dark:bg-gray-900">
      <div ref={scrollRef} className="flex-1 overflow-auto flex flex-col-reverse gap-4">
        {/* newest > bottom visually */}
        <BottomMessage key={bottomMessage.id} text={bottomMessage.text} />

        {olderMessages.map((msg) => (
          <div key={msg.id} className="p-3 bg-gray-50 border rounded max-w-[80%]">
            {msg.text}
          </div>
        ))}
      </div>

      <button type="button" onClick={addMessage} className="mt-4 p-2 bg-bg-background text-white rounded ">
        Add messagex
      </button>
    </div>
  );
};

export default MessageList1;

const BottomMessage = ({ text }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // 1st frame: start at bottom (translate down)
    setAnimateIn(false);

    // 2nd frame: animate upward
    requestAnimationFrame(() => {
      setAnimateIn(true);
    });
  }, [text]); // <-- triggers for every new message

  return (
    <div className="min-h-[300px] bg-blue-50 border p-4 rounded relative overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 flex items-start p-4 text-blue-900",
          "transition-transform duration-500 ease-out",

          animateIn ? "translate-y-0 opacity-100" : "translate-y-[300px] opacity-0"
        )}
      >
        {text}
      </div>
    </div>
  );
};
