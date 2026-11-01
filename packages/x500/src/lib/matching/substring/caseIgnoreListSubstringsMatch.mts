import {
    ASN1CharactersError,
    ASN1Element,
    ASN1Error,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import { _decode_PostalAddress } from "../../modules/SelectedAttributeTypes/PostalAddress.ta.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { readDirectoryStringList } from "../readValue.mjs";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    assertPrepared,
    directoryAssertionPieces,
    mapSubstringChoices,
    matchPreparedString,
    prepareStored,
    type StringPreparer,
} from "./prepareSubstrings.mjs";

const RULE = "caseIgnoreListSubstringsMatch";

/**
 * Joins prepared postal-address lines. U+001F is a control
 * character, so `prepString` deletes it and a directory string
 * cannot contain it after preparation. A piece therefore cannot
 * span two stored lines unless the piece itself was built by
 * joining lines.
 */
const LINE_SEPARATOR = "\u001F";

/** Same preparation as `caseIgnoreMatch`, per address line. */
const prepareIgnore: StringPreparer = (raw) => prepString(raw, { caseFold: true });

/**
 * A filter component is a `PostalAddress` and nothing else.
 */
function componentLines (el: ASN1Element): readonly string[] {
    if (
        el.tagClass !== ASN1TagClass.universal
        || el.tagNumber !== ASN1UniversalType.sequence
    ) {
        throw new ASN1Error(
            `${RULE}: a substring component must be a PostalAddress`,
            el,
        );
    }
    return readDirectoryStringList(_decode_PostalAddress(el));
}

/**
 * Prepare each asserted line, then join with `LINE_SEPARATOR`.
 * One `PostalAddress` component stays one substring, and it
 * matches only when those lines occur adjacently.
 */
function joinAssertionLines (el: ASN1Element): string {
    const lines = componentLines(el);
    if (lines.length === 0) {
        throw new ASN1CharactersError(
            `${RULE} assertion failed string preparation`,
            el,
        );
    }
    const prepared = new Array<string>(lines.length);
    for (let i = 0; i < lines.length; i++) {
        prepared[i] = assertPrepared(lines[i], prepareIgnore, RULE, el);
    }
    return prepared.join(LINE_SEPARATOR);
}

function listFilterPieces (
    items: readonly FilterItem_substrings_strings_Item[],
): AssertedSubstring<string>[] {
    return mapSubstringChoices(items, joinAssertionLines, RULE);
}

/**
 * Prepare each stored line and join with `LINE_SEPARATOR`.
 * Preparation failure of any line is UNDEFINED.
 * `MATCH_FLAG_VALUE_NORMALIZED` skips preparation of each line.
 */
function joinStoredLines (
    lines: readonly string[],
    flags: number,
): string | undefined {
    const prepared = new Array<string>(lines.length);
    for (let i = 0; i < lines.length; i++) {
        const line = prepareStored(lines[i], prepareIgnore, flags);
        if (line === undefined) {
            return undefined;
        }
        prepared[i] = line;
    }
    return prepared.join(LINE_SEPARATOR);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.8
 * `caseIgnoreListSubstringsMatch`.
 *
 * Stored lines are prepared as for `caseIgnoreMatch`, joined with
 * U+001F, and matched by `caseIgnoreSubstringsMatch`. A
 * directory-string piece cannot contain that separator, so it
 * lies inside one line. A filter component that is a
 * `PostalAddress` is prepared and joined the same way, so that
 * one component matches only adjacent lines. `control` is
 * ignored. Preparation failure of a stored line is UNDEFINED.
 *
 * @param assertion Presented pieces, already prepared and case-folded.
 * @param value Stored list of directory strings.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation of each line.
 */
export
function caseIgnoreListSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const joined = joinStoredLines(readDirectoryStringList(value), flags);
    if (joined === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, joined, value, flags);
}

caseIgnoreListSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `caseIgnoreListSubstringsMatch` as a `Matcher`. The assertion is
 * a `SubstringAssertion` of directory strings. A filter component
 * is a `PostalAddress`. Its lines are joined with U+001F into
 * that one piece.
 */
export
const caseIgnoreListSubstringsMatch: Matcher = createSubstringsMatcher(
    (el) => directoryAssertionPieces(el, prepareIgnore, RULE),
    caseIgnoreListSubstringsMatchTyped,
    listFilterPieces,
);

export default caseIgnoreListSubstringsMatch;
