/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallControlServices
 * @description
 *
 * Call-control services. BIT STRING advertised in ACSE user-information listing
 * which CSTA services or events this association will use. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlServices  ::=  BIT STRING
 * {    acceptCall                        ( 0),
 *         alternateCall                        ( 1),
 *         answerCall                        ( 2),
 *         callBack                        ( 3),
 *         callBackMessage                        ( 4),
 *         campOnCall                        ( 5),
 *         clearCall                        ( 6),
 *         clearConnection                        ( 7),
 *         conferenceCall                        ( 8),
 *         consultationCall                    ( 9),
 *         deflectCall                        (10),
 *         dialDigits                        (11),
 *         directedPickupCall                    (12),
 *         groupPickupCall                        (13),
 *         holdCall                        (14),
 *         intrudeCall                        (15),
 *         joinCall                        (16),
 *         makeCall                        (17),
 *         makeConnection                        (25),
 *         makePredictiveCall                    (18),
 *         parkCall                        (19),
 *         reconnectCall                        (20),
 *         retrieveCall                        (21),
 *         sendMessage                        (26),
 *         singleStepConference                    (22),
 *         singleStepTransfer                    (23),
 *         transferCall                        (24) }
 * ```
 */
export
type CallControlServices = BIT_STRING;

/**
 * @summary CallControlServices_acceptCall
 * @description Advertises `acceptCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_acceptCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acceptCall
 * @description Alias of {@link CallControlServices_acceptCall}.
 * @constant
 */
export
const acceptCall: number = CallControlServices_acceptCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_alternateCall
 * @description Advertises `alternateCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_alternateCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary alternateCall
 * @description Alias of {@link CallControlServices_alternateCall}.
 * @constant
 */
export
const alternateCall: number = CallControlServices_alternateCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_answerCall
 * @description Advertises `answerCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_answerCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary answerCall
 * @description Alias of {@link CallControlServices_answerCall}.
 * @constant
 */
export
const answerCall: number = CallControlServices_answerCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_callBack
 * @description Advertises `callBack` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_callBack: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callBack
 * @description Alias of {@link CallControlServices_callBack}.
 * @constant
 */
export
const callBack: number = CallControlServices_callBack; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_callBackMessage
 * @description
 * Advertises `callBackMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_callBackMessage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callBackMessage
 * @description Alias of {@link CallControlServices_callBackMessage}.
 * @constant
 */
export
const callBackMessage: number = CallControlServices_callBackMessage; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_campOnCall
 * @description Advertises `campOnCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_campOnCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary campOnCall
 * @description Alias of {@link CallControlServices_campOnCall}.
 * @constant
 */
export
const campOnCall: number = CallControlServices_campOnCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_clearCall
 * @description Advertises `clearCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_clearCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary clearCall
 * @description Alias of {@link CallControlServices_clearCall}.
 * @constant
 */
export
const clearCall: number = CallControlServices_clearCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_clearConnection
 * @description
 * Advertises `clearConnection` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_clearConnection: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary clearConnection
 * @description Alias of {@link CallControlServices_clearConnection}.
 * @constant
 */
export
const clearConnection: number = CallControlServices_clearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_conferenceCall
 * @description Advertises `conferenceCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_conferenceCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary conferenceCall
 * @description Alias of {@link CallControlServices_conferenceCall}.
 * @constant
 */
export
const conferenceCall: number = CallControlServices_conferenceCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_consultationCall
 * @description
 * Advertises `consultationCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_consultationCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary consultationCall
 * @description Alias of {@link CallControlServices_consultationCall}.
 * @constant
 */
export
const consultationCall: number = CallControlServices_consultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_deflectCall
 * @description Advertises `deflectCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_deflectCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deflectCall
 * @description Alias of {@link CallControlServices_deflectCall}.
 * @constant
 */
export
const deflectCall: number = CallControlServices_deflectCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_dialDigits
 * @description Advertises `dialDigits` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_dialDigits: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary dialDigits
 * @description Alias of {@link CallControlServices_dialDigits}.
 * @constant
 */
