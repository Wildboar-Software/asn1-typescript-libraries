import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

function isWordChar(c: string | undefined): boolean {
    return !!c && /[\p{L}\p{N}_]/u.test(c);
}

function ctContainsWord (haystack: string, needle: string): boolean {
    const nLen = needle.length;
    const hLen = haystack.length;
    let found = 0;
    for (let i = 0; i <= hLen; i++) {
        let mismatch = (i + nLen <= hLen) ? 0 : 1;
        for (let j = 0; j < nLen; j++) {
            const pos = i + j;
            const inPos = pos < hLen ? 1 : 0;
            const hc = hLen === 0 ? 0 : haystack.charCodeAt(inPos ? pos : 0);
            mismatch |= (hc ^ needle.charCodeAt(j)) | (inPos ^ 1);
        }
        const before = i > 0 ? haystack[i - 1] : undefined;
        const after = (i + nLen < hLen) ? haystack[i + nLen] : undefined;
        const boundary = (!isWordChar(before) && !isWordChar(after)) ? 1 : 0;
        found |= (mismatch === 0 ? 1 : 0) & boundary;
    }
    return found === 1;
}

/**
 * Rec. ITU-T X.520 (10/2019) clause 8.5.1: whether `needle` occurs
 * as a complete word in `haystack`. X.520 leaves the definition of
 * a "word" as a local matter; here a word is letters, digits, or
 * underscore, bounded by other characters or the string edges.
 */
export
function containsWord (
    haystack: string,
    needle: string,
    constantTime: boolean | number = false,
): boolean {
    if (constantTime) {
        return ctContainsWord(haystack, needle);
    }
    let i = haystack.indexOf(needle);
    while (i >= 0) {
        const before = haystack[i - 1];
        const after = haystack[i + needle.length];
        // We have to check that what we found isn't a substring of another
        // word. It must match on a complete word.
        if (!isWordChar(before) && !isWordChar(after)) {
            return true;
        }
        i = haystack.indexOf(needle, i + 1);
    }
    return false;
}

/**
 * Prepare a word the same way `wordMatch` prepares both sides:
 * trim, string preparation, then upper-case.
 */
function prepareWord (text: string): string | undefined {
    return prepString(text.trim())?.toUpperCase();
}

function prepareWordAssertion (el: ASN1Element): string {
    const prepared = prepareWord(readDirectoryString(el));
    if (!prepared) {
        throw new ASN1CharactersError(
            "wordMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.5.1 `wordMatch`.
 *
 * TRUE if the presented word matches any word in a
 * `DirectoryString` attribute value. Individual words are compared
 * as for `caseIgnoreMatch`. Preparation failure of a stored value
 * is UNDEFINED.
 *
 * @param assertion Presented word, already prepared and upper-cased.
 * @param value Stored text, or that text already prepared.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function wordMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = readDirectoryString(value);
    const stored = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : prepareWord(raw);
    if (!stored) {
        return undefined;
    }
    return containsWord(stored, assertion, flags & MATCH_FLAG_CONSTANT_TIME);
}

wordMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `wordMatch` as a `Matcher`. An assertion that cannot be prepared
 * throws `ASN1CharactersError`.
 */
export
const wordMatch: Matcher = createEqualityMatcher(
    prepareWordAssertion,
    wordMatchTyped,
);

export default wordMatch;
