/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
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
export
type ENCRYPTED<ToBeEnciphered> = BIT_STRING;

let _cached_decoder_for_ENCRYPTED: $.ASN1Decoder<ENCRYPTED<ToBeEnciphered>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(_decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>): $.ASN1Decoder<ENCRYPTED<ToBeEnciphered>> {
    return $._decodeBitString;
}

let _cached_encoder_for_ENCRYPTED: $.ASN1Encoder<ENCRYPTED<ToBeEnciphered>> | null = null;

/**
 * @summary Returns a function that will encode a(n) ENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED as an ASN.1 element.
 */
export
function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(_encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>): $.ASN1Encoder<ENCRYPTED<ToBeEnciphered>> {
    return $._encodeBitString;
}

/* eslint-enable */
