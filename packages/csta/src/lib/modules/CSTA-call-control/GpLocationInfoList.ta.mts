/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { GpLocationInfo, _decode_GpLocationInfo, _encode_GpLocationInfo } from "../CSTA-call-control/GpLocationInfo.ta.mjs";



/**
 * @summary GpLocationInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GpLocationInfoList  ::=  SEQUENCE OF GpLocationInfo
 * ```
 */
export
type GpLocationInfoList = GpLocationInfo[]; // SequenceOfType

let _cached_decoder_for_GpLocationInfoList: $.ASN1Decoder<GpLocationInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GpLocationInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GpLocationInfoList (el: _Element): GpLocationInfoList {
    if (!_cached_decoder_for_GpLocationInfoList) { _cached_decoder_for_GpLocationInfoList = $._decodeSequenceOf<GpLocationInfo>(() => _decode_GpLocationInfo); }
    return _cached_decoder_for_GpLocationInfoList(el);
}

let _cached_encoder_for_GpLocationInfoList: $.ASN1Encoder<GpLocationInfoList> | null = null;

/**
 * @summary Encodes a(n) GpLocationInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GpLocationInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_GpLocationInfoList (value: GpLocationInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GpLocationInfoList) { _cached_encoder_for_GpLocationInfoList = $._encodeSequenceOf<GpLocationInfo>(() => _encode_GpLocationInfo, $.BER); }
    return _cached_encoder_for_GpLocationInfoList(value, elGetter);
}


/* eslint-enable */
