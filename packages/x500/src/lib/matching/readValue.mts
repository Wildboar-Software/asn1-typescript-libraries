import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    ObjectIdentifier,
    type INTEGER,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { tagClassName } from "@wildboar/asn1/functional";
import teletexToString from "@wildboar/teletex";
import { _decode_Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import type {
    UnboundedDirectoryString,
} from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import type {
    DirectoryString,
} from "../modules/SelectedAttributeTypes/DirectoryString.ta.mjs";
import type {
    PostalAddress,
} from "../modules/SelectedAttributeTypes/PostalAddress.ta.mjs";
import type {
    CaseIgnoreList,
} from "../modules/SelectedAttributeTypes/CaseIgnoreList.ta.mjs";
import type {
    SubstringAssertion_Item,
} from "../modules/SelectedAttributeTypes/SubstringAssertion-Item.ta.mjs";
import {
    _decode_OctetSubstringAssertion,
} from "../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type {
    OctetSubstringAssertion_Item,
} from "../modules/SelectedAttributeTypes/OctetSubstringAssertion-Item.ta.mjs";
import directoryStringToString from "../stringifiers/directoryStringToString.mjs";
import {
    prepString,
    type PrepStringOptions,
} from "../utils/prepString.mjs";

/**
 * Decode `value` when it is an element; otherwise return it unchanged.
 * Assertion and value are coerced separately, so their runtime types
 * may differ.
 */
export
function readDecoded<T> (
    value: ASN1Element | T,
    decode: (element: ASN1Element) => T,
): T {
    return ASN1Element.isElement(value) ? decode(value) : value;
}

/**
 * Encoded element, `DirectoryString` / `UnboundedDirectoryString`
 * CHOICE, a universal `IA5String`, `VisibleString`, or
 * `ObjectDescriptor`, or an already-transcoded JavaScript string.
 */
export type DirectoryStringInput =
    | ASN1Element
    | UnboundedDirectoryString
    | DirectoryString
    | string;

/**
 * Character contents of an encoded directory string.
 *
 * The five `UnboundedDirectoryString` alternatives are read from the
 * element. `IA5String`, `VisibleString`, and `ObjectDescriptor` are
 * accepted as well. An unrecognized tag raises the same error as
 * `_decode_UnboundedDirectoryString`.
 */
function readEncodedDirectoryString (value: ASN1Element): string {
    if (value.tagClass === ASN1TagClass.universal) {
        switch (value.tagNumber) {
        case ASN1UniversalType.utf8String:
            return value.utf8String;
        case ASN1UniversalType.printableString:
            return value.printableString;
        case ASN1UniversalType.teletexString:
            return teletexToString(value.teletexString);
        case ASN1UniversalType.universalString:
            return value.universalString;
        case ASN1UniversalType.bmpString:
            return value.bmpString;
        case ASN1UniversalType.ia5String:
            return value.ia5String;
        case ASN1UniversalType.visibleString:
            return value.visibleString;
        case ASN1UniversalType.objectDescriptor:
            return value.objectDescriptor;
        default:
            break;
        }
    }
    throw new Error(
        `Unrecognized CHOICE tag '${tagClassName(value.tagClass)} ${value.tagNumber}'.`,
    );
}

/**
 * X.520 clause 7 preparation for a `PrintableString`.
 *
 * The type is ASCII letters, digits, space, and `'()+,-./:=?`.
 * Those characters are already in NFKC, none are prohibited, and
 * none are mapped to nothing, so this only removes insignificant
 * spaces and, when requested, folds `A-Z` to `a-z`.
 *
 * Returns `false` when `str` contains a character outside that set,
 * so the caller can fall back to `prepString`.
 */
function prepPrintableString (
    str: string,
    caseFold: boolean,
): string | undefined | false {
    if (str.length === 0) {
        return undefined;
    }
    const chars: string[] = [];
    let pendingSpace = false;
    let started = false;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        const printable = code === 0x20
            || (code >= 0x27 && code <= 0x3A && code !== 0x2A)
            || code === 0x3D
            || code === 0x3F
            || (code >= 0x41 && code <= 0x5A)
            || (code >= 0x61 && code <= 0x7A);
        if (!printable) {
            return false;
        }
        if (code === 0x20) {
            if (started) {
                pendingSpace = true;
            }
            continue;
        }
        if (pendingSpace) {
            chars.push(" ");
            pendingSpace = false;
        }
        started = true;
        const folded = caseFold && code >= 0x41 && code <= 0x5A
            ? code + 0x20
            : code;
        chars.push(String.fromCharCode(folded));
    }
    if (!started) {
        return " ";
    }
    return chars.join("");
}

