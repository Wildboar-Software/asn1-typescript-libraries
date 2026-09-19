/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SegmentNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SegmentNumber  ::=  INTEGER(0..65535)
 * ```
 */
export
type SegmentNumber = INTEGER;

let _cached_decoder_for_SegmentNumber: $.ASN1Decoder<SegmentNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SegmentNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SegmentNumber (el: _Element): SegmentNumber {
    if (!_cached_decoder_for_SegmentNumber) { _cached_decoder_for_SegmentNumber = $._decodeInteger; }
    return _cached_decoder_for_SegmentNumber(el);
}

let _cached_encoder_for_SegmentNumber: $.ASN1Encoder<SegmentNumber> | null = null;

/**
 * @summary Encodes a(n) SegmentNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SegmentNumber, encoded as an ASN.1 Element.
 */
export
function _encode_SegmentNumber (value: SegmentNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SegmentNumber) { _cached_encoder_for_SegmentNumber = $._encodeInteger; }
    return _cached_encoder_for_SegmentNumber(value, elGetter);
}


/* eslint-enable */
