import {
    ASN1CharactersError,
    ASN1Element,
} from "@wildboar/asn1";
import type { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    _decode_SubstringAssertion,
} from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import type { UnboundedDirectoryString } from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString } from "../../stringifiers/directoryStringToString.mjs";
import {
    getStringSubstringsMatcher,
    MATCH_FLAG_VALUE_NORMALIZED,
    type AssertedSubstring,
} from "../../types/matching.mjs";

/**
 * Returns the prepared character string, or `undefined` when
 * preparation fails or the prepared string would be empty.
 */
export type StringPreparer = (raw: string) => string | undefined;

type SubstringChoice<T> =
    | { readonly initial: T }
    | { readonly any_: T }
    | { readonly final: T }
    | { readonly control: Attribute }
    | ASN1Element;

/**
 * Hyphens and spaces are insignificant for telephone-number
 * matching (X.520). Other characters, including `+`, stay.
 */
export
function normalizeTelephoneNumber (telephoneNumber: string): string {
    return telephoneNumber.replace(/[- ]/g, "");
}

/**
 * Prepare `raw` for an assertion piece. Failure and an empty
 * result are assertion errors: an empty piece would match at every
 * cursor via `indexOf("")`.
 */
export
function assertPrepared (
    raw: string,
    prepare: StringPreparer,
    rule: string,
    el?: ASN1Element,
): string {
    const prepared = prepare(raw);
    if (prepared === undefined || prepared.length === 0) {
        throw new ASN1CharactersError(
            `${rule} assertion failed string preparation`,
            el,
        );
    }
    return prepared;
}

/**
 * Prepare a stored string. `MATCH_FLAG_VALUE_NORMALIZED` keeps
 * `raw`. Preparation failure is UNDEFINED.
 */
export
function prepareStored (
    raw: string,
    prepare: StringPreparer,
    flags: number,
): string | undefined {
    if (flags & MATCH_FLAG_VALUE_NORMALIZED) {
        return raw;
    }
    const prepared = prepare(raw);
    if (prepared === undefined || prepared.length === 0) {
        return undefined;
    }
    return prepared;
}

function anchorError (rule: string, message: string): Error {
    return new Error(`${rule}: ${message}`);
}

/**
 * At most one `initial`, and it is the first piece that is not
 * `control`. At most one `final`, and it is the last such piece.
 * `control` is ignored by these rules.
 */
function validateAnchors<T> (
    pieces: readonly AssertedSubstring<T>[],
    rule: string,
): void {
    let initialAt = -1;
    let finalAt = -1;
    let firstMatch = -1;
    let lastMatch = -1;
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if ("control" in piece) {
            continue;
        }
        if (firstMatch < 0) {
            firstMatch = i;
        }
        lastMatch = i;
        if ("initial" in piece) {
            if (initialAt >= 0) {
                throw anchorError(rule, "more than one initial");
            }
            initialAt = i;
        } else if ("final" in piece) {
            if (finalAt >= 0) {
                throw anchorError(rule, "more than one final");
            }
            finalAt = i;
        }
    }
    if (initialAt >= 0 && initialAt !== firstMatch) {
        throw anchorError(rule, "initial is not the first substring");
    }
    if (finalAt >= 0 && finalAt !== lastMatch) {
        throw anchorError(rule, "final is not the last substring");
    }
}

/**
 * Map substring CHOICE values to prepared pieces. An unrecognized
 * alternative is an assertion error.
 */
export
function mapSubstringChoices<T, U> (
    items: readonly SubstringChoice<T>[],
    convert: (component: T) => U,
    rule: string,
): AssertedSubstring<U>[] {
    const out: AssertedSubstring<U>[] = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (ASN1Element.isElement(item)) {
            throw anchorError(rule, "unrecognized substring alternative");
        }
        if ("initial" in item && item.initial !== undefined) {
            out[i] = { initial: convert(item.initial) };
        } else if ("any_" in item && item.any_ !== undefined) {
            out[i] = { any_: convert(item.any_) };
        } else if ("final" in item && item.final !== undefined) {
            out[i] = { final: convert(item.final) };
        } else if ("control" in item && item.control !== undefined) {
            out[i] = { control: item.control };
        } else {
            throw anchorError(rule, "unrecognized substring alternative");
        }
    }
    validateAnchors(out, rule);
    return out;
}

function prepareDirectoryPiece (
    ds: UnboundedDirectoryString,
    prepare: StringPreparer,
    rule: string,
    el?: ASN1Element,
): string {
    return assertPrepared(directoryStringToString(ds), prepare, rule, el);
}

/**
 * Decode a `SubstringAssertion` and prepare each directory-string
 * piece. `control` is copied through.
 */
export
function directoryAssertionPieces (
    el: ASN1Element,
    prepare: StringPreparer,
    rule: string,
): AssertedSubstring<string>[] {
    return mapSubstringChoices(
        _decode_SubstringAssertion(el),
        (ds) => prepareDirectoryPiece(ds, prepare, rule, el),
        rule,
    );
}

/**
 * Prepare `FilterItem.substrings.strings` whose components are
 * `UnboundedDirectoryString` values.
 */
export
function directoryFilterPieces (
    items: readonly FilterItem_substrings_strings_Item[],
    prepare: StringPreparer,
    rule: string,
): AssertedSubstring<string>[] {
    return mapSubstringChoices(
        items,
        (component) => assertPrepared(
            directoryStringToString(_decode_UnboundedDirectoryString(component)),
            prepare,
            rule,
            component,
        ),
        rule,
    );
}

/**
 * Prepare filter substring components with a rule-specific reader
 * (numeric string, IA5, telephone, facsimile, postal line).
 */
export
function filterPieces (
    items: readonly FilterItem_substrings_strings_Item[],
    read: (component: ASN1Element) => string,
    prepare: StringPreparer,
    rule: string,
): AssertedSubstring<string>[] {
    return mapSubstringChoices(
        items,
        (component) => assertPrepared(read(component), prepare, rule, component),
        rule,
    );
}

function hasMatchPiece (assertion: readonly AssertedSubstring<string>[]): boolean {
    for (let i = 0; i < assertion.length; i++) {
        const piece = assertion[i];
        if ("initial" in piece || "any_" in piece || "final" in piece) {
            return true;
        }
    }
    return false;
}

/**
 * Match already-prepared pieces against an already-prepared string.
 * An assertion with no `initial` / `any` / `final` is UNDEFINED
 * rather than a match of every value. `MATCH_FLAG_CONSTANT_TIME`
 * is honored by `getStringSubstringsMatcher`.
 */
export
function matchPreparedString (
    assertion: AssertedSubstring<string>[],
    prepared: string,
    value: ASN1Element,
    flags: number,
): boolean | undefined {
    if (!hasMatchPiece(assertion)) {
        return undefined;
    }
    return getStringSubstringsMatcher(() => prepared)(
        assertion,
        value,
        undefined,
        flags,
    );
}
