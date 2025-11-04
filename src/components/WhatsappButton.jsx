import { MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react"

const whastappButton = () => {

  const [bounce, setBounce] = useState(false);

  const number = "3156538991";

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 10000)
    }, 8000)
    return () => clearInterval(interval)
  }, []);

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50 ${bounce ? "animate-bounce" : ""}`}
      title="Contactar por whatsapp"
    >
      <MessageCircleMore size={50} />
    </a>
  )
}

export default whastappButton;