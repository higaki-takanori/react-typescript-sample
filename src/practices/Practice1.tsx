export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(100);
  return (
    <div>
      <p>practice1:引数の型指定</p>
      <button onClick={onClickPractice}>exec</button>
    </div>
  );
};
