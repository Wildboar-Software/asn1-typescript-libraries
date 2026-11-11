import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { approximatelyEqualStrings } from "../approximate.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

const NON_ASCII_WORD_CHAR = /[\p{L}\p{N}]/u;

/**
 * Letters, digits, or underscore. ASCII is a char-code table;
 * other code units go through `\p{L}` / `\p{N}`.
 */
function isWordCode (code: number): boolean {
    if (code <= 0x7F) {
        return (
            (code >= 0x30 && code <= 0x39)
            || (code >= 0x41 && code <= 0x5A)
            || (code >= 0x61 && code <= 0x7A)
            || code === 0x5F
        );
    }
    return NON_ASCII_WORD_CHAR.test(String.fromCharCode(code));
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
        const beforeOk = (i === 0 || !isWordCode(haystack.charCodeAt(i - 1))) ? 1 : 0;
        const afterIdx = i + nLen;
        const afterOk = (afterIdx >= hLen || !isWordCode(haystack.charCodeAt(afterIdx))) ? 1 : 0;
        found |= (mismatch === 0 ? 1 : 0) & beforeOk & afterOk;
    }
    return found === 1;
}

function approxContainsWord (
    haystack: string,
    needle: string,
    constantTime: boolean,
): boolean {
    let matched = false;
    const hLen = haystack.length;
    let i = 0;
    while (i < hLen) {
        while (i < hLen && !isWordCode(haystack.charCodeAt(i))) {
            i++;
        }
        const start = i;
        while (i < hLen && isWordCode(haystack.charCodeAt(i))) {
            i++;
        }
        if (start === i) {
            break;
        }
        if (approximatelyEqualStrings(haystack.slice(start, i), needle)) {
            if (!constantTime) {
                return true;
            }
            matched = true;
        }
    }
    return matched;
}

/**
 * Rec. ITU-T X.520 (10/2019) clause 8.5.1: whether `needle` occurs
 * as a complete word in `haystack`. X.520 leaves the definition of
 * a "word" as a local matter; here a word is letters, digits, or
 * underscore, bounded by other characters or the string edges.
 * An empty needle is not a word and never matches.
 */
export
function containsWord (
    haystack: string,
    needle: string,
    flags: number = 0,
): boolean {
    if (needle.length === 0) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: wordMatch: empty needle",
            );
        }
        return false;
    }
    const numFlags = typeof flags === "number" ? flags : (flags ? MATCH_FLAG_CONSTANT_TIME : 0);
    if (numFlags & MATCH_FLAG_APPROXIMATE) {
        return approxContainsWord(
            haystack,
            needle,
            Boolean(numFlags & MATCH_FLAG_CONSTANT_TIME),
        );
    }
    if (typeof flags === "boolean" ? flags : (numFlags & MATCH_FLAG_CONSTANT_TIME)) {
        return ctContainsWord(haystack, needle);
    }
    const nLen = needle.length;
    let i = haystack.indexOf(needle);
    while (i >= 0) {
        // We have to check that what we found isn't a substring of another
        // word. It must match on a complete word.
        if (
            (i === 0 || !isWordCode(haystack.charCodeAt(i - 1)))
            && (i + nLen >= haystack.length || !isWordCode(haystack.charCodeAt(i + nLen)))
        ) {
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

/**
 * Decode the presented word without preparing it. An empty word is
 * always rejected, because it cannot designate a complete word.
 */
export
function decodeWordMatchAssertion (el: ASN1Element): string {
    const raw = readDirectoryString(el);
    if (raw.length === 0) {
        throw new ASN1CharactersError(
            "wordMatch assertion failed string preparation",
            el,
        );
    }
    return raw;
}

/**
 * Trim, prepare, and upper-case the presented word once.
 */
export
function normalizeWordMatchAssertion (assertion: string, el?: ASN1Element): string {
    const prepared = prepareWord(assertion);
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
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: wordMatch: stored value failed string preparation",
            );
        }
        return undefined;
    }
    return containsWord(stored, assertion, flags);
}

wordMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `wordMatch` as a `Matcher`. An assertion that cannot be prepared
 * throws `ASN1CharactersError`. `MATCH_FLAG_ASSERTION_NORMALIZED` skips
 * preparation of the assertion.
 */
export
const wordMatch: Matcher = createEqualityMatcher(
    decodeWordMatchAssertion,
    wordMatchTyped,
    undefined,
    false,
    normalizeWordMatchAssertion,
);

export default wordMatch;
