/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConferenceCall
 * @description
 * Capability bitmap for the Conference Call service (ECMA-269 C.5.9, ECMA-285
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
 * ConferenceCall  ::=  BIT STRING
 * {     activeCallConnected             ( 0),     -- initial states
 *     activeCallHold                 ( 1),     -- initial states
 *     heldCallConnected             ( 2),     -- initial states
 *     heldCallHold                 ( 3),     -- initial states
 *     privateData                 ( 4),     -- optional parameters
 *     connectionParameterInAck         ( 5),     -- optional parameters
 *     endpointDeviceID             ( 6),     -- optional parameters
 *     resultingConnectionInfo         ( 7),     -- optional parameters
 *     conferenceCallOnfoInAck         ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     protectedAgainstClearing         (10),     -- misc characteristics
 *     deviceIDOnly                 (11),     -- misc characteristics
 *     ackModelMultiStep             (12) }
 * ```
 */
export
type ConferenceCall = BIT_STRING;

/**
 * @summary ConferenceCall_activeCallConnected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_activeCallConnected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activeCallConnected
 * @constant
 * @description
 * Alias of `ConferenceCall_activeCallConnected`.
 */
export
const activeCallConnected: number = ConferenceCall_activeCallConnected; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_activeCallHold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_activeCallHold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary activeCallHold
 * @constant
 * @description
 * Alias of `ConferenceCall_activeCallHold`.
 */
export
const activeCallHold: number = ConferenceCall_activeCallHold; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_heldCallConnected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_heldCallConnected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary heldCallConnected
 * @constant
 * @description
 * Alias of `ConferenceCall_heldCallConnected`.
 */
export
const heldCallConnected: number = ConferenceCall_heldCallConnected; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_heldCallHold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_heldCallHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary heldCallHold
 * @constant
 * @description
 * Alias of `ConferenceCall_heldCallHold`.
 */
export
const heldCallHold: number = ConferenceCall_heldCallHold; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const ConferenceCall_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ConferenceCall_privateData`.
 */
export
const privateData: number = ConferenceCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_connectionParameterInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `connectionParameter` in the
 * acknowledgement (ECMA-269 Annex C).
 */
export
const ConferenceCall_connectionParameterInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionParameterInAck
 * @constant
 * @description
 * Alias of `ConferenceCall_connectionParameterInAck`.
 */
export
const connectionParameterInAck: number = ConferenceCall_connectionParameterInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_endpointDeviceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_endpointDeviceID: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary endpointDeviceID
 * @constant
 * @description
 * Alias of `ConferenceCall_endpointDeviceID`.
 */
export
const endpointDeviceID: number = ConferenceCall_endpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_resultingConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_resultingConnectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary resultingConnectionInfo
 * @constant
 * @description
 * Alias of `ConferenceCall_resultingConnectionInfo`.
 */
export
const resultingConnectionInfo: number = ConferenceCall_resultingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_conferenceCallOnfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `conferenceCallOnfo` in the
 * acknowledgement (ECMA-269 Annex C).
 */
export
const ConferenceCall_conferenceCallOnfoInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary conferenceCallOnfoInAck
 * @constant
 * @description
 * Alias of `ConferenceCall_conferenceCallOnfoInAck`.
 */
export
const conferenceCallOnfoInAck: number = ConferenceCall_conferenceCallOnfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const ConferenceCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ConferenceCall_privateDataInAck`.
 */
export
const privateDataInAck: number = ConferenceCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_protectedAgainstClearing
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const ConferenceCall_protectedAgainstClearing: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary protectedAgainstClearing
 * @constant
 * @description
 * Alias of `ConferenceCall_protectedAgainstClearing`.
 */
export
const protectedAgainstClearing: number = ConferenceCall_protectedAgainstClearing; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 Annex C).
 */
export
const ConferenceCall_deviceIDOnly: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `ConferenceCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = ConferenceCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConferenceCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 Annex C).
 */
export
const ConferenceCall_ackModelMultiStep: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `ConferenceCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = ConferenceCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConferenceCall: $.ASN1Decoder<ConferenceCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferenceCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferenceCall (el: _Element): ConferenceCall {
    if (!_cached_decoder_for_ConferenceCall) { _cached_decoder_for_ConferenceCall = $._decodeBitString; }
    return _cached_decoder_for_ConferenceCall(el);
}

let _cached_encoder_for_ConferenceCall: $.ASN1Encoder<ConferenceCall> | null = null;

/**
 * @summary Encodes a(n) ConferenceCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferenceCall, encoded as an ASN.1 Element.
 */
export
function _encode_ConferenceCall (value: ConferenceCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferenceCall) { _cached_encoder_for_ConferenceCall = $._encodeBitString; }
    return _cached_encoder_for_ConferenceCall(value, elGetter);
}


/* eslint-enable */
