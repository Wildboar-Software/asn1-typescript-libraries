/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetHookSwitchStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetHookSwitchStatus  ::=  BIT STRING
 * {     hookSwitch                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetHookSwitchStatus = BIT_STRING;

/**
 * @summary GetHookSwitchStatus_hookSwitch
 * @constant
 */
export
const GetHookSwitchStatus_hookSwitch: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hookSwitch
 * @constant
 */
export
const hookSwitch: number = GetHookSwitchStatus_hookSwitch; /* SHORT_NAMED_BIT */

/**
 * @summary GetHookSwitchStatus_privateData
 * @constant
 */
export
const GetHookSwitchStatus_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetHookSwitchStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetHookSwitchStatus_privateDataInAck
 * @constant
 */
export
const GetHookSwitchStatus_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetHookSwitchStatus_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetHookSwitchStatus: $.ASN1Decoder<GetHookSwitchStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetHookSwitchStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetHookSwitchStatus (el: _Element): GetHookSwitchStatus {
    if (!_cached_decoder_for_GetHookSwitchStatus) { _cached_decoder_for_GetHookSwitchStatus = $._decodeBitString; }
    return _cached_decoder_for_GetHookSwitchStatus(el);
}

let _cached_encoder_for_GetHookSwitchStatus: $.ASN1Encoder<GetHookSwitchStatus> | null = null;

/**
 * @summary Encodes a(n) GetHookSwitchStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHookSwitchStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GetHookSwitchStatus (value: GetHookSwitchStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetHookSwitchStatus) { _cached_encoder_for_GetHookSwitchStatus = $._encodeBitString; }
    return _cached_encoder_for_GetHookSwitchStatus(value, elGetter);
}


/* eslint-enable */
