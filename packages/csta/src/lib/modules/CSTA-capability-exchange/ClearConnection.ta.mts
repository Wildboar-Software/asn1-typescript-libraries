/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ClearConnection
 * @description
 * Capability bitmap for the Clear Connection service (ECMA-269 C.5.8, ECMA-285
 * §9.10). Presence of this entry in `CallControlServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearConnection  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     fail                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     initiated                 ( 4),     -- initial states
 *     hold                     ( 5),     -- initial states
 *     correlatorData                 ( 6),     -- optional parameters
 *     userData                 ( 7),     -- optional parameters
 *     reason                    (12),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     ackModelMultiStep             (11) }
 * ```
 */
export
type ClearConnection = BIT_STRING;

/**
 * @summary ClearConnection_alerting
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `ClearConnection_alerting`.
 */
export
const alerting: number = ClearConnection_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_connected
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Connected (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 * @description
 * Alias of `ClearConnection_connected`.
 */
export
const connected: number = ClearConnection_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_fail
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Fail (ECMA-269 C.5.8).
 */
export
const ClearConnection_fail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fail
 * @constant
 * @description
 * Alias of `ClearConnection_fail`.
 */
export
const fail: number = ClearConnection_fail; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `ClearConnection_queued`.
 */
export
const queued: number = ClearConnection_queued; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_initiated
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Initiated (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_initiated: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 * @description
 * Alias of `ClearConnection_initiated`.
 */
export
const initiated: number = ClearConnection_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_hold
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Hold (ECMA-269 C.5.8).
 */
export
const ClearConnection_hold: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 * @description
 * Alias of `ClearConnection_hold`.
 */
export
const hold: number = ClearConnection_hold; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.8).
 */
export
const ClearConnection_correlatorData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `ClearConnection_correlatorData`.
 */
export
const correlatorData: number = ClearConnection_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_userData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `ClearConnection_userData`.
 */
export
const userData: number = ClearConnection_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_reason
 * @constant
 * @description
 * Bit set means the SF supports the optional `reason` parameter (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_reason: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 * @description
 * Alias of `ClearConnection_reason`.
 */
export
const reason: number = ClearConnection_reason; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.8).
 */
export
const ClearConnection_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ClearConnection_privateData`.
 */
export
const privateData: number = ClearConnection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.8).
 */
export
const ClearConnection_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ClearConnection_privateDataInAck`.
 */
export
const privateDataInAck: number = ClearConnection_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.8).
 */
export
const ClearConnection_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `ClearConnection_deviceIDOnly`.
 */
export
const deviceIDOnly: number = ClearConnection_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ClearConnection_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.8).
 */
export
const ClearConnection_ackModelMultiStep: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `ClearConnection_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = ClearConnection_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ClearConnection: $.ASN1Decoder<ClearConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearConnection (el: _Element): ClearConnection {
    if (!_cached_decoder_for_ClearConnection) { _cached_decoder_for_ClearConnection = $._decodeBitString; }
    return _cached_decoder_for_ClearConnection(el);
}

let _cached_encoder_for_ClearConnection: $.ASN1Encoder<ClearConnection> | null = null;

/**
 * @summary Encodes a(n) ClearConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearConnection, encoded as an ASN.1 Element.
 */
export
function _encode_ClearConnection (value: ClearConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearConnection) { _cached_encoder_for_ClearConnection = $._encodeBitString; }
    return _cached_encoder_for_ClearConnection(value, elGetter);
}


/* eslint-enable */
