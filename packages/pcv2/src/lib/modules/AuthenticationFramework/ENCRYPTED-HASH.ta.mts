/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ENCRYPTED_HASH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENCRYPTED-HASH{ToBeSigned}  ::=  BIT STRING (CONSTRAINED BY {
 *   -- shall be the result of applying a hashing procedure to the DER-encoded (see 6.2)
 *   -- octets of a value of -- ToBeSigned -- and then applying an encipherment procedure
 *   -- to those octets -- } )
 * ```
 */
export
type ENCRYPTED_HASH<ToBeSigned> = BIT_STRING;

let _cached_decoder_for_ENCRYPTED_HASH: $.ASN1Decoder<ENCRYPTED_HASH<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED_HASH
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(_decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>): $.ASN1Decoder<ENCRYPTED_HASH<ToBeSigned>> {
    return $._decodeBitString;
}

let _cached_encoder_for_ENCRYPTED_HASH: $.ASN1Encoder<ENCRYPTED_HASH<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will encode a(n) ENCRYPTED_HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED_HASH as an ASN.1 element.
 */
export
function _get_encoder_for_ENCRYPTED_HASH<ToBeSigned>(_encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>): $.ASN1Encoder<ENCRYPTED_HASH<ToBeSigned>> {
    return $._encodeBitString;
}

/* eslint-enable */
