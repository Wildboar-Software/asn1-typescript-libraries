/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MonitorInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorInfo  ::=  BIT STRING
 * {     segmentID                 ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type MonitorInfo = BIT_STRING;

/**
 * @summary MonitorInfo_segmentID
 * @constant
 */
export
const MonitorInfo_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 */
export
const segmentID: number = MonitorInfo_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorInfo_privateData
 * @constant
 */
export
const MonitorInfo_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = MonitorInfo_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MonitorInfo: $.ASN1Decoder<MonitorInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorInfo (el: _Element): MonitorInfo {
    if (!_cached_decoder_for_MonitorInfo) { _cached_decoder_for_MonitorInfo = $._decodeBitString; }
    return _cached_decoder_for_MonitorInfo(el);
}

let _cached_encoder_for_MonitorInfo: $.ASN1Encoder<MonitorInfo> | null = null;

/**
 * @summary Encodes a(n) MonitorInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorInfo (value: MonitorInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorInfo) { _cached_encoder_for_MonitorInfo = $._encodeBitString; }
    return _cached_encoder_for_MonitorInfo(value, elGetter);
}


/* eslint-enable */
