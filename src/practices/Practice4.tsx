export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(100);
  return (
    <div>
      <p>practice4:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>exec</button>
    </div>
  );
};
