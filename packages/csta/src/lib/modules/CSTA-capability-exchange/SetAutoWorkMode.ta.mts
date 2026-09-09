/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetAutoWorkMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAutoWorkMode  ::=  BIT STRING
 * {     autoWorkInterval             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3),     -- misc characteristics
 *     groupDeviceAllowedInReq         ( 4),     -- misc characteristics
 *     aCDDeviceAllowedInReq             ( 5) }
 * ```
 */
export
type SetAutoWorkMode = BIT_STRING;

/**
 * @summary SetAutoWorkMode_autoWorkInterval
 * @constant
 */
export
const SetAutoWorkMode_autoWorkInterval: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary autoWorkInterval
 * @constant
 */
export
const autoWorkInterval: number = SetAutoWorkMode_autoWorkInterval; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_privateData
 * @constant
 */
export
const SetAutoWorkMode_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetAutoWorkMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_privateDataInAck
 * @constant
 */
export
const SetAutoWorkMode_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetAutoWorkMode_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_ackModelMultiStep
 * @constant
 */
export
const SetAutoWorkMode_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetAutoWorkMode_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_groupDeviceAllowedInReq
 * @constant
 */
export
const SetAutoWorkMode_groupDeviceAllowedInReq: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary groupDeviceAllowedInReq
 * @constant
 */
export
const groupDeviceAllowedInReq: number = SetAutoWorkMode_groupDeviceAllowedInReq; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_aCDDeviceAllowedInReq
 * @constant
 */
export
const SetAutoWorkMode_aCDDeviceAllowedInReq: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary aCDDeviceAllowedInReq
 * @constant
 */
export
const aCDDeviceAllowedInReq: number = SetAutoWorkMode_aCDDeviceAllowedInReq; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetAutoWorkMode: $.ASN1Decoder<SetAutoWorkMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAutoWorkMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAutoWorkMode (el: _Element): SetAutoWorkMode {
    if (!_cached_decoder_for_SetAutoWorkMode) { _cached_decoder_for_SetAutoWorkMode = $._decodeBitString; }
    return _cached_decoder_for_SetAutoWorkMode(el);
}

let _cached_encoder_for_SetAutoWorkMode: $.ASN1Encoder<SetAutoWorkMode> | null = null;

/**
 * @summary Encodes a(n) SetAutoWorkMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAutoWorkMode, encoded as an ASN.1 Element.
 */
export
function _encode_SetAutoWorkMode (value: SetAutoWorkMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAutoWorkMode) { _cached_encoder_for_SetAutoWorkMode = $._encodeBitString; }
    return _cached_encoder_for_SetAutoWorkMode(value, elGetter);
}


/* eslint-enable */
