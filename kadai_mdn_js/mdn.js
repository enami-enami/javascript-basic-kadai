const today = new Date("2025-4-30");

const year = today.getFullYear('2025年');

const month = today.getMonth('4月') + 1; 

const day = today.getDate('30日'); 

console.log(year + '年' + month + '月' + day + '日');
