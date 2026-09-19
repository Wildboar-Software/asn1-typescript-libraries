/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QCI  ::=  INTEGER (0..255)
 * ```
 */
export
type QCI = INTEGER;

let _cached_decoder_for_QCI: $.ASN1Decoder<QCI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QCI (el: _Element): QCI {
    if (!_cached_decoder_for_QCI) { _cached_decoder_for_QCI = $._decodeInteger; }
    return _cached_decoder_for_QCI(el);
}

let _cached_encoder_for_QCI: $.ASN1Encoder<QCI> | null = null;

/**
 * @summary Encodes a(n) QCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QCI, encoded as an ASN.1 Element.
 */
export
function _encode_QCI (value: QCI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QCI) { _cached_encoder_for_QCI = $._encodeInteger; }
    return _cached_encoder_for_QCI(value, elGetter);
}


/* eslint-enable */
