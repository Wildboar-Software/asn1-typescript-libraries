/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";




/**
 * @summary RSAENCRYPTED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RSAENCRYPTED{ToBeEnciphered}  ::= 
 *   BIT STRING
 *     (CONSTRAINED BY {
 *        -- shall be the result of applying the encipherment procedure
 *        -- to the BER-encoded octets of a value of --ToBeEnciphered})
 * ```
 */
export
type RSAENCRYPTED = BIT_STRING;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) RSAENCRYPTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_RSAENCRYPTED<ToBeEnciphered>(_decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>) {
    return $._decodeBitString;
}


/**
 * @summary Returns a function that will encode a(n) RSAENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) RSAENCRYPTED as an ASN.1 element.
 */
export
function _get_encoder_for_RSAENCRYPTED<ToBeEnciphered>(_encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>) {
    return $._encodeBitString;
}

/* eslint-enable */