function printableChoice (value: object): string | undefined {
    if (!("printableString" in value)) {
        return undefined;
    }
    const choice = value as {
        readonly printableString?: unknown;
        readonly uTF8String?: unknown;
        readonly bmpString?: unknown;
        readonly universalString?: unknown;
        readonly teletexString?: unknown;
    };
    if (
        choice.uTF8String !== undefined
        || choice.bmpString !== undefined
        || choice.universalString !== undefined
        || choice.teletexString !== undefined
        || typeof choice.printableString !== "string"
    ) {
        return undefined;
    }
    return choice.printableString;
}

function preparePrintable (str: string, prep: PrepStringOptions): string | undefined {
    const prepared = prepPrintableString(str, prep.caseFold === true);
    if (prepared === false) {
        return prepString(str, prep);
    }
    return prepared;
}

/**
 * Character contents, then X.520 string preparation.
 * A `PrintableString` alternative skips Unicode map, prohibit,
 * and NFKC. `undefined` means preparation failed.
 */
function readPreparedDirectoryString (
    value: DirectoryStringInput,
    prep: PrepStringOptions,
): string | undefined {
    if (typeof value === "string") {
        return prepString(value, prep);
    }
    if (ASN1Element.isElement(value)) {
        if (
            value.tagClass === ASN1TagClass.universal
            && value.tagNumber === ASN1UniversalType.printableString
        ) {
            return preparePrintable(value.printableString, prep);
        }
        return prepString(readEncodedDirectoryString(value), prep);
    }
    const printable = printableChoice(value);
    if (printable !== undefined) {
        return preparePrintable(printable, prep);
    }
    return prepString(directoryStringToString(value), prep);
}

/**
 * @param value Element, directory-string alternative, or string.
 * @param prep When set, apply X.520 string preparation while reading.
 *  `undefined` means preparation failed.
 * @returns The character contents, prepared when `prep` is set.
 */
export
function readDirectoryString (value: DirectoryStringInput): string;
export
function readDirectoryString (
    value: DirectoryStringInput,
    prep: PrepStringOptions,
): string | undefined;
export
function readDirectoryString (
    value: DirectoryStringInput,
    prep?: PrepStringOptions,
): string | undefined {
    if (typeof value === "string") {
        return prep === undefined ? value : prepString(value, prep);
    }
    if (prep !== undefined) {
        return readPreparedDirectoryString(value, prep);
    }
    if (ASN1Element.isElement(value)) {
        return readEncodedDirectoryString(value);
    }
    return directoryStringToString(value);
}

/**
 * `PostalAddress`, `CaseIgnoreList`, a list of directory strings
 * and/or native strings, or the encoded SEQUENCE OF.
 */
export type DirectoryStringListInput =
    | ASN1Element
    | PostalAddress
    | CaseIgnoreList
    | readonly (UnboundedDirectoryString | DirectoryString | string)[];

/**
 * @param value Encoded list or an already-decoded list.
 * @param prep When set, prepare each element while reading it.
 *  A slot is `undefined` when that element's preparation fails.
 * @returns One string per list element, in order.
 */
export
function readDirectoryStringList (value: DirectoryStringListInput): string[];
export
function readDirectoryStringList (
    value: DirectoryStringListInput,
    prep: PrepStringOptions,
): (string | undefined)[];
export
function readDirectoryStringList (
    value: DirectoryStringListInput,
    prep?: PrepStringOptions,
): (string | undefined)[] {
    if (ASN1Element.isElement(value)) {
        const elements = value.sequenceOf;
        const out = new Array<string | undefined>(elements.length);
        for (let i = 0; i < elements.length; i++) {
            out[i] = prep === undefined
                ? readDirectoryString(elements[i])
                : readDirectoryString(elements[i], prep);
        }
        return out;
    }
    const out = new Array<string | undefined>(value.length);
    for (let i = 0; i < value.length; i++) {
        out[i] = prep === undefined
            ? readDirectoryString(value[i])
            : readDirectoryString(value[i], prep);
    }
    return out;
}

