/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { GeneralizedTime, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TimeInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeInfo  ::=  GeneralizedTime
 * ```
 */
export
type TimeInfo = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_TimeInfo: $.ASN1Decoder<TimeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeInfo (el: _Element): TimeInfo {
    if (!_cached_decoder_for_TimeInfo) { _cached_decoder_for_TimeInfo = $._decodeGeneralizedTime; }
    return _cached_decoder_for_TimeInfo(el);
}

let _cached_encoder_for_TimeInfo: $.ASN1Encoder<TimeInfo> | null = null;

/**
 * @summary Encodes a(n) TimeInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TimeInfo (value: TimeInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeInfo) { _cached_encoder_for_TimeInfo = $._encodeGeneralizedTime; }
    return _cached_encoder_for_TimeInfo(value, elGetter);
}


/* eslint-enable */
