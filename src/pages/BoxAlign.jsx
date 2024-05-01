import Box from '../components/Box/Box';
import Circle from '../components/Circle/Circle';

const BoxAlign = () => {
  const circleColorArr = ['pink', 'red', 'black', 'gray', 'green', 'blue', 'orange'];
  return (
    <div>
      {/* <Box boxColor='red' txt='A' />
      <Box boxColor='blue' txt='B' />
      <Box boxColor='green' txt='C' />
      <Box boxColor='pink' txt='D' /> */}
      <div style={{ display: 'flex' }}>
        {circleColorArr.map((val) => (
          <Circle color={val} />
        ))}
      </div>
    </div>
  );
};

export default BoxAlign;
