/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { DestinationDetection_Item, _decode_DestinationDetection_Item, _encode_DestinationDetection_Item } from "../CSTA-make-predictive-call/DestinationDetection-Item.ta.mjs";



/**
 * @summary DestinationDetection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationDetection  ::=  SEQUENCE OF SEQUENCE
 * {     destinationCondition         DestinationCondition,
 *     detectionAction         DetectionAction }
 * ```
 */
export
type DestinationDetection = DestinationDetection_Item[]; // SequenceOfType

let _cached_decoder_for_DestinationDetection: $.ASN1Decoder<DestinationDetection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationDetection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationDetection (el: _Element): DestinationDetection {
    if (!_cached_decoder_for_DestinationDetection) { _cached_decoder_for_DestinationDetection = $._decodeSequenceOf<DestinationDetection_Item>(() => _decode_DestinationDetection_Item); }
    return _cached_decoder_for_DestinationDetection(el);
}

let _cached_encoder_for_DestinationDetection: $.ASN1Encoder<DestinationDetection> | null = null;

/**
 * @summary Encodes a(n) DestinationDetection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationDetection, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationDetection (value: DestinationDetection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationDetection) { _cached_encoder_for_DestinationDetection = $._encodeSequenceOf<DestinationDetection_Item>(() => _encode_DestinationDetection_Item, $.BER); }
    return _cached_encoder_for_DestinationDetection(value, elGetter);
}


/* eslint-enable */
