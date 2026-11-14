import { ASN1CharactersError, ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import type { DirectoryString } from "../../modules/SelectedAttributeTypes/DirectoryString.ta.mjs";
import type { UnboundedDirectoryString } from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import type { DirectoryStringListInput } from "../readValue.mjs";
import { readDirectoryStringList } from "../readValue.mjs";
import { approximatelyEqualStrings } from "../approximate.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { ctStringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Decode the presented lines without preparing them.
 */
export
function decodeCaseIgnoreListMatchAssertion (el: ASN1Element): readonly string[] {
    return readDirectoryStringList(el);
}

/**
 * Prepare and case-fold every presented line once.
 */
export
function normalizeCaseIgnoreListMatchAssertion (
    lines: readonly string[] | IterableIterator<string>,
    el?: ASN1Element,
): readonly string[] {
    const prepared: string[] = [];
    for (const raw of lines) {
        const line = prepString(raw, { caseFold: true });
        if (line === undefined) {
            throw new ASN1CharactersError(
                "caseIgnoreListMatch assertion failed string preparation",
                el,
            );
        }
        prepared.push(line);
    }
    return prepared;
}

function matchListFast (
    assertion: readonly string[],
    lines: readonly string[],
    normalized: boolean,
    debug: boolean,
    approximate: boolean,
): boolean | undefined {
    if (assertion.length !== lines.length) {
        return false;
    }
    for (let i = 0; i < assertion.length; i++) {
        const stored = normalized
            ? lines[i]
            : prepString(lines[i], { caseFold: true });
        if (stored === undefined) {
            if (debug) {
                console.error(
                    `@wildboar/x500: debug: caseIgnoreListMatch: stored line at index ${i} failed string preparation`,
                );
            }
            return undefined;
        }
        if (approximate ? !approximatelyEqualStrings(assertion[i], stored) : (assertion[i] !== stored)) {
            return false;
        }
    }
    return true;
}

function matchListConstantTime (
    assertion: readonly string[],
    lines: readonly string[],
    normalized: boolean,
    debug: boolean,
    approximate: boolean,
): boolean | undefined {
    let matched = assertion.length === lines.length;
    let sawUndefined = false;
    const count = Math.max(assertion.length, lines.length);
    for (let i = 0; i < count; i++) {
        const rawLine = lines[i] ?? "";
        const stored = i < lines.length
            ? (normalized ? rawLine : prepString(rawLine, { caseFold: true }))
            : "";
        if (stored === undefined) {
            if (debug) {
                console.error(
                    `@wildboar/x500: debug: caseIgnoreListMatch: stored line at index ${i} failed string preparation`,
                );
            }
            sawUndefined = true;
            continue;
        }
        const aLine = assertion[i] ?? "";
        if (approximate ? !approximatelyEqualStrings(aLine, stored) : !ctStringsEqual(aLine, stored)) {
            matched = false;
        }
    }
    if (sawUndefined) {
        return undefined;
    }
    return matched;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.7 `caseIgnoreListMatch`.
 *
 * Equality of a SEQUENCE OF `UnboundedDirectoryString` (e.g.
 * postal address lines). TRUE iff both sequences have the same
 * number of strings and corresponding strings match as for
 * `caseIgnoreMatch`. Preparation failure of a stored line is
 * UNDEFINED.
 *
 * @param assertion Presented lines, already prepared and case-folded.
 * @param value Stored list, those lines already prepared, or an iterator of
 *  those lines. An iterator is read once into an array before the list reader.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreListMatchTyped (
    assertion: readonly string[],
    value: DirectoryStringListInput | IterableIterator<UnboundedDirectoryString | DirectoryString | string>,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored: DirectoryStringListInput = Array.isArray(value) || ASN1Element.isElement(value)
        ? value
        : Array.from(value);
    const lines = readDirectoryStringList(stored);
    const normalized = (flags & MATCH_FLAG_VALUE_NORMALIZED) !== 0;
    const approximate = (flags & MATCH_FLAG_APPROXIMATE) !== 0;
    const debug = (flags & MATCH_FLAG_DEBUG) !== 0;
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return matchListConstantTime(assertion, lines, normalized, debug, approximate);
    }
    return matchListFast(assertion, lines, normalized, debug, approximate);
}

caseIgnoreListMatchTyped satisfies TypedEquationFunction<readonly string[]>;

/**
 * `caseIgnoreListMatch` as a `Matcher`. An assertion line that
 * cannot be prepared throws `ASN1CharactersError`.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips preparation of the assertion.
 */
export
const caseIgnoreListMatch: Matcher = createEqualityMatcher(
    decodeCaseIgnoreListMatchAssertion,
    caseIgnoreListMatchTyped,
    undefined,
    false,
    normalizeCaseIgnoreListMatchAssertion,
);

export default caseIgnoreListMatch;
