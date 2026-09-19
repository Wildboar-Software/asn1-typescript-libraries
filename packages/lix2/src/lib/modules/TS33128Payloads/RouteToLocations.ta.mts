/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
// export { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";


/**
 * @summary RouteToLocations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteToLocations  ::=  SET OF RouteToLocation
 * ```
 */
export
type RouteToLocations = RouteToLocation[]; // SetOfType

let _cached_decoder_for_RouteToLocations: $.ASN1Decoder<RouteToLocations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteToLocations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteToLocations (el: _Element): RouteToLocations {
    if (!_cached_decoder_for_RouteToLocations) { _cached_decoder_for_RouteToLocations = $._decodeSetOf<RouteToLocation>(() => _decode_RouteToLocation); }
    return _cached_decoder_for_RouteToLocations(el);
}

let _cached_encoder_for_RouteToLocations: $.ASN1Encoder<RouteToLocations> | null = null;

/**
 * @summary Encodes a(n) RouteToLocations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteToLocations, encoded as an ASN.1 Element.
 */
export
function _encode_RouteToLocations (value: RouteToLocations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteToLocations) { _cached_encoder_for_RouteToLocations = $._encodeSetOf<RouteToLocation>(() => _encode_RouteToLocation, $.BER); }
    return _cached_encoder_for_RouteToLocations(value, elGetter);
}


/* eslint-enable */
