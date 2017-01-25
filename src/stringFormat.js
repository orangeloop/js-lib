import formatters from 'underscore.string';
import moment     from 'moment';

export function formatDate(date, defaultFormat = '') {
		if (!date) return defaultFormat;
		if (!moment().isValid(date)) return defaultFormat;
		
		const parsedDate = new moment(date);

        return parsedDate.format("MM/DD/YYYY");
};

export function formatDateWithTime(date) {
    return formatDate(date) + ' ' + formatTime(date);
};

export function formatTime(date, defaultFormat = '') {
    if (!date) return defaultFormat;
    if (isNaN(Date.parse(date))) return defaultFormat;

    const parsedDate = new Date(date);
    return parsedDate.toLocaleTimeString();
};

export function formatCurrency(number){
    if (isNaN(number)) return '';
    
    return `\$${formatters.numberFormat(number, 2)}`;
};

export function humanize(str) {
    return formatters.humanize(str);
};

export function camelize(str) {
    return formatters.camelize(str);
};

export function titleize(str) {
    return formatters.titleize(str);
};