/**
 * First component of a SEQUENCE, or a directory string when the
 * caller already extracted that component.
 *
 * @returns `undefined` when an encoded SEQUENCE has no first component.
 */
export
function readFirstDirectoryString (value: DirectoryStringInput): string | undefined {
    if (
        ASN1Element.isElement(value)
        && value.tagClass === ASN1TagClass.universal
        && value.tagNumber === ASN1UniversalType.sequence
    ) {
        const first = value.sequence[0];
        if (!first) {
            return undefined;
        }
        return readDirectoryString(first);
    }
    return readDirectoryString(value);
}

/** INTEGER / ENUMERATED element, or a JavaScript `number` or `bigint`. */
export type IntegerInput = ASN1Element | number | bigint;

/**
 * @param value Element, `number`, or `bigint`.
 * @returns The integer as `bigint`.
 */
export
function readInteger (value: IntegerInput): bigint {
    if (typeof value === "number") {
        return BigInt(value);
    }
    if (typeof value === "bigint") {
        return value;
    }
    const decoded: INTEGER = value.integer;
    return typeof decoded === "bigint" ? decoded : BigInt(decoded);
}

/**
 * INTEGER assertion, or the INTEGER that is the first component of a
 * SEQUENCE. A `number` or `bigint` is that integer already.
 */
export
function readLeadingInteger (value: IntegerInput): bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return readInteger(value);
    }
    if (
        value.tagClass === ASN1TagClass.universal
        && (
            value.tagNumber === ASN1UniversalType.integer
            || value.tagNumber === ASN1UniversalType.enumerated
        )
    ) {
        return readInteger(value);
    }
    const inner = new BERElement();
    inner.fromBytes(value.value);
    return readInteger(inner);
}

/**
 * OBJECT IDENTIFIER element, `ObjectIdentifier`, or dotted-decimal
 * notation (`"2.5.4.3"`).
 */
export type ObjectIdentifierInput = ASN1Element | OBJECT_IDENTIFIER | string;

/**
 * @param value Element, object identifier, or dotted string.
 * @returns An object identifier.
 */
export
function readObjectIdentifier (value: ObjectIdentifierInput): OBJECT_IDENTIFIER {
    if (typeof value === "string") {
        return ObjectIdentifier.fromString(value);
    }
    if (ASN1Element.isElement(value)) {
        return value.objectIdentifier;
    }
    return value;
}

/**
 * OID assertion, or the OID that is the first component of a
 * SEQUENCE. A string or `ObjectIdentifier` is that OID already.
 */
export
function readLeadingObjectIdentifier (value: ObjectIdentifierInput): OBJECT_IDENTIFIER {
    if (typeof value === "string") {
        return ObjectIdentifier.fromString(value);
    }
    if (!ASN1Element.isElement(value)) {
        return value;
    }
    if (
        value.tagClass === ASN1TagClass.universal
        && value.tagNumber === ASN1UniversalType.objectIdentifier
    ) {
        return value.objectIdentifier;
    }
    const inner = new BERElement();
    inner.fromBytes(value.value);
    return inner.objectIdentifier;
}

/**
 * One `initial`, `any`, or `final` substring piece, plus `control`
 * and unrecognized choices so the typed matcher can reject them.
 * `T` is the piece payload: a string or an octet string.
 */
export type PreparedSubstringPiece<T> =
    | { readonly kind: "initial"; readonly value: T }
    | { readonly kind: "any"; readonly value: T }
    | { readonly kind: "final"; readonly value: T }
    | { readonly kind: "control" }
    | { readonly kind: "unknown" };

/** Prepared `SubstringAssertion` pieces. */
export type PreparedSubstring = PreparedSubstringPiece<string>;

/** Prepared `OctetSubstringAssertion` pieces. */
export type PreparedOctetSubstring = PreparedSubstringPiece<Uint8Array>;

/**
 * A CHOICE alternative before its component is converted to `T`.
 * `control` exists only on `SubstringAssertion`.
 */
