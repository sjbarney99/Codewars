// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

const whatday = n => {
	switch (n) {
		case 1:
			return (n = "Sunday");
		case 2:
			return (n = "Monday");
		case 3:
			return (n = "Tuesday");
		case 4:
			return (n = "Wednesday");
		case 5:
			return (n = "Thursday");
		case 6:
			return (n = "Friday");
		case 7:
			return (n = "Saturday");
		default:
			return (n = "Wrong, please enter a number between 1 and 7");
	}
};
