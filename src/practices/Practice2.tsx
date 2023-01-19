export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => getTotalFee(100);
  return (
    <div>
      <p>practice2:返却値の型指定</p>
      <button onClick={onClickPractice}>exec</button>
    </div>
  );
};
