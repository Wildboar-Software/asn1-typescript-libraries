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
    decodeDirectoryAssertionPieces,
    mapSubstringChoices,
    matchPreparedString,
    normalizePieces,
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
 * Prepare each `LINE_SEPARATOR`-delimited line of a decoded piece and
 * join them again. Any line that fails preparation fails the piece.
 */
const prepareJoinedLines: StringPreparer = (raw) => {
    const lines = raw.split(LINE_SEPARATOR);
    for (let i = 0; i < lines.length; i++) {
        const prepared = prepareIgnore(lines[i]);
        if (!prepared) {
            return undefined;
        }
        lines[i] = prepared;
    }
    return lines.join(LINE_SEPARATOR);
};

/**
 * `prepString` deletes `LINE_SEPARATOR`, so removing it from a raw
 * line does not change the prepared line. It must be removed before
 * preparation so that it can only appear between joined lines.
 */
function withoutSeparator (raw: string, el?: ASN1Element): string {
    const stripped = raw.replaceAll(LINE_SEPARATOR, "");
    if (stripped.length === 0) {
        throw new ASN1CharactersError(
            `${RULE} assertion failed string preparation`,
            el,
        );
    }
    return stripped;
}

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
 * Join the asserted lines with `LINE_SEPARATOR` without preparing
 * them. One `PostalAddress` component stays one substring, and it
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
    return lines
        .map((line) => withoutSeparator(line, el))
        .join(LINE_SEPARATOR);
}

/**
 * Decode a `SubstringAssertion` without preparing its pieces.
 */
export
function decodeCaseIgnoreListSubstringsMatchAssertion (el: ASN1Element): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE)
        .map((piece) => {
            if ("initial" in piece) {
                return { initial: withoutSeparator(piece.initial, el) };
            } else if ("any_" in piece) {
                return { any_: withoutSeparator(piece.any_, el) };
            } else if ("final" in piece) {
                return { final: withoutSeparator(piece.final, el) };
            }
            return piece;
        });
}

/**
 * Decode the `PostalAddress` `strings` of a substrings filter item
 * without preparing them. The lines of each component are joined with
 * U+001F into one piece.
 */
export
function decodeCaseIgnoreListSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
): AssertedSubstring<string>[] {
    return mapSubstringChoices(items, joinAssertionLines, RULE);
}

/**
 * Prepare and case-fold each line of each presented piece once.
 */
export
function normalizeCaseIgnoreListSubstringsMatchAssertion (
    assertion: AssertedSubstring<string>[],
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareJoinedLines, RULE, el);
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
        const line = prepareStored(lines[i], prepareIgnore, flags, RULE);
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
    return matchPreparedString(assertion, joined, value, flags, RULE);
}

caseIgnoreListSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `caseIgnoreListSubstringsMatch` as a `Matcher`. The assertion is
 * a `SubstringAssertion` of directory strings. A filter component
 * is a `PostalAddress`. Its lines are joined with U+001F into
 * that one piece. `MATCH_FLAG_ASSERTION_NORMALIZED` skips preparation
 * of the assertion.
 */
export
const caseIgnoreListSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeCaseIgnoreListSubstringsMatchAssertion,
    caseIgnoreListSubstringsMatchTyped,
    decodeCaseIgnoreListSubstringsMatchFilterPieces,
    normalizeCaseIgnoreListSubstringsMatchAssertion,
);

export default caseIgnoreListSubstringsMatch;
