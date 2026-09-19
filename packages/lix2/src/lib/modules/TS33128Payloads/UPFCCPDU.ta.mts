/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UPFCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UPFCCPDU  ::=  OCTET STRING
 * ```
 */
export
type UPFCCPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UPFCCPDU: $.ASN1Decoder<UPFCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UPFCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UPFCCPDU (el: _Element): UPFCCPDU {
    if (!_cached_decoder_for_UPFCCPDU) { _cached_decoder_for_UPFCCPDU = $._decodeOctetString; }
    return _cached_decoder_for_UPFCCPDU(el);
}

let _cached_encoder_for_UPFCCPDU: $.ASN1Encoder<UPFCCPDU> | null = null;

/**
 * @summary Encodes a(n) UPFCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UPFCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_UPFCCPDU (value: UPFCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UPFCCPDU) { _cached_encoder_for_UPFCCPDU = $._encodeOctetString; }
    return _cached_encoder_for_UPFCCPDU(value, elGetter);
}


/* eslint-enable */
