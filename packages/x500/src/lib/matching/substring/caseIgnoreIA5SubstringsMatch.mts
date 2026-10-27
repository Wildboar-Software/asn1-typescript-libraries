import type { ASN1Element } from "@wildboar/asn1";
import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { matchStringPieces } from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readIA5StringComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * `caseIgnoreIA5SubstringsMatch` on pieces and an IA5 string.
 * Preparation matches `caseIgnoreIA5Match`, including case folding.
 *
 * @param assertion Presented pieces, not yet prepared.
 * @param value Stored IA5 string, not yet prepared.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseIgnoreIA5SubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    const mapped = assertion
        .filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => (
            piece.kind === "initial" || piece.kind === "any" || piece.kind === "final"
        ))
        .map((piece) => {
            const prepared = prepString(piece.value, CASE_FOLD);
            return prepared ? { kind: piece.kind, value: prepared } : undefined;
        });
    const pieces = mapped.filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => !!piece);
    if (pieces.length !== mapped.length) {
        return false;
    }
    const prepared = prepString(value, CASE_FOLD);
    if (prepared === undefined) {
        return false;
    }
    return matchStringPieces(pieces, prepared);
}

/**
 * Convert a DAP substrings filter whose components are `IA5String`
 * into a `SubstringAssertion`. Each component is transcoded to UTF-8.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is not IA5.
 */
export
function caseIgnoreIA5SubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readIA5StringComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String after string preparation (clause 7),
 * with the same ordered, non-overlapping partition as
 * `caseIgnoreSubstringsMatch`. `control` is ignored.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is an IA5
 * element or a JavaScript string.
 */
export
function caseIgnoreIA5SubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | string,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? caseIgnoreIA5SubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    const stored = typeof value === "string" ? value : value.ia5String;
    return caseIgnoreIA5SubstringsMatchTyped(
        readSubstringAssertion(decoded),
        stored,
    );
}

export default caseIgnoreIA5SubstringsMatch;
