/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TeleserviceCode
 * @description
 *
 * Identifies a single teleservice, a group of teleservices, or all
 * teleservices, as defined in 3GPP TS 22.003. Used only for supplementary
 * service management (3GPP TS 29.002 V19.1.0 clauses 7.6.4.39 and 17.7.9).
 *
 * One octet: bits 8-5 are the group; bits 4-1 are the specific service.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeleserviceCode  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type TeleserviceCode = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TeleserviceCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TeleserviceCode = (el: _Element): TeleserviceCode => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("TeleserviceCode violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TeleserviceCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeleserviceCode, encoded as an ASN.1 Element.
 */
export const _encode_TeleserviceCode = $._encodeOctetString;


/* eslint-enable */
