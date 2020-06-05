var now = new Date();
var month = now.getMonth() + 1;
var day = now.getDate();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
export var today = now.getFullYear() + "-" + month + "-" + day;

//Get deference betweens two dates
export const getDateDifference = (dateOne, dateTwo) => {
	const date1 = new Date(dateOne);
	const date2 = new Date(dateTwo);
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};
