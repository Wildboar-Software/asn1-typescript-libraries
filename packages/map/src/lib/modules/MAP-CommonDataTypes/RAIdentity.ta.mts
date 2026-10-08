/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RAIdentity
 * @description
 *
 * Routing Area Identity, coded in accordance with 3GPP TS 29.060. Contains the
 * value part defined in TS 29.060 only: the TS 29.060 type identifier octet
 * shall not be included. Size 6 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAIdentity  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export
type RAIdentity = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RAIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RAIdentity = (el: _Element): RAIdentity => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("RAIdentity violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RAIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAIdentity, encoded as an ASN.1 Element.
 */
export const _encode_RAIdentity = $._encodeOctetString;


/* eslint-enable */
