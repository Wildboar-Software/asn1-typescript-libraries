/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StatisticsParameter, _decode_StatisticsParameter, _encode_StatisticsParameter } from "../MEDIA-GATEWAY-CONTROL/StatisticsParameter.ta.mjs";
// export { StatisticsParameter, _decode_StatisticsParameter, _encode_StatisticsParameter } from "../MEDIA-GATEWAY-CONTROL/StatisticsParameter.ta.mjs";


/**
 * @summary StatisticsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatisticsDescriptor  ::=  SEQUENCE OF StatisticsParameter
 * ```
 */
export
type StatisticsDescriptor = StatisticsParameter[]; // SequenceOfType

let _cached_decoder_for_StatisticsDescriptor: $.ASN1Decoder<StatisticsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatisticsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatisticsDescriptor (el: _Element): StatisticsDescriptor {
    if (!_cached_decoder_for_StatisticsDescriptor) { _cached_decoder_for_StatisticsDescriptor = $._decodeSequenceOf<StatisticsParameter>(() => _decode_StatisticsParameter); }
    return _cached_decoder_for_StatisticsDescriptor(el);
}

let _cached_encoder_for_StatisticsDescriptor: $.ASN1Encoder<StatisticsDescriptor> | null = null;

/**
 * @summary Encodes a(n) StatisticsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatisticsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_StatisticsDescriptor (value: StatisticsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatisticsDescriptor) { _cached_encoder_for_StatisticsDescriptor = $._encodeSequenceOf<StatisticsParameter>(() => _encode_StatisticsParameter, $.BER); }
    return _cached_encoder_for_StatisticsDescriptor(value, elGetter);
}


/* eslint-enable */
