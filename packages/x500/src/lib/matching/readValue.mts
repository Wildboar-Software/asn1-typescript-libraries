import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    ObjectIdentifier,
    type INTEGER,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString,
} from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
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
import {
    _decode_SubstringAssertion,
} from "../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
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
 * @param value Element, directory-string alternative, or string.
 * @returns The character contents.
 */
export
function readDirectoryString (value: DirectoryStringInput): string {
    if (typeof value === "string") {
        return value;
    }
    if (ASN1Element.isElement(value)) {
        if (value.tagClass === ASN1TagClass.universal) {
            if (value.tagNumber === ASN1UniversalType.ia5String) {
                return value.ia5String;
            }
            if (value.tagNumber === ASN1UniversalType.visibleString) {
                return value.visibleString;
            }
            if (value.tagNumber === ASN1UniversalType.objectDescriptor) {
                return value.objectDescriptor;
            }
        }
        return directoryStringToString(_decode_UnboundedDirectoryString(value));
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
 * @returns One string per list element, in order.
 */
export
function readDirectoryStringList (value: DirectoryStringListInput): string[] {
    if (ASN1Element.isElement(value)) {
        const elements = value.sequenceOf;
        const out = new Array<string>(elements.length);
        for (let i = 0; i < elements.length; i++) {
            out[i] = readDirectoryString(elements[i]);
        }
        return out;
    }
    const out = new Array<string>(value.length);
    for (let i = 0; i < value.length; i++) {
        out[i] = readDirectoryString(value[i]);
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
 * @param value Encoded or decoded substring assertion.
 * @returns Pieces whose payload is a JavaScript string.
 */
export
function readSubstringAssertion (value: SubstringAssertionInput): PreparedSubstring[] {
    const items = ASN1Element.isElement(value) ? _decode_SubstringAssertion(value) : value;
    return readSubstringPieces(items, (component) => (
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
