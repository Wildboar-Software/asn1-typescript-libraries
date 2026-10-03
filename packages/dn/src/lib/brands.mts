declare const rdnSequenceString: unique symbol;
declare const relativeDistinguishedNameString: unique symbol;
declare const escapedAttributeTypeAndValueString: unique symbol;
declare const attributeTypeAndValueString: unique symbol;

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
