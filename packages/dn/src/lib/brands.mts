import type { RDNSequence } from "./RDNSequence.ta.mjs";

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
