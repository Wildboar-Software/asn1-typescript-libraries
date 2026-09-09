/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ChangeMonitorFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeMonitorFilter  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type ChangeMonitorFilter = BIT_STRING;

/**
 * @summary ChangeMonitorFilter_privateData
 * @constant
 */
export
const ChangeMonitorFilter_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ChangeMonitorFilter_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeMonitorFilter_privateDataInAck
 * @constant
 */
export
const ChangeMonitorFilter_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ChangeMonitorFilter_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ChangeMonitorFilter: $.ASN1Decoder<ChangeMonitorFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeMonitorFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeMonitorFilter (el: _Element): ChangeMonitorFilter {
    if (!_cached_decoder_for_ChangeMonitorFilter) { _cached_decoder_for_ChangeMonitorFilter = $._decodeBitString; }
    return _cached_decoder_for_ChangeMonitorFilter(el);
}

let _cached_encoder_for_ChangeMonitorFilter: $.ASN1Encoder<ChangeMonitorFilter> | null = null;

/**
 * @summary Encodes a(n) ChangeMonitorFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeMonitorFilter, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeMonitorFilter (value: ChangeMonitorFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeMonitorFilter) { _cached_encoder_for_ChangeMonitorFilter = $._encodeBitString; }
    return _cached_encoder_for_ChangeMonitorFilter(value, elGetter);
}


/* eslint-enable */
