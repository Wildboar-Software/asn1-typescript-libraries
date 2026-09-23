import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    ObjectIdentifier,
    type BIT_STRING,
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
 * `true` when `value` is an encoded ASN.1 element.
 *
 * Checked before decoded objects and native values so a wrapper can
 * branch once, then call a monomorphic typed matcher.
 */
export
function isAsn1Element (value: unknown): value is ASN1Element {
    return ASN1Element.isElement(value);
}

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
    return isAsn1Element(value) ? decode(value) : value;
}

function isUniversal (element: ASN1Element, tagNumber: ASN1UniversalType): boolean {
    return element.tagClass === ASN1TagClass.universal
        && element.tagNumber === tagNumber;
}

/**
 * Encoded element, `DirectoryString` / `UnboundedDirectoryString`
 * CHOICE, or an already-transcoded JavaScript string.
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
    if (isAsn1Element(value)) {
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
    if (isAsn1Element(value)) {
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
    if (isAsn1Element(value) && isUniversal(value, ASN1UniversalType.sequence)) {
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
    if (typeof value === "bigint") {
        return value;
    }
    if (typeof value === "number") {
        return BigInt(value);
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
        isUniversal(value, ASN1UniversalType.integer)
        || isUniversal(value, ASN1UniversalType.enumerated)
    ) {
        return readInteger(value);
    }
    const inner = new BERElement();
    inner.fromBytes(value.value);
    return readInteger(inner);
}

/** BOOLEAN element or a JavaScript boolean. */
export type BooleanInput = ASN1Element | boolean;

/**
 * @param value Element or boolean.
 * @returns The boolean value.
 */
export
function readBoolean (value: BooleanInput): boolean {
    return typeof value === "boolean" ? value : value.boolean;
}

/** OCTET STRING element or the octet contents. */
export type OctetStringInput = ASN1Element | Uint8Array;

/**
 * @param value Element or bytes.
 * @returns The octet contents.
 */
export
function readOctetString (value: OctetStringInput): Uint8Array {
    return isAsn1Element(value) ? value.octetString : value;
}

/** BIT STRING element or one number per bit (`Uint8ClampedArray`). */
export type BitStringInput = ASN1Element | BIT_STRING;

/**
 * @param value Element or decoded bit string.
 * @returns One entry per significant bit.
 */
export
function readBitString (value: BitStringInput): BIT_STRING {
    return value instanceof Uint8ClampedArray ? value : value.bitString;
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
    if (isAsn1Element(value)) {
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
    if (!isAsn1Element(value)) {
        return value;
    }
    if (isUniversal(value, ASN1UniversalType.objectIdentifier)) {
        return value.objectIdentifier;
    }
    const inner = new BERElement();
    inner.fromBytes(value.value);
    return inner.objectIdentifier;
}

/** `GeneralizedTime` or `UTCTime` element, or a `Date` instant. */
export type TimeInput = ASN1Element | Date;

/**
 * @param value GeneralizedTime element or `Date`.
 * @returns The instant.
 */
export
function readGeneralizedTime (value: TimeInput): Date {
    return isAsn1Element(value) ? value.generalizedTime : value;
}

/**
 * @param value UTCTime element or `Date`.
 * @returns The instant.
 */
export
function readUTCTime (value: TimeInput): Date {
    return isAsn1Element(value) ? value.utcTime : value;
}

/** Character-string element or the decoded string. */
export type CharacterStringInput = ASN1Element | string;

/**
 * @param value Element or string.
 * @returns IA5String characters.
 */
export
function readIA5String (value: CharacterStringInput): string {
    return typeof value === "string" ? value : value.ia5String;
}

/**
 * @param value Element or string.
 * @returns NumericString characters.
 */
export
function readNumericString (value: CharacterStringInput): string {
    return typeof value === "string" ? value : value.numericString;
}

/**
 * @param value Element or string.
 * @returns UTF8String characters.
 */
export
function readUTF8String (value: CharacterStringInput): string {
    return typeof value === "string" ? value : value.utf8String;
}

/**
 * @param value Element or string.
 * @returns PrintableString characters.
 */
export
function readPrintableString (value: CharacterStringInput): string {
    return typeof value === "string" ? value : value.printableString;
}

/**
 * One substring piece after directory strings have been turned into
 * JavaScript strings. `control` and unrecognized choices are kept so
 * the typed matcher can reject them the way the specifications do.
 */
export type PreparedSubstring =
    | { readonly kind: "initial"; readonly text: string }
    | { readonly kind: "any"; readonly text: string }
    | { readonly kind: "final"; readonly text: string }
    | { readonly kind: "control" }
    | { readonly kind: "unknown" };

/** Encoded `SubstringAssertion`, decoded items, or prepared pieces. */
export type SubstringAssertionInput =
    | ASN1Element
    | readonly (SubstringAssertion_Item | PreparedSubstring | {
        readonly initial?: UnboundedDirectoryString | string;
        readonly any_?: UnboundedDirectoryString | string;
        readonly final?: UnboundedDirectoryString | string;
        readonly control?: unknown;
    })[];

function isPreparedSubstring (value: object): value is PreparedSubstring {
    if (!("kind" in value)) {
        return false;
    }
    const kind = (value as { kind?: unknown }).kind;
    return kind === "initial"
        || kind === "any"
        || kind === "final"
        || kind === "control"
        || kind === "unknown";
}

function pieceText (value: UnboundedDirectoryString | string): string {
    return typeof value === "string" ? value : directoryStringToString(value);
}

function readSubstringItem (
    item: SubstringAssertion_Item | PreparedSubstring | {
        readonly initial?: UnboundedDirectoryString | string;
        readonly any_?: UnboundedDirectoryString | string;
        readonly final?: UnboundedDirectoryString | string;
        readonly control?: unknown;
    },
): PreparedSubstring {
    if (isAsn1Element(item)) {
        return { kind: "unknown" };
    }
    if (isPreparedSubstring(item)) {
        return item;
    }
    if ("initial" in item && item.initial !== undefined) {
        return { kind: "initial", text: pieceText(item.initial) };
    }
    if ("any_" in item && item.any_ !== undefined) {
        return { kind: "any", text: pieceText(item.any_) };
    }
    if ("final" in item && item.final !== undefined) {
        return { kind: "final", text: pieceText(item.final) };
    }
    if ("control" in item) {
        return { kind: "control" };
    }
    return { kind: "unknown" };
}

/**
 * @param value Encoded or decoded substring assertion.
 * @returns Pieces whose text is a JavaScript string.
 */
export
function readSubstringAssertion (value: SubstringAssertionInput): PreparedSubstring[] {
    const items = isAsn1Element(value) ? _decode_SubstringAssertion(value) : value;
    const out = new Array<PreparedSubstring>(items.length);
    for (let i = 0; i < items.length; i++) {
        out[i] = readSubstringItem(items[i]);
    }
    return out;
}

/**
 * One octet-substring piece. Unrecognized choices stay so the typed
 * matcher can fail them.
 */
export type PreparedOctetSubstring =
    | { readonly kind: "initial"; readonly octets: Uint8Array }
    | { readonly kind: "any"; readonly octets: Uint8Array }
    | { readonly kind: "final"; readonly octets: Uint8Array }
    | { readonly kind: "unknown" };

/** Encoded `OctetSubstringAssertion`, decoded items, or byte pieces. */
export type OctetSubstringAssertionInput =
    | ASN1Element
    | readonly (OctetSubstringAssertion_Item | PreparedOctetSubstring | {
        readonly initial?: Uint8Array;
        readonly any_?: Uint8Array;
        readonly final?: Uint8Array;
    })[];

function isPreparedOctet (value: object): value is PreparedOctetSubstring {
    if (!("kind" in value)) {
        return false;
    }
    const kind = (value as { kind?: unknown }).kind;
    return kind === "initial" || kind === "any" || kind === "final" || kind === "unknown";
}

function readOctetItem (
    item: OctetSubstringAssertion_Item | PreparedOctetSubstring | {
        readonly initial?: Uint8Array;
        readonly any_?: Uint8Array;
        readonly final?: Uint8Array;
    },
): PreparedOctetSubstring {
    if (isAsn1Element(item)) {
        return { kind: "unknown" };
    }
    if (isPreparedOctet(item)) {
        return item;
    }
    if ("initial" in item && item.initial !== undefined) {
        return { kind: "initial", octets: item.initial };
    }
    if ("any_" in item && item.any_ !== undefined) {
        return { kind: "any", octets: item.any_ };
    }
    if ("final" in item && item.final !== undefined) {
        return { kind: "final", octets: item.final };
    }
    return { kind: "unknown" };
}

/**
 * @param value Encoded or decoded octet substring assertion.
 * @returns Pieces whose payloads are byte strings.
 */
export
function readOctetSubstringAssertion (
    value: OctetSubstringAssertionInput,
): PreparedOctetSubstring[] {
    const items = isAsn1Element(value) ? _decode_OctetSubstringAssertion(value) : value;
    const out = new Array<PreparedOctetSubstring>(items.length);
    for (let i = 0; i < items.length; i++) {
        out[i] = readOctetItem(items[i]);
    }
    return out;
}
