export const Counter = ({
    value,
    onIncrement,
    onDecrement
  }) => (
    <div>
      <h1> An introduction to Redux </h1>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );