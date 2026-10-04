import type { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import type { RDNSequence } from "./RDNSequence.ta.mjs";
import type { RelativeDistinguishedName } from "./RelativeDistinguishedName.ta.mjs";
import type { DotDelimitedOidString } from "@wildboar/asn1";

declare const attributeType: unique symbol;
declare const rdnSequenceString: unique symbol;
declare const relativeDistinguishedNameString: unique symbol;
declare const escapedAttributeTypeAndValueString: unique symbol;
declare const attributeTypeAndValueString: unique symbol;
declare const rdnSequenceBER: unique symbol;
declare const relativeDistinguishedNameBER: unique symbol;
declare const attributeTypeAndValueBER: unique symbol;
declare const ditOrder: unique symbol;

/**
 * @summary A string validated as an IETF RFC 4514 distinguished name.
 * @description
 *
 * Produced by `validateRDNSequenceString()` or
 * `isRDNSequenceString()`. The empty string, which names the root
 * DSE, is a valid `RDNSequenceString`.
 */
export
type RDNSequenceString = string & {
    readonly [rdnSequenceString]: true;
};

/**
 * @summary A string validated as an IETF RFC 4514 relative
 * distinguished name.
 * @description
 *
 * Produced by `validateRelativeDistinguishedNameString()` or
 * `isRelativeDistinguishedNameString()`. A valid RDN contains no
 * unescaped comma, so it is also a valid distinguished name of one
 * RDN.
 */
export
type RelativeDistinguishedNameString = RDNSequenceString & {
    readonly [relativeDistinguishedNameString]: true;
};

/**
 * @summary A string validated as an IETF RFC 4514
 * `attributeTypeAndValue`, with its value escaped as in a
 * distinguished name.
 * @description
 *
 * Produced by `validateAttributeTypeAndValueString(atav, true)` or
 * `isAttributeTypeAndValueString(atav, true)`. A valid escaped
 * attribute type and value contains no unescaped plus sign or
 * comma, so it is also a valid single-valued RDN and a valid
 * distinguished name of one RDN.
 */
export
type EscapedAttributeTypeAndValueString = RelativeDistinguishedNameString & {
    readonly [escapedAttributeTypeAndValueString]: true;
};

/**
 * @summary A string validated as an attribute type and value whose
 * value is not escaped.
 * @description
 *
 * Produced by `validateAttributeTypeAndValueString(atav)` or
 * `isAttributeTypeAndValueString(atav)`. The value may contain
 * characters that must be escaped in a distinguished name, so this
 * is not assignable to {@link RelativeDistinguishedNameString} or
 * {@link RDNSequenceString}.
 */
export
type AttributeTypeAndValueString = string & {
    readonly [attributeTypeAndValueString]: true;
};

/**
 * @summary Bytes validated as the Basic Encoding Rules (BER) encoding
 * of one `RDNSequence`.
 * @description
 *
 * Produced by `validateRDNSequenceBER()` or `isRDNSequenceBER()`.
 * Because `DistinguishedName ::= RDNSequence` and `Name` has only the
 * `rdnSequence` alternative, which is not tagged, these bytes are also
 * a valid BER encoding of a `DistinguishedName` and a `Name`.
 *
 * The bytes are not necessarily valid DER, and attribute values have
 * not been verified.
 */
export
type RDNSequenceBER = Uint8Array & {
    readonly [rdnSequenceBER]: true;
};

/**
 * @summary Bytes validated as the Basic Encoding Rules (BER) encoding
 * of one `Name`.
 * @description
 *
 * Produced by `validateNameBER()` or `isNameBER()`. This is the same
 * type as {@link RDNSequenceBER}, since `Name` has only the untagged
 * `rdnSequence` alternative.
 *
 * The bytes are not necessarily valid DER, and attribute values have
 * not been verified.
 */
export
type NameBER = RDNSequenceBER;

/**
 * @summary Bytes validated as the Basic Encoding Rules (BER) encoding
 * of one `RelativeDistinguishedName`.
 * @description
 *
 * Produced by `validateRelativeDistinguishedNameBER()` or
 * `isRelativeDistinguishedNameBER()`.
 *
 * The bytes are not necessarily valid DER, and attribute values have
 * not been verified.
 */
export
type RelativeDistinguishedNameBER = Uint8Array & {
    readonly [relativeDistinguishedNameBER]: true;
};

/**
 * @summary Bytes validated as the Basic Encoding Rules (BER) encoding
 * of one `AttributeTypeAndValue`.
 * @description
 *
 * Produced by `validateAttributeTypeAndValueBER()` or
 * `isAttributeTypeAndValueBER()`.
 *
 * The bytes are not necessarily valid DER, and the attribute value has
 * not been verified.
 */
export
type AttributeTypeAndValueBER = Uint8Array & {
    readonly [attributeTypeAndValueBER]: true;
};

/**
 * @summary The order of the RDNs in a distinguished name, relative to
 * the Directory Information Tree (DIT).
 * @description
 *
 * - `"ascending"`: the first RDN is that of the entry named, and each
 *   RDN after it is that of the superior of the one before it. This is
 *   the order of LDAP strings (IETF RFC 4514, section 2.1).
 * - `"descending"`: the first RDN is that of an entry immediately
 *   subordinate to the root, and the last RDN is that of the entry
 *   named. This is the order of an X.500 `RDNSequence`.
 */
export
type DITOrder = "ascending" | "descending";

/**
 * @summary An `RDNSequence` whose RDNs are in DIT ascending order, as
 * in LDAP.
 * @description
 *
 * The first RDN is that of the entry named, and the last is that of an
 * entry immediately subordinate to the root. Produced by
 * `asDITAscending()` or `toDITAscending()`.
 *
 * This is mutually exclusive with {@link RDNSequenceDescending}:
 * neither is assignable to the other, and their intersection is
 * `never`.
 */
export
type RDNSequenceAscending = RDNSequence & {
    readonly [ditOrder]: "ascending";
};

/**
 * @summary An `RDNSequence` whose RDNs are in DIT descending order, as
 * in X.500.
 * @description
 *
 * The first RDN is that of an entry immediately subordinate to the
 * root, and the last is that of the entry named. Produced by
 * `asDITDescending()` or `toDITDescending()`.
 *
 * This is mutually exclusive with {@link RDNSequenceAscending}:
 * neither is assignable to the other, and their intersection is
 * `never`.
 */
export
type RDNSequenceDescending = RDNSequence & {
    readonly [ditOrder]: "descending";
};

/**
 * @summary An `RDNSequence` that is either not branded with a DIT order
 * or is already branded with the DIT order `O`.
 * @description
 *
 * Used to prevent an `RDNSequence` in one DIT order from being cast to
 * the other without being reversed.
 */
export
type RDNSequenceCastableToDITOrder<O extends DITOrder> = RDNSequence & {
    readonly [ditOrder]?: O;
};

/**
 * @summary An `AttributeTypeAndValue` whose attribute type is known at
 * compile time to be the object identifier `T`.
 * @description
 *
 * `T` is the dotted-decimal notation of the attribute type's object
 * identifier, as a string literal type: for example,
 * `AttributeTypeAndValueOf<"2.5.4.3">` is an `AttributeTypeAndValue`
 * whose type is `commonName`. Produced by
 * `isAttributeTypeAndValueOf()`.
 *
 * Any object identifier may be used, so this can be extended to
 * attribute types that this library does not know about.
 *
 * The brands for two different object identifiers are mutually
 * exclusive: neither is assignable to the other, and their
 * intersection is `never`. If `T` is a union of object identifiers,
 * this is an `AttributeTypeAndValue` whose type is any one of them.
 */
export
type AttributeTypeAndValueOf<T extends DotDelimitedOidString> =
    AttributeTypeAndValue & {
        readonly [attributeType]: T;
    };

/**
 * @summary A relative distinguished name that consists of exactly one
 * attribute type and value, whose type is the object identifier `T`.
 * @description
 *
 * This is a one-element tuple of {@link AttributeTypeAndValueOf}, so it
 * is assignable to `RelativeDistinguishedName`, but a
 * `RelativeDistinguishedName` is not assignable to it. RDNs for
 * different object identifiers are not assignable to each other.
 */
export
type RelativeDistinguishedNameOf<T extends DotDelimitedOidString> =
    [AttributeTypeAndValueOf<T>];

/**
 * @summary An array of exactly `N` elements of type `E`.
 * @description
 *
 * `N` must be a non-negative integer literal. If `N` is `number`, this
 * is `E[]`. Because this is built recursively, `N` is limited by
 * TypeScript's recursion depth for tuple types (about 1000).
 */
export
type FixedLengthArray<
    E,
    N extends number,
    Acc extends E[] = [],
> = number extends N
    ? E[]
    : Acc["length"] extends N
        ? Acc
        : FixedLengthArray<E, N, [...Acc, E]>;

/**
 * @summary A relative distinguished name of exactly `N` attribute
 * types and values.
 * @description
 *
 * `N` may be `0` even though X.501 requires that a
 * `RelativeDistinguishedName` have at least one element
 * (`SIZE (1..MAX)`).
 */
export
type RelativeDistinguishedNameOfLength<N extends number> =
    FixedLengthArray<AttributeTypeAndValue, N>;

/**
 * @summary An `RDNSequence` of exactly `N` relative distinguished
 * names.
 * @description
 *
 * `N` may be `0`, which is the root DSE's name.
 */
export
type RDNSequenceOfLength<N extends number> =
    FixedLengthArray<RelativeDistinguishedName, N>;

/**
 * @summary An `RDNSequence` in which every RDN has exactly one
 * attribute type and value, and whose type is the object identifier
 * `T`.
 * @description
 *
 * If `T` is a union, each RDN may use any one of the object
 * identifiers in that union. For example, a DN made only of `oidC`,
 * `oidC1` and `oidC2` RDNs, which can be converted to an object
 * identifier, is
 * `RDNSequenceOf<typeof oidC1OID | typeof oidC2OID | typeof oidCOID>`.
 * An empty sequence is of every type.
 */
export
type RDNSequenceOf<T extends DotDelimitedOidString> =
    RelativeDistinguishedNameOf<T>[];

/**
 * @summary An `RDNSequence` of at least one RDN, whose first RDN is
 * `R`.
 * @description
 *
 * "First" refers to position in the array, not to the DIT: in DIT
 * descending order (X.500) this is the top-level entry's RDN, and in DIT
 * ascending order (LDAP) it is the RDN of the entry named. Intersect this with
 * {@link RDNSequenceDescending} or {@link RDNSequenceAscending} to also
 * require an order.
 */
export
type RDNSequenceStartingWith<R extends RelativeDistinguishedName> =
    [R, ...RelativeDistinguishedName[]];

/**
 * @summary An `RDNSequence` of at least one RDN, whose last RDN is `R`.
 * @description
 *
 * "Last" refers to position in the array, not to the DIT: in DIT
 * descending order (X.500) this is the RDN of the entry named, and in DIT
 * ascending order (LDAP) it is the top-level entry's RDN. Intersect this with
 * {@link RDNSequenceDescending} or {@link RDNSequenceAscending} to also
 * require an order.
 */
export
type RDNSequenceEndingWith<R extends RelativeDistinguishedName> =
    [...RelativeDistinguishedName[], R];
