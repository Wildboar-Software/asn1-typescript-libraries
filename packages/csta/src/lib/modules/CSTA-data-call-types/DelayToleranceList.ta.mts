/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DelayToleranceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DelayToleranceList  ::=  SEQUENCE OF INTEGER
 * ```
 */
export
type DelayToleranceList = INTEGER[]; // SequenceOfType

let _cached_decoder_for_DelayToleranceList: $.ASN1Decoder<DelayToleranceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DelayToleranceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DelayToleranceList (el: _Element): DelayToleranceList {
    if (!_cached_decoder_for_DelayToleranceList) { _cached_decoder_for_DelayToleranceList = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_DelayToleranceList(el);
}

let _cached_encoder_for_DelayToleranceList: $.ASN1Encoder<DelayToleranceList> | null = null;

/**
 * @summary Encodes a(n) DelayToleranceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelayToleranceList, encoded as an ASN.1 Element.
 */
export
function _encode_DelayToleranceList (value: DelayToleranceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DelayToleranceList) { _cached_encoder_for_DelayToleranceList = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_DelayToleranceList(value, elGetter);
}


/* eslint-enable */
