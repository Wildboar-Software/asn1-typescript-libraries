/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ENCRYPTED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENCRYPTED{ToBeEnciphered}  ::=  BIT STRING (CONSTRAINED BY {
 *    -- shall be the result of applying an encipherment procedure
 *    -- to the BER-encoded octets of a value of -- ToBeEnciphered } )
 * ```
 */
export type ENCRYPTED<_ToBeEnciphered> = BIT_STRING;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
): $.ASN1Decoder<BIT_STRING> {
    return $._decodeBitString;
}

/**
 * @summary Returns a function that will encode a(n) ENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED as an ASN.1 element.
 */
export function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
): $.ASN1Encoder<BIT_STRING> {
    return $._encodeBitString;
}

/* eslint-enable */
