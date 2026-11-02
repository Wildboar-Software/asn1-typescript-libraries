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
import { directoryStringToString } from "../../stringifiers/directoryStringToString.mjs";
import {
    getStringSubstringsMatcher,
    MATCH_FLAG_ASSERTION_VALIDATED,
    MATCH_FLAG_DEBUG,
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
    rule?: string,
): string | undefined {
    if (flags & MATCH_FLAG_VALUE_NORMALIZED) {
        return raw;
    }
    const prepared = prepare(raw);
    if (prepared === undefined || prepared.length === 0) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                `@wildboar/x500: debug: ${rule ?? "substringMatch"}: stored value failed string preparation`,
            );
        }
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
 * alternative is an assertion error. `MATCH_FLAG_ASSERTION_VALIDATED`
 * skips checking the placement of `initial` and `final`.
 */
export
function mapSubstringChoices<T, U> (
    items: readonly SubstringChoice<T>[],
    convert: (component: T) => U,
    rule: string,
    flags: number = 0,
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
    if (!(flags & MATCH_FLAG_ASSERTION_VALIDATED)) {
        validateAnchors(out, rule);
    }
    return out;
}

/**
 * An empty piece would match at every cursor via `indexOf("")`, so it
 * is an assertion error even when the assertion is trusted to be
 * normalized already.
 */
function nonEmptyPiece (raw: string, rule: string, el?: ASN1Element): string {
    if (raw.length === 0) {
        throw new ASN1CharactersError(`${rule}: empty substring`, el);
    }
    return raw;
}

/**
 * Decode a `SubstringAssertion` into directory-string pieces without
 * preparing them. `control` is copied through.
 */
export
function decodeDirectoryAssertionPieces (
    el: ASN1Element,
    rule: string,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return mapSubstringChoices(
        _decode_SubstringAssertion(el),
        (ds) => nonEmptyPiece(directoryStringToString(ds), rule, el),
        rule,
        flags,
    );
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
    flags: number = 0,
): AssertedSubstring<string>[] {
    return normalizePieces(decodeDirectoryAssertionPieces(el, rule, flags), prepare, rule, el);
}

/**
 * Decode `FilterItem.substrings.strings` whose components are
 * `UnboundedDirectoryString` values, without preparing them.
 */
export
function decodeDirectoryFilterPieces (
    items: readonly FilterItem_substrings_strings_Item[],
    rule: string,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeFilterPieces(
        items,
        (component) => directoryStringToString(_decode_UnboundedDirectoryString(component)),
        rule,
        flags,
    );
}

/**
 * Decode filter substring components with a rule-specific reader
 * (numeric string, IA5, telephone, facsimile, postal line), without
 * preparing them.
 */
export
function decodeFilterPieces (
    items: readonly FilterItem_substrings_strings_Item[],
    read: (component: ASN1Element) => string,
    rule: string,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return mapSubstringChoices(
        items,
        (component) => nonEmptyPiece(read(component), rule, component),
        rule,
        flags,
    );
}

/**
 * Prepare each decoded `initial` / `any` / `final` piece with
 * `prepare`. `control` is copied through. A piece that cannot be
 * prepared throws `ASN1CharactersError`.
 */
export
function normalizePieces (
    pieces: readonly AssertedSubstring<string>[],
    prepare: StringPreparer,
    rule: string,
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    const out: AssertedSubstring<string>[] = new Array(pieces.length);
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if ("initial" in piece) {
            out[i] = { initial: assertPrepared(piece.initial, prepare, rule, el) };
        } else if ("any_" in piece) {
            out[i] = { any_: assertPrepared(piece.any_, prepare, rule, el) };
        } else if ("final" in piece) {
            out[i] = { final: assertPrepared(piece.final, prepare, rule, el) };
        } else {
            out[i] = piece;
        }
    }
    return out;
}

function hasMatchPiece (
    assertion: readonly AssertedSubstring<string>[],
    flags: number = 0,
    rule?: string,
): boolean {
    let sawPiece = false;
    let sawControl = false;
    for (let i = 0; i < assertion.length; i++) {
        const piece = assertion[i];
        if ("initial" in piece || "any_" in piece || "final" in piece) {
            sawPiece = true;
        } else if ("control" in piece) {
            sawControl = true;
        }
    }
    if (sawControl && (flags & MATCH_FLAG_DEBUG)) {
        console.error(
            `@wildboar/x500: debug: ${rule ?? "substringMatch"}: ignoring control attribute in substring assertion`,
        );
    }
    if (!sawPiece && (flags & MATCH_FLAG_DEBUG)) {
        console.error(
            `@wildboar/x500: debug: ${rule ?? "substringMatch"}: assertion contains no initial, any, or final substring`,
        );
    }
    return sawPiece;
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
    rule?: string,
): boolean | undefined {
    if (!hasMatchPiece(assertion, flags, rule)) {
        return undefined;
    }
    return getStringSubstringsMatcher(() => prepared)(
        assertion,
        value,
        undefined,
        flags,
    );
}
