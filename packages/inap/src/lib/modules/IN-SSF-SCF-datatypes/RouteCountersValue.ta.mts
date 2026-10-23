/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RouteCountersAndValue, _decode_RouteCountersAndValue, _encode_RouteCountersAndValue } from "../IN-SSF-SCF-datatypes/RouteCountersAndValue.ta.mjs";
// export { RouteCountersAndValue, _decode_RouteCountersAndValue, _encode_RouteCountersAndValue } from "../IN-SSF-SCF-datatypes/RouteCountersAndValue.ta.mjs";


/**
 * @summary RouteCountersValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteCountersValue  ::= 
 *   SEQUENCE OF RouteCountersAndValue
 * ```
 */
export
type RouteCountersValue = RouteCountersAndValue[]; // SequenceOfType

let _cached_decoder_for_RouteCountersValue: $.ASN1Decoder<RouteCountersValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteCountersValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteCountersValue (el: _Element): RouteCountersValue {
    if (!_cached_decoder_for_RouteCountersValue) { _cached_decoder_for_RouteCountersValue = $._decodeSequenceOf<RouteCountersAndValue>(() => _decode_RouteCountersAndValue); }
    return _cached_decoder_for_RouteCountersValue(el);
}

let _cached_encoder_for_RouteCountersValue: $.ASN1Encoder<RouteCountersValue> | null = null;

/**
 * @summary Encodes a(n) RouteCountersValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteCountersValue, encoded as an ASN.1 Element.
 */
export
function _encode_RouteCountersValue (value: RouteCountersValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteCountersValue) { _cached_encoder_for_RouteCountersValue = $._encodeSequenceOf<RouteCountersAndValue>(() => _encode_RouteCountersAndValue, $.BER); }
    return _cached_encoder_for_RouteCountersValue(value, elGetter);
}


/* eslint-enable */
