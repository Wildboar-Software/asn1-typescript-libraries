

// Information on "\p{Cc}":
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
// - https://unicode.org/reports/tr18/#General_Category_Property
const mappedToNothing: RegExp = /[\u00AD\u1806\u034F\u180B-\u180D\uFE0F-\uFF00\uFFFC\u200B\p{Cc}]+/ug;
const prohibitedCharacters: RegExp = /[\uD800-\uDFFF\uFFFD]+/;

// TODO: Eventually, I would like an implementation that does not use regexes for performance reasons.
/**
 * @summary Prepare a string for matching, per ITU Recommendation X.520, Section 7.
 * @description
 *
 * This function normalizes an input string for comparison in X.500 matching
 * rules according to the procedures defined in
 * [ITU Recommendation X.520 (2019)](https://www.itu.int/rec/T-REC-X.520/en),
 * Section 7.
 *
 * The input string is already expected to be transcoded, thereby satisfying
 * the procedures defined in section 7.1. There is nothing to be done relating
 * to section 7.5. There is work to be done only for `NumericString` types in
 * section 7.6.2, but those should simply be handled in the `NumericString`
 * matching rules; they will not be handled here.
 *
 * @param str The string to be normalized.
 * @returns The normalized string, or `undefined` if there was a prohibited character.
 *
 * @function
 */
export
function prepString (str: string): string | undefined {
    if (prohibitedCharacters.test(str)) { // 7.4: Prohibit
        return undefined;
    }
    return str // The input is already expected to be transcoded according to 7.1.
        .trim() // 7.6.1: Insignificant Space Removal
        .replace(mappedToNothing, "") // 7.2: Map
        .replace(/\s+/g, " ") // 7.2: Map
        .normalize("NFKC") // 7.3: Normalize
}
