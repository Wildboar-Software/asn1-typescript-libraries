/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NIDDCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDDCCPDU  ::=  OCTET STRING
 * ```
 */
export
type NIDDCCPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_NIDDCCPDU: $.ASN1Decoder<NIDDCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NIDDCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NIDDCCPDU (el: _Element): NIDDCCPDU {
    if (!_cached_decoder_for_NIDDCCPDU) { _cached_decoder_for_NIDDCCPDU = $._decodeOctetString; }
    return _cached_decoder_for_NIDDCCPDU(el);
}

let _cached_encoder_for_NIDDCCPDU: $.ASN1Encoder<NIDDCCPDU> | null = null;

/**
 * @summary Encodes a(n) NIDDCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NIDDCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_NIDDCCPDU (value: NIDDCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NIDDCCPDU) { _cached_encoder_for_NIDDCCPDU = $._encodeOctetString; }
    return _cached_encoder_for_NIDDCCPDU(value, elGetter);
}


/* eslint-enable */
