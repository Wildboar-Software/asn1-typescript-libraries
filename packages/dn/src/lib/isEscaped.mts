const escape = "\\".charCodeAt(0);

export function isEscaped (str: string, index: number): boolean {
    let backslashes = 0;
    for (let i = index - 1; i >= 0 && str.charCodeAt(i) === escape; i--) {
        backslashes++;
    }
    return (backslashes % 2) === 1;
}

export default isEscaped;
