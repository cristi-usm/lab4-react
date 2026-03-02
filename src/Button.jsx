function Button({ name, btnFunc }) {
  return (
    <>
      <button onClick={btnFunc}>{name}</button>
    </>
  );
}

export default Button;
