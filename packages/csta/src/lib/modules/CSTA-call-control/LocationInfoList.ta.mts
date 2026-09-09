/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../CSTA-call-control/LocationInfo.ta.mjs";



/**
 * @summary LocationInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInfoList  ::=  SEQUENCE OF LocationInfo
 * ```
 */
export
type LocationInfoList = LocationInfo[]; // SequenceOfType

let _cached_decoder_for_LocationInfoList: $.ASN1Decoder<LocationInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInfoList (el: _Element): LocationInfoList {
    if (!_cached_decoder_for_LocationInfoList) { _cached_decoder_for_LocationInfoList = $._decodeSequenceOf<LocationInfo>(() => _decode_LocationInfo); }
    return _cached_decoder_for_LocationInfoList(el);
}

let _cached_encoder_for_LocationInfoList: $.ASN1Encoder<LocationInfoList> | null = null;

/**
 * @summary Encodes a(n) LocationInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInfoList (value: LocationInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInfoList) { _cached_encoder_for_LocationInfoList = $._encodeSequenceOf<LocationInfo>(() => _encode_LocationInfo, $.BER); }
    return _cached_encoder_for_LocationInfoList(value, elGetter);
}


/* eslint-enable */
