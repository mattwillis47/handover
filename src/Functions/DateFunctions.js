function calculateDays(date, units='days') {
    return Math.floor((Date.now() - date) / (24*3600*1000));
}

console.log(calculateDays(new Date(2022, 8, 14)));

export default calculateDays;