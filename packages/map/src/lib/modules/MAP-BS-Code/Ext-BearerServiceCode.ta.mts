/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ext_BearerServiceCode
 * @description
 *
 * Identifies a single bearer service, a group of bearer services, or all bearer
 * services, as defined in 3GPP TS 22.002. Used only for subscriber profile
 * management. Includes all values defined for `BearerServiceCode` (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.3 and 17.7.10).
 *
 * Octet 1 has the same layout as `BearerServiceCode`. Octets 2-5 are reserved
 * for future use; if received they shall be treated according to the exception
 * handling defined for the operation that uses this type.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-BearerServiceCode  ::=  OCTET STRING (SIZE (1..5))
 * ```
 */
export
type Ext_BearerServiceCode = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_BearerServiceCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_BearerServiceCode = (el: _Element): Ext_BearerServiceCode => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("Ext_BearerServiceCode violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_BearerServiceCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_BearerServiceCode, encoded as an ASN.1 Element.
 */
export const _encode_Ext_BearerServiceCode = $._encodeOctetString;


/* eslint-enable */
