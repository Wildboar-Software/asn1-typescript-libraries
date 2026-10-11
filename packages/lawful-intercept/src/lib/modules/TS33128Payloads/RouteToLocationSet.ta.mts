/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
// export { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";


/**
 * @summary RouteToLocationSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteToLocationSet  ::=  SET OF RouteToLocation
 * ```
 */
export
type RouteToLocationSet = RouteToLocation[]; // SetOfType

let _cached_decoder_for_RouteToLocationSet: $.ASN1Decoder<RouteToLocationSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteToLocationSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteToLocationSet (el: _Element): RouteToLocationSet {
    if (!_cached_decoder_for_RouteToLocationSet) { _cached_decoder_for_RouteToLocationSet = $._decodeSetOf<RouteToLocation>(() => _decode_RouteToLocation); }
    return _cached_decoder_for_RouteToLocationSet(el);
}

let _cached_encoder_for_RouteToLocationSet: $.ASN1Encoder<RouteToLocationSet> | null = null;

/**
 * @summary Encodes a(n) RouteToLocationSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteToLocationSet, encoded as an ASN.1 Element.
 */
export
function _encode_RouteToLocationSet (value: RouteToLocationSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteToLocationSet) { _cached_encoder_for_RouteToLocationSet = $._encodeSetOf<RouteToLocation>(() => _encode_RouteToLocation, $.BER); }
    return _cached_encoder_for_RouteToLocationSet(value, elGetter);
}


/* eslint-enable */