type SubstringAlternative<T> = {
    readonly initial?: T;
    readonly any_?: T;
    readonly final?: T;
    readonly control?: unknown;
};

/** Encoded `SubstringAssertion`, decoded items, or prepared pieces. */
export type SubstringAssertionInput =
    | ASN1Element
    | readonly (
        | SubstringAssertion_Item
        | PreparedSubstring
        | SubstringAlternative<UnboundedDirectoryString | string>
    )[];

/** Encoded `OctetSubstringAssertion`, decoded items, or byte pieces. */
export type OctetSubstringAssertionInput =
    | ASN1Element
    | readonly (
        | OctetSubstringAssertion_Item
        | PreparedOctetSubstring
        | SubstringAlternative<Uint8Array>
    )[];

/**
 * Normalize one substring CHOICE, whether the payload is characters
 * or octets. `convert` turns the raw component into `TOut`.
 */
function readSubstringPiece<TIn, TOut> (
    item: ASN1Element | PreparedSubstringPiece<TOut> | SubstringAlternative<TIn>,
    convert: (component: TIn) => TOut,
): PreparedSubstringPiece<TOut> {
    if (ASN1Element.isElement(item)) {
        return { kind: "unknown" };
    }
    if ("kind" in item) {
        return item;
    }
    if ("initial" in item && item.initial !== undefined) {
        return { kind: "initial", value: convert(item.initial) };
    }
    if ("any_" in item && item.any_ !== undefined) {
        return { kind: "any", value: convert(item.any_) };
    }
    if ("final" in item && item.final !== undefined) {
        return { kind: "final", value: convert(item.final) };
    }
    if ("control" in item) {
        return { kind: "control" };
    }
    return { kind: "unknown" };
}

function readSubstringPieces<TIn, TOut> (
    items: readonly (ASN1Element | PreparedSubstringPiece<TOut> | SubstringAlternative<TIn>)[],
    convert: (component: TIn) => TOut,
): PreparedSubstringPiece<TOut>[] {
    const out = new Array<PreparedSubstringPiece<TOut>>(items.length);
    for (let i = 0; i < items.length; i++) {
        out[i] = readSubstringPiece(items[i], convert);
    }
    return out;
}

/**
 * One `SubstringAssertion` component, read from its encoding.
 * Directory-string alternatives become strings. `control` is decoded
 * so a malformed attribute still fails. Anything else is `unknown`.
 */
function readEncodedSubstringItem (item: ASN1Element): PreparedSubstring {
    if (item.tagClass === ASN1TagClass.context) {
        if (item.tagNumber === 0) {
            return { kind: "initial", value: readDirectoryString(item.inner) };
        }
        if (item.tagNumber === 1) {
            return { kind: "any", value: readDirectoryString(item.inner) };
        }
        if (item.tagNumber === 2) {
            return { kind: "final", value: readDirectoryString(item.inner) };
        }
        return { kind: "unknown" };
    }
    if (
        item.tagClass === ASN1TagClass.universal
        && item.tagNumber === ASN1UniversalType.sequence
    ) {
        _decode_Attribute(item);
        return { kind: "control" };
    }
    return { kind: "unknown" };
}

/**
 * @param value Encoded or decoded substring assertion.
 * @returns Pieces whose payload is a JavaScript string.
 */
export
function readSubstringAssertion (value: SubstringAssertionInput): PreparedSubstring[] {
    if (ASN1Element.isElement(value)) {
        const items = value.sequenceOf;
        const out = new Array<PreparedSubstring>(items.length);
        for (let i = 0; i < items.length; i++) {
            out[i] = readEncodedSubstringItem(items[i]);
        }
        return out;
    }
    return readSubstringPieces(value, (component) => (
        typeof component === "string" ? component : directoryStringToString(component)
    ));
}

/**
 * @param value Encoded or decoded octet substring assertion.
 * @returns Pieces whose payload is a byte string.
 */
export
function readOctetSubstringAssertion (
    value: OctetSubstringAssertionInput,
): PreparedOctetSubstring[] {
    const items = ASN1Element.isElement(value) ? _decode_OctetSubstringAssertion(value) : value;
    return readSubstringPieces(items, (component) => component);
}
