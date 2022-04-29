export const setCookie = (cName: string, cValue: string, expireTime: number) => {
	const currentTimestamp = new Date().getTime();
	const expireDate = new Date(currentTimestamp + expireTime).toUTCString();
	const expires = "expires=" + expireDate;
	document.cookie = `cName=${cValue};${expires};`;
};

export const dateToPersian = (
	date: string,
	options: object = { year: 'numeric', month: 'long', day: 'numeric' },
) => {
	return date
		? new Date(date).toLocaleString('fa-IR', {
			timeZone: 'Asia/Tehran',
			...options,
		})
		: '-';
};