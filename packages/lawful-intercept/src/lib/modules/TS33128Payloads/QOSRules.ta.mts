/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QOSRules
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSRules  ::=  OCTET STRING
 * ```
 */
export
type QOSRules = OCTET_STRING; // OctetStringType

let _cached_decoder_for_QOSRules: $.ASN1Decoder<QOSRules> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSRules
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSRules (el: _Element): QOSRules {
    if (!_cached_decoder_for_QOSRules) { _cached_decoder_for_QOSRules = $._decodeOctetString; }
    return _cached_decoder_for_QOSRules(el);
}

let _cached_encoder_for_QOSRules: $.ASN1Encoder<QOSRules> | null = null;

/**
 * @summary Encodes a(n) QOSRules into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSRules, encoded as an ASN.1 Element.
 */
export
function _encode_QOSRules (value: QOSRules, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSRules) { _cached_encoder_for_QOSRules = $._encodeOctetString; }
    return _cached_encoder_for_QOSRules(value, elGetter);
}


/* eslint-enable */
