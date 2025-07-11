/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ENCIPHERED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENCIPHERED{ToBeEnciphered}  ::=  OCTET STRING (CONSTRAINED BY {
 *    -- shall be the result of applying an encipherment procedure
 *    -- to the BER-encoded octets of a value of -- ToBeEnciphered } )
 * ```
 */
export type ENCIPHERED<_ToBeEnciphered> = OCTET_STRING; // OctetStringType

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCIPHERED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCIPHERED<ToBeEnciphered>(
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
): $.ASN1Decoder<OCTET_STRING> {
    return $._decodeOctetString;
}

/**
 * @summary Returns a function that will encode a(n) ENCIPHERED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCIPHERED as an ASN.1 element.
 */
export function _get_encoder_for_ENCIPHERED<ToBeEnciphered>(
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
): $.ASN1Encoder<OCTET_STRING> {
    return $._encodeOctetString;
}

/* eslint-enable */
