export function safeParseInt(num, defaultValue = 0) {
    if(isNaN(parseInt(num))) return defaultValue;
    return parseInt(num);
}

export function safeParseFloat(num, defaultValue = 0.00) {
    if(isNaN(parseFloat(num))) return defaultValue;
    return parseFloat(num);
}