/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RequestSystemStatus
 * @description
 * Capability bitmap for the Request System Status service (ECMA-269 C.2.5,
 * ECMA-285 §9.10). Presence of this entry in `SystemStatusServList` means the
 * SF supports that service. Each set bit is an optional parameter, enumerated
 * value, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestSystemStatus  ::=  BIT STRING
 * {     privateDataInReq             ( 0),     -- optional parameters
 *     systemStatusInitializing         ( 1),     -- optional parameters
 *     systemStatusEnabled             ( 2),     -- optional parameters
 *     systemStatusNormal             ( 3),     -- optional parameters
 *     systemStatusMessageLost         ( 4),     -- optional parameters
 *     systemStatusDisabled             ( 5),     -- optional parameters
 *     systemStatusPartiallyDisabled         ( 6),     -- optional parameters
 *     systemStatusOverloadImminent         ( 7),     -- optional parameters
 *     systemStatusOverloadReached         ( 8),     -- optional parameters
 *     systemStatusOverloadRelieved         ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     switchingFunctionSupportsSending     (11),     -- misc characteristics
 *     switchingFunctionSupportsReceiving    (12) }
 * ```
 */
export
type RequestSystemStatus = BIT_STRING;

/**
 * @summary RequestSystemStatus_privateDataInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the service request
 * (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 * @description
 * Alias of `RequestSystemStatus_privateDataInReq`.
 */
export
const privateDataInReq: number = RequestSystemStatus_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusInitializing
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `initializing` (ECMA-269
 * Annex C).
 */
export
const RequestSystemStatus_systemStatusInitializing: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusInitializing
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusInitializing`.
 */
export
const systemStatusInitializing: number = RequestSystemStatus_systemStatusInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusEnabled
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `enabled` (ECMA-269 Annex
 * C).
 */
export
const RequestSystemStatus_systemStatusEnabled: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusEnabled
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusEnabled`.
 */
export
const systemStatusEnabled: number = RequestSystemStatus_systemStatusEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusNormal
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `normal` (ECMA-269 Annex
 * C).
 */
export
const RequestSystemStatus_systemStatusNormal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusNormal
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusNormal`.
 */
export
const systemStatusNormal: number = RequestSystemStatus_systemStatusNormal; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusMessageLost
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `messagesLost` (ECMA-269
 * Annex C).
 */
export
const RequestSystemStatus_systemStatusMessageLost: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusMessageLost
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusMessageLost`.
 */
export
const systemStatusMessageLost: number = RequestSystemStatus_systemStatusMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusDisabled
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `disabled` (ECMA-269 Annex
 * C).
 */
export
const RequestSystemStatus_systemStatusDisabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusDisabled
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusDisabled`.
 */
export
const systemStatusDisabled: number = RequestSystemStatus_systemStatusDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusPartiallyDisabled
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `partiallyDisabled`
 * (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_systemStatusPartiallyDisabled: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusPartiallyDisabled
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusPartiallyDisabled`.
 */
export
const systemStatusPartiallyDisabled: number = RequestSystemStatus_systemStatusPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusOverloadImminent
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `overloadImminent`
 * (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_systemStatusOverloadImminent: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadImminent
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusOverloadImminent`.
 */
export
const systemStatusOverloadImminent: number = RequestSystemStatus_systemStatusOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusOverloadReached
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `overloadReached`
 * (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_systemStatusOverloadReached: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadReached
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusOverloadReached`.
 */
export
const systemStatusOverloadReached: number = RequestSystemStatus_systemStatusOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_systemStatusOverloadRelieved
 * @constant
 * @description
 * Bit set means the SF supports `systemStatus` value `overloadRelieved`
 * (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_systemStatusOverloadRelieved: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary systemStatusOverloadRelieved
 * @constant
 * @description
 * Alias of `RequestSystemStatus_systemStatusOverloadRelieved`.
 */
export
const systemStatusOverloadRelieved: number = RequestSystemStatus_systemStatusOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `RequestSystemStatus_privateDataInAck`.
 */
export
const privateDataInAck: number = RequestSystemStatus_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_switchingFunctionSupportsSending
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_switchingFunctionSupportsSending: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsSending
 * @constant
 * @description
 * Alias of `RequestSystemStatus_switchingFunctionSupportsSending`.
 */
export
const switchingFunctionSupportsSending: number = RequestSystemStatus_switchingFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary RequestSystemStatus_switchingFunctionSupportsReceiving
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const RequestSystemStatus_switchingFunctionSupportsReceiving: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsReceiving
 * @constant
 * @description
 * Alias of `RequestSystemStatus_switchingFunctionSupportsReceiving`.
 */
export
const switchingFunctionSupportsReceiving: number = RequestSystemStatus_switchingFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestSystemStatus: $.ASN1Decoder<RequestSystemStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestSystemStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestSystemStatus (el: _Element): RequestSystemStatus {
    if (!_cached_decoder_for_RequestSystemStatus) { _cached_decoder_for_RequestSystemStatus = $._decodeBitString; }
    return _cached_decoder_for_RequestSystemStatus(el);
}

let _cached_encoder_for_RequestSystemStatus: $.ASN1Encoder<RequestSystemStatus> | null = null;

/**
 * @summary Encodes a(n) RequestSystemStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestSystemStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RequestSystemStatus (value: RequestSystemStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestSystemStatus) { _cached_encoder_for_RequestSystemStatus = $._encodeBitString; }
    return _cached_encoder_for_RequestSystemStatus(value, elGetter);
}


/* eslint-enable */
