type Interval = {
	ge: number;
	divisor: number;
	unit: Intl.RelativeTimeFormatUnit;
}

export const formatDate = (date: Date): string => {
	const _second = 1000,
		_minute = 60 * _second,
		_hour = 60 * _minute,
		_day = 24 * _hour,
		_week = 7 * _day,
		_month = 4 * _week,
		_year = 12 * _month,
		intervals: Interval[] = [
			{ ge: _year, divisor: _year, unit: 'year' },
			{ ge: _month, divisor: _month, unit: 'month' },
			{ ge: _week, divisor: _week, unit: 'week' },
			{ ge: _day, divisor: _day, unit: 'day' },
			{ ge: _hour, divisor: _hour, unit: 'hour' },
			{ ge: _minute, divisor: _minute, unit: 'minute' },
			{ ge: 30 * _second, divisor: _second, unit: 'seconds' },
		];

	let rft = new Intl.RelativeTimeFormat('es', {
			localeMatcher: 'best fit',
			numeric: 'always',
			style: 'long',
		}),
		difference = Date.now() - new Date(date).getTime(),
		abs = Math.abs(difference),
		_interval = intervals.find((_i) => abs > _i.ge);
 
	if (!_interval) return "hola";

	return `Publicado hace ${rft.format(-Math.round(abs / _interval.divisor), _interval.unit)}`;
};
