const convertUnixTimestampToReadableDate = (timestamp) => {
  
    const milliseconds = timestamp * 1000;


    const date = new Date(milliseconds);

    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const readableDate = date.toLocaleDateString('en-US', options);

    return readableDate;
};

const timestamp = 1714233600;
const readableDate = convertUnixTimestampToReadableDate(timestamp);
console.log(readableDate);

export default convertUnixTimestampToReadableDate;
