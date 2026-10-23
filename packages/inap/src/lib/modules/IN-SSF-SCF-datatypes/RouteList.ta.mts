/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Route, _decode_Route, _encode_Route } from "../IN-SSF-SCF-datatypes/Route.ta.mjs";
// export { Route, _decode_Route, _encode_Route } from "../IN-SSF-SCF-datatypes/Route.ta.mjs";


/**
 * @summary RouteList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteList  ::=  SEQUENCE OF Route
 * ```
 */
export
type RouteList = Route[]; // SequenceOfType

let _cached_decoder_for_RouteList: $.ASN1Decoder<RouteList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteList (el: _Element): RouteList {
    if (!_cached_decoder_for_RouteList) { _cached_decoder_for_RouteList = $._decodeSequenceOf<Route>(() => _decode_Route); }
    return _cached_decoder_for_RouteList(el);
}

let _cached_encoder_for_RouteList: $.ASN1Encoder<RouteList> | null = null;

/**
 * @summary Encodes a(n) RouteList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteList, encoded as an ASN.1 Element.
 */
export
function _encode_RouteList (value: RouteList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteList) { _cached_encoder_for_RouteList = $._encodeSequenceOf<Route>(() => _encode_Route, $.BER); }
    return _cached_encoder_for_RouteList(value, elGetter);
}


/* eslint-enable */
