/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemStatus
 * @description
 * Capability bitmap for the System Status service (ECMA-269 C.2.6, ECMA-285
 * §9.10). Presence of this entry in `SystemStatusServList` means the SF
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
 * SystemStatus  ::=  BIT STRING
 * {     systemStatusInitializing         ( 0),     -- optional parameters
 *     systemStatusEnabled             ( 1),     -- optional parameters
 *     systemStatusNormal             ( 2),     -- optional parameters
 *     systemStatusMessageLost         ( 3),     -- optional parameters
 *     systemStatusDisabled             ( 4),     -- optional parameters
 *     systemStatusPartiallyDisabled         ( 5),     -- optional parameters
 *     systemStatusOverloadImminent         ( 6),     -- optional parameters
 *     systemStatusOverloadReached         ( 7),     -- optional parameters
 *     systemStatusOverloadRelieved         ( 8),     -- optional parameters
 *     privateData                 ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     switchingFunctionSupportsSending     (11),     -- misc characteristics
 *     switchingFunctionSupportsReceiving     (12) }
 * ```
 */
export
type SystemStatus = BIT_STRING;

/**
 * @summary SystemStatus_systemStatusInitializing
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `initializing` (ECMA-269
 * C.2.6).
 */
export
const SystemStatus_systemStatusInitializing: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusInitializing
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusInitializing`.
 */
export
const systemStatusInitializing: number = SystemStatus_systemStatusInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusEnabled
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `enabled` (ECMA-269
 * C.2.6).
 */
export
const SystemStatus_systemStatusEnabled: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusEnabled
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusEnabled`.
 */
export
const systemStatusEnabled: number = SystemStatus_systemStatusEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusNormal
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `normal` (ECMA-269 C.2.6).
 */
export
const SystemStatus_systemStatusNormal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusNormal
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusNormal`.
 */
export
const systemStatusNormal: number = SystemStatus_systemStatusNormal; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusMessageLost
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `messagesLost` (ECMA-269
 * C.2.6).
 */
export
const SystemStatus_systemStatusMessageLost: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusMessageLost
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusMessageLost`.
 */
export
const systemStatusMessageLost: number = SystemStatus_systemStatusMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusDisabled
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `disabled` (ECMA-269
 * C.2.6).
 */
export
const SystemStatus_systemStatusDisabled: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusDisabled
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusDisabled`.
 */
export
const systemStatusDisabled: number = SystemStatus_systemStatusDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusPartiallyDisabled
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `partiallyDisabled`
 * (ECMA-269 C.2.6).
 */
export
const SystemStatus_systemStatusPartiallyDisabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusPartiallyDisabled
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusPartiallyDisabled`.
 */
export
const systemStatusPartiallyDisabled: number = SystemStatus_systemStatusPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusOverloadImminent
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `overloadImminent`
 * (ECMA-269 C.2.6).
 */
export
const SystemStatus_systemStatusOverloadImminent: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadImminent
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusOverloadImminent`.
 */
export
const systemStatusOverloadImminent: number = SystemStatus_systemStatusOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusOverloadReached
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `overloadReached`
 * (ECMA-269 C.2.6).
 */
export
const SystemStatus_systemStatusOverloadReached: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadReached
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusOverloadReached`.
 */
export
const systemStatusOverloadReached: number = SystemStatus_systemStatusOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_systemStatusOverloadRelieved
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `overloadRelieved`
 * (ECMA-269 C.2.6).
 */
export
const SystemStatus_systemStatusOverloadRelieved: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadRelieved
 * @constant
 * @description
 * Alias of `SystemStatus_systemStatusOverloadRelieved`.
 */
export
const systemStatusOverloadRelieved: number = SystemStatus_systemStatusOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.2.6).
 */
export
const SystemStatus_privateData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SystemStatus_privateData`.
 */
export
const privateData: number = SystemStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.2.6).
 */
export
const SystemStatus_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SystemStatus_privateDataInAck`.
 */
export
const privateDataInAck: number = SystemStatus_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_switchingFunctionSupportsSending
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.2.6).
 */
export
const SystemStatus_switchingFunctionSupportsSending: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsSending
 * @constant
 * @description
 * Alias of `SystemStatus_switchingFunctionSupportsSending`.
 */
export
const switchingFunctionSupportsSending: number = SystemStatus_switchingFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary SystemStatus_switchingFunctionSupportsReceiving
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.2.6).
 */
export
const SystemStatus_switchingFunctionSupportsReceiving: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsReceiving
 * @constant
 * @description
 * Alias of `SystemStatus_switchingFunctionSupportsReceiving`.
 */
export
const switchingFunctionSupportsReceiving: number = SystemStatus_switchingFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SystemStatus: $.ASN1Decoder<SystemStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatus (el: _Element): SystemStatus {
    if (!_cached_decoder_for_SystemStatus) { _cached_decoder_for_SystemStatus = $._decodeBitString; }
    return _cached_decoder_for_SystemStatus(el);
}

let _cached_encoder_for_SystemStatus: $.ASN1Encoder<SystemStatus> | null = null;

/**
 * @summary Encodes a(n) SystemStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatus (value: SystemStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatus) { _cached_encoder_for_SystemStatus = $._encodeBitString; }
    return _cached_encoder_for_SystemStatus(value, elGetter);
}


/* eslint-enable */
