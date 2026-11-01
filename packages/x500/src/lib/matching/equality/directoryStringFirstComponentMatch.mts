import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    readDirectoryString,
    readFirstDirectoryString,
} from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Prepare and case-fold the presented directory string once.
 */
function prepareAssertion (el: ASN1Element): string {
    const prepared = prepString(readDirectoryString(el), { caseFold: true });
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "directoryStringFirstComponentMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.3
 * `directoryStringFirstComponentMatch`.
 *
 * Compares a presented `UnboundedDirectoryString` with a SEQUENCE
 * whose first component is a mandatory `DirectoryString`. TRUE iff
 * that first component matches via `caseIgnoreMatch`. A missing
 * first component is FALSE. Preparation failure of the stored
 * component is UNDEFINED.
 *
 * @param assertion Presented string, already prepared and case-folded.
 * @param value Stored SEQUENCE, or the first component already read.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation of that component.
 */
export
function directoryStringFirstComponentMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const first = readFirstDirectoryString(value);
    if (first === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: directoryStringFirstComponentMatch: stored sequence has no first component",
            );
        }
        return false;
    }
    return caseIgnoreMatchTyped(assertion, first, getEqualityMatcher, flags);
}

directoryStringFirstComponentMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `directoryStringFirstComponentMatch` as a `Matcher`.
 */
export
const directoryStringFirstComponentMatch: Matcher = createEqualityMatcher(
    prepareAssertion,
    directoryStringFirstComponentMatchTyped,
);

export default directoryStringFirstComponentMatch;
