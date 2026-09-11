/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetAutoWorkMode
 * @description
 * Capability bitmap for the Set Auto Work Mode service (ECMA-269 C.14.17,
 * ECMA-285 §9.10). Presence of this entry in `LogicalServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.17).
 */
export
const SetAutoWorkMode_autoWorkInterval: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary autoWorkInterval
 * @constant
 * @description
 * Alias of `SetAutoWorkMode_autoWorkInterval`.
 */
export
const autoWorkInterval: number = SetAutoWorkMode_autoWorkInterval; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.17).
 */
export
const SetAutoWorkMode_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetAutoWorkMode_privateData`.
 */
export
const privateData: number = SetAutoWorkMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.17).
 */
export
const SetAutoWorkMode_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetAutoWorkMode_privateDataInAck`.
 */
export
const privateDataInAck: number = SetAutoWorkMode_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.17).
 */
export
const SetAutoWorkMode_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetAutoWorkMode_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetAutoWorkMode_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_groupDeviceAllowedInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `groupDeviceAllowed` in the service
 * request (ECMA-269 C.14.17).
 */
export
const SetAutoWorkMode_groupDeviceAllowedInReq: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary groupDeviceAllowedInReq
 * @constant
 * @description
 * Alias of `SetAutoWorkMode_groupDeviceAllowedInReq`.
 */
export
const groupDeviceAllowedInReq: number = SetAutoWorkMode_groupDeviceAllowedInReq; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoWorkMode_aCDDeviceAllowedInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `aCDDeviceAllowed` in the service
 * request (ECMA-269 C.14.17).
 */
export
const SetAutoWorkMode_aCDDeviceAllowedInReq: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary aCDDeviceAllowedInReq
 * @constant
 * @description
 * Alias of `SetAutoWorkMode_aCDDeviceAllowedInReq`.
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
