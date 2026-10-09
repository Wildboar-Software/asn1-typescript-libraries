/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LSAIdentity
 * @description
 *
 * Localised Service Area identity (3 octets), coded according to 3GPP TS
 * 23.003. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.56 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAIdentity  ::=  OCTET STRING (SIZE (3))
 * ```
 */
export
type LSAIdentity = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LSAIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LSAIdentity = (el: _Element): LSAIdentity => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("LSAIdentity violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LSAIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAIdentity, encoded as an ASN.1 Element.
 */
export const _encode_LSAIdentity = $._encodeOctetString;


/* eslint-enable */
