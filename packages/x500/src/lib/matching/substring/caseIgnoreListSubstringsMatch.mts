import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString } from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { readDirectoryStringList } from "../readValue.mjs";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    directoryAssertionPieces,
    filterPieces,
    prepareStored,
    type StringPreparer,
} from "./prepareSubstrings.mjs";

const RULE = "caseIgnoreListSubstringsMatch";

/** Same preparation as `caseIgnoreMatch`, per address line. */
const prepareIgnore: StringPreparer = (raw) => prepString(raw, { caseFold: true });

/**
 * One postal-address line. A `SEQUENCE OF` is that one line; more
 * than one line is an assertion error because one piece is one
 * string. A directory string is that line already.
 */
function readListComponent (el: ASN1Element): string {
    if (
        el.tagClass === ASN1TagClass.universal
        && el.tagNumber === ASN1UniversalType.sequence
    ) {
        const lines = el.sequenceOf;
        if (lines.length !== 1) {
            throw new Error(
                `${RULE}: a substring component must be a single line`,
            );
        }
        return directoryStringToString(_decode_UnboundedDirectoryString(lines[0]));
    }
    return directoryStringToString(_decode_UnboundedDirectoryString(el));
}

/**
 * Pieces match in order and do not overlap. A piece lies entirely
 * inside one prepared line: `initial` is a prefix of the first
 * line, `final` is a suffix of the last line, and `any` is sought
 * from the cursor without crossing a line boundary.
 */
function matchLines (
    assertion: readonly AssertedSubstring<string>[],
    lines: readonly string[],
): boolean | undefined {
    let sawPiece = false;
    let lineIndex = 0;
    let offset = 0;
    for (let i = 0; i < assertion.length; i++) {
        const piece = assertion[i];
        if ("control" in piece) {
            continue;
        }
        sawPiece = true;
        if (lines.length === 0) {
            return false;
        }
        if ("initial" in piece) {
            const needle = piece.initial;
            if (lineIndex !== 0 || offset !== 0 || !lines[0].startsWith(needle)) {
                return false;
            }
            offset = needle.length;
        } else if ("final" in piece) {
            const needle = piece.final;
            const last = lines.length - 1;
            const start = lines[last].length - needle.length;
            if (start < 0 || !lines[last].endsWith(needle)) {
                return false;
            }
            if (lineIndex > last || (lineIndex === last && offset > start)) {
                return false;
            }
            lineIndex = last;
            offset = lines[last].length;
        } else if ("any_" in piece) {
            const needle = piece.any_;
            let found = false;
            for (let line = lineIndex; line < lines.length; line++) {
                const from = (line === lineIndex) ? offset : 0;
                const idx = lines[line].indexOf(needle, from);
                if (idx >= 0) {
                    lineIndex = line;
                    offset = idx + needle.length;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }
    }
    if (!sawPiece) {
        return undefined;
    }
    return true;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.8
 * `caseIgnoreListSubstringsMatch`.
 *
 * Presented pieces are matched against the stored lines of a
 * `PostalAddress` / `CaseIgnoreList` as for
 * `caseIgnoreSubstringsMatch`, except a piece must not span two
 * lines. Case is folded and insignificant spaces are removed on
 * each line. `control` is ignored. Preparation failure of a stored
 * line is UNDEFINED.
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
    const rawLines = readDirectoryStringList(value);
    const lines: string[] = new Array(rawLines.length);
    for (let i = 0; i < rawLines.length; i++) {
        const prepared = prepareStored(rawLines[i], prepareIgnore, flags);
        if (prepared === undefined) {
            return undefined;
        }
        lines[i] = prepared;
    }
    return matchLines(assertion, lines);
}

caseIgnoreListSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `caseIgnoreListSubstringsMatch` as a `Matcher`. The assertion is
 * a `SubstringAssertion`. A filter component is one directory
 * string, or a one-line postal address.
 */
export
const caseIgnoreListSubstringsMatch: Matcher = createSubstringsMatcher(
    (el) => directoryAssertionPieces(el, prepareIgnore, RULE),
    caseIgnoreListSubstringsMatchTyped,
    (items) => filterPieces(items, readListComponent, prepareIgnore, RULE),
);

export default caseIgnoreListSubstringsMatch;
