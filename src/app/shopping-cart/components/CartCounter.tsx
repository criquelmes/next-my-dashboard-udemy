"use client";
import { useState } from "react";

interface CartCounterProps {
  value?: number;
}
export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex space-x-4">
        <button
          className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Agregar al carrito
        </button>
        <button
          className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all rounded-md"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Eliminar del carrito
        </button>
      </div>
    </>
  );
};
