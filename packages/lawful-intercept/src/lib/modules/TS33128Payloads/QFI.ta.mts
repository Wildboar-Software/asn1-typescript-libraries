/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QFI  ::=  INTEGER (0..63)
 * ```
 */
export
type QFI = INTEGER;

let _cached_decoder_for_QFI: $.ASN1Decoder<QFI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QFI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QFI (el: _Element): QFI {
    if (!_cached_decoder_for_QFI) { _cached_decoder_for_QFI = $._decodeInteger; }
    return _cached_decoder_for_QFI(el);
}

let _cached_encoder_for_QFI: $.ASN1Encoder<QFI> | null = null;

/**
 * @summary Encodes a(n) QFI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QFI, encoded as an ASN.1 Element.
 */
export
function _encode_QFI (value: QFI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QFI) { _cached_encoder_for_QFI = $._encodeInteger; }
    return _cached_encoder_for_QFI(value, elGetter);
}


/* eslint-enable */
