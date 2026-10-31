import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString } from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { containsWord } from "./wordMatch.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

function readKeyword (value: string | ASN1Element): string {
    if (typeof value === "string") {
        return value;
    }
    return directoryStringToString(_decode_UnboundedDirectoryString(value));
}

function prepareKeyword (text: string): string | undefined {
    return prepString(text.trim())?.toUpperCase();
}

function prepareKeywordAssertion (el: ASN1Element): string {
    const prepared = prepareKeyword(readKeyword(el));
    if (!prepared) {
        throw new ASN1CharactersError(
            "keywordMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.5.2 `keywordMatch`.
 *
 * TRUE if the presented string matches any keyword in a
 * `DirectoryString` attribute value. Identification of keywords in
 * the stored value and the exactness of match are both local
 * matters. This implementation treats a keyword as a prepared,
 * case-folded complete word, using the same `containsWord` rule as
 * `wordMatch`. Preparation failure of a stored value is UNDEFINED.
 *
 * @param assertion Presented keyword, already prepared and upper-cased.
 * @param value Stored text, or that text already prepared.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function keywordMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = readKeyword(value);
    const stored = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : prepareKeyword(raw);
    if (!stored) {
        return undefined;
    }
    return containsWord(stored, assertion);
}

keywordMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `keywordMatch` as a `Matcher`. An assertion that cannot be
 * prepared throws `ASN1CharactersError`.
 */
export
const keywordMatch: Matcher = createEqualityMatcher(
    prepareKeywordAssertion,
    keywordMatchTyped,
);

export default keywordMatch;
