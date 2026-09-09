/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallerIDStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallerIDStatus  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type CallerIDStatus = BIT_STRING;

/**
 * @summary CallerIDStatus_privateData
 * @constant
 */
export
const CallerIDStatus_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallerIDStatus_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallerIDStatus: $.ASN1Decoder<CallerIDStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallerIDStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallerIDStatus (el: _Element): CallerIDStatus {
    if (!_cached_decoder_for_CallerIDStatus) { _cached_decoder_for_CallerIDStatus = $._decodeBitString; }
    return _cached_decoder_for_CallerIDStatus(el);
}

let _cached_encoder_for_CallerIDStatus: $.ASN1Encoder<CallerIDStatus> | null = null;

/**
 * @summary Encodes a(n) CallerIDStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallerIDStatus, encoded as an ASN.1 Element.
 */
export
function _encode_CallerIDStatus (value: CallerIDStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallerIDStatus) { _cached_encoder_for_CallerIDStatus = $._encodeBitString; }
    return _cached_encoder_for_CallerIDStatus(value, elGetter);
}


/* eslint-enable */