export
const dialDigits: number = CallControlServices_dialDigits; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_directedPickupCall
 * @description
 * Advertises `directedPickupCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_directedPickupCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary directedPickupCall
 * @description Alias of {@link CallControlServices_directedPickupCall}.
 * @constant
 */
export
const directedPickupCall: number = CallControlServices_directedPickupCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_groupPickupCall
 * @description
 * Advertises `groupPickupCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_groupPickupCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary groupPickupCall
 * @description Alias of {@link CallControlServices_groupPickupCall}.
 * @constant
 */
export
const groupPickupCall: number = CallControlServices_groupPickupCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_holdCall
 * @description Advertises `holdCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_holdCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary holdCall
 * @description Alias of {@link CallControlServices_holdCall}.
 * @constant
 */
export
const holdCall: number = CallControlServices_holdCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_intrudeCall
 * @description Advertises `intrudeCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_intrudeCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary intrudeCall
 * @description Alias of {@link CallControlServices_intrudeCall}.
 * @constant
 */
export
const intrudeCall: number = CallControlServices_intrudeCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_joinCall
 * @description Advertises `joinCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_joinCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary joinCall
 * @description Alias of {@link CallControlServices_joinCall}.
 * @constant
 */
export
const joinCall: number = CallControlServices_joinCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_makeCall
 * @description Advertises `makeCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_makeCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary makeCall
 * @description Alias of {@link CallControlServices_makeCall}.
 * @constant
 */
export
const makeCall: number = CallControlServices_makeCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_makeConnection
 * @description Advertises `makeConnection` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_makeConnection: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary makeConnection
 * @description Alias of {@link CallControlServices_makeConnection}.
 * @constant
 */
export
const makeConnection: number = CallControlServices_makeConnection; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_makePredictiveCall
 * @description
 * Advertises `makePredictiveCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_makePredictiveCall: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary makePredictiveCall
 * @description Alias of {@link CallControlServices_makePredictiveCall}.
 * @constant
 */
export
const makePredictiveCall: number = CallControlServices_makePredictiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_parkCall
 * @description Advertises `parkCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_parkCall: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary parkCall
 * @description Alias of {@link CallControlServices_parkCall}.
 * @constant
 */
export
const parkCall: number = CallControlServices_parkCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_reconnectCall
 * @description Advertises `reconnectCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_reconnectCall: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary reconnectCall
 * @description Alias of {@link CallControlServices_reconnectCall}.
 * @constant
 */
export
const reconnectCall: number = CallControlServices_reconnectCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_retrieveCall
 * @description Advertises `retrieveCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_retrieveCall: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary retrieveCall
 * @description Alias of {@link CallControlServices_retrieveCall}.
 * @constant
 */
export
const retrieveCall: number = CallControlServices_retrieveCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_sendMessage
 * @description Advertises `sendMessage` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_sendMessage: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary sendMessage
 * @description Alias of {@link CallControlServices_sendMessage}.
 * @constant
 */
export
const sendMessage: number = CallControlServices_sendMessage; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_singleStepConference
 * @description
 * Advertises `singleStepConference` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_singleStepConference: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConference
 * @description Alias of {@link CallControlServices_singleStepConference}.
 * @constant
 */
export
const singleStepConference: number = CallControlServices_singleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_singleStepTransfer
 * @description
 * Advertises `singleStepTransfer` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_singleStepTransfer: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary singleStepTransfer
 * @description Alias of {@link CallControlServices_singleStepTransfer}.
 * @constant
 */
export
const singleStepTransfer: number = CallControlServices_singleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_transferCall
 * @description Advertises `transferCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallControlServices_transferCall: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary transferCall
 * @description Alias of {@link CallControlServices_transferCall}.
 * @constant
 */
export
const transferCall: number = CallControlServices_transferCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallControlServices: $.ASN1Decoder<CallControlServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlServices (el: _Element): CallControlServices {
    if (!_cached_decoder_for_CallControlServices) { _cached_decoder_for_CallControlServices = $._decodeBitString; }
    return _cached_decoder_for_CallControlServices(el);
}

let _cached_encoder_for_CallControlServices: $.ASN1Encoder<CallControlServices> | null = null;

/**
 * @summary Encodes a(n) CallControlServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlServices, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlServices (value: CallControlServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlServices) { _cached_encoder_for_CallControlServices = $._encodeBitString; }
    return _cached_encoder_for_CallControlServices(value, elGetter);
}


/* eslint-enable */
