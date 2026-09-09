/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary JoinCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JoinCall  ::=  BIT STRING
 * {     autoOriginatePrompt             ( 0),     -- optional parameters
 *     autoOriginateDoNotPrompt         ( 1),     -- optional parameters
 *     participationTypeSilent         ( 2),     -- optional parameters
 *     participationTypeActive         ( 3),     -- optional parameters
 *     accountCode                 ( 4),     -- optional parameters
 *     authCode                 ( 5),     -- optional parameters
 *     correlatorData                 ( 6),     -- optional parameters
 *     userData                 ( 7),     -- optional parameters
 *     conferencedCallInAck             ( 8),     -- optional parameters
 *     conferencedCallInfoInAck         ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     deviceIDOnly                 (11),     -- misc characteristics
 *     supportsPrompting             (12),     -- misc characteristics
 *     promptingMode                 (13),     -- misc characteristics
 *     ackModelMultiStep             (14) }
 * ```
 */
export
type JoinCall = BIT_STRING;

/**
 * @summary JoinCall_autoOriginatePrompt
 * @constant
 */
export
const JoinCall_autoOriginatePrompt: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginatePrompt
 * @constant
 */
export
const autoOriginatePrompt: number = JoinCall_autoOriginatePrompt; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_autoOriginateDoNotPrompt
 * @constant
 */
export
const JoinCall_autoOriginateDoNotPrompt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginateDoNotPrompt
 * @constant
 */
export
const autoOriginateDoNotPrompt: number = JoinCall_autoOriginateDoNotPrompt; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_participationTypeSilent
 * @constant
 */
export
const JoinCall_participationTypeSilent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeSilent
 * @constant
 */
export
const participationTypeSilent: number = JoinCall_participationTypeSilent; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_participationTypeActive
 * @constant
 */
export
const JoinCall_participationTypeActive: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeActive
 * @constant
 */
export
const participationTypeActive: number = JoinCall_participationTypeActive; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_accountCode
 * @constant
 */
export
const JoinCall_accountCode: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = JoinCall_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_authCode
 * @constant
 */
export
const JoinCall_authCode: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = JoinCall_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_correlatorData
 * @constant
 */
export
const JoinCall_correlatorData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = JoinCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_userData
 * @constant
 */
export
const JoinCall_userData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = JoinCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_conferencedCallInAck
 * @constant
 */
export
const JoinCall_conferencedCallInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary conferencedCallInAck
 * @constant
 */
export
const conferencedCallInAck: number = JoinCall_conferencedCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_conferencedCallInfoInAck
 * @constant
 */
export
const JoinCall_conferencedCallInfoInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary conferencedCallInfoInAck
 * @constant
 */
export
const conferencedCallInfoInAck: number = JoinCall_conferencedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_privateDataInAck
 * @constant
 */
export
const JoinCall_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = JoinCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_deviceIDOnly
 * @constant
 */
export
const JoinCall_deviceIDOnly: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = JoinCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_supportsPrompting
 * @constant
 */
export
const JoinCall_supportsPrompting: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 */
export
const supportsPrompting: number = JoinCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_promptingMode
 * @constant
 */
export
const JoinCall_promptingMode: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 */
export
const promptingMode: number = JoinCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary JoinCall_ackModelMultiStep
 * @constant
 */
export
const JoinCall_ackModelMultiStep: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = JoinCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_JoinCall: $.ASN1Decoder<JoinCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JoinCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JoinCall (el: _Element): JoinCall {
    if (!_cached_decoder_for_JoinCall) { _cached_decoder_for_JoinCall = $._decodeBitString; }
    return _cached_decoder_for_JoinCall(el);
}

let _cached_encoder_for_JoinCall: $.ASN1Encoder<JoinCall> | null = null;

/**
 * @summary Encodes a(n) JoinCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinCall, encoded as an ASN.1 Element.
 */
export
function _encode_JoinCall (value: JoinCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JoinCall) { _cached_encoder_for_JoinCall = $._encodeBitString; }
    return _cached_encoder_for_JoinCall(value, elGetter);
}


/* eslint-enable */
