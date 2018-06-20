console.log("Project Euler");

const euler1 = (num) => {
	for (let i = 1; i < num; i ++) {
		if (i % 3 === 0 || i % 5 === 0) {
			console.log(i);
		}
	};
};

euler1(10);