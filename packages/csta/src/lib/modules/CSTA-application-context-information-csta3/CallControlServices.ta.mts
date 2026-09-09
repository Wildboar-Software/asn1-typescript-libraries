/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallControlServices
 * @description
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
 * @constant
 */
export
const CallControlServices_acceptCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acceptCall
 * @constant
 */
export
const acceptCall: number = CallControlServices_acceptCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_alternateCall
 * @constant
 */
export
const CallControlServices_alternateCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary alternateCall
 * @constant
 */
export
const alternateCall: number = CallControlServices_alternateCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_answerCall
 * @constant
 */
export
const CallControlServices_answerCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary answerCall
 * @constant
 */
export
const answerCall: number = CallControlServices_answerCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_callBack
 * @constant
 */
export
const CallControlServices_callBack: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callBack
 * @constant
 */
export
const callBack: number = CallControlServices_callBack; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_callBackMessage
 * @constant
 */
export
const CallControlServices_callBackMessage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callBackMessage
 * @constant
 */
export
const callBackMessage: number = CallControlServices_callBackMessage; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_campOnCall
 * @constant
 */
export
const CallControlServices_campOnCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary campOnCall
 * @constant
 */
export
const campOnCall: number = CallControlServices_campOnCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_clearCall
 * @constant
 */
export
const CallControlServices_clearCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary clearCall
 * @constant
 */
export
const clearCall: number = CallControlServices_clearCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_clearConnection
 * @constant
 */
export
const CallControlServices_clearConnection: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary clearConnection
 * @constant
 */
export
const clearConnection: number = CallControlServices_clearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_conferenceCall
 * @constant
 */
export
const CallControlServices_conferenceCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary conferenceCall
 * @constant
 */
export
const conferenceCall: number = CallControlServices_conferenceCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_consultationCall
 * @constant
 */
export
const CallControlServices_consultationCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary consultationCall
 * @constant
 */
export
const consultationCall: number = CallControlServices_consultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_deflectCall
 * @constant
 */
export
const CallControlServices_deflectCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deflectCall
 * @constant
 */
export
const deflectCall: number = CallControlServices_deflectCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_dialDigits
 * @constant
 */
export
const CallControlServices_dialDigits: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary dialDigits
 * @constant
 */
export
const dialDigits: number = CallControlServices_dialDigits; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_directedPickupCall
 * @constant
 */
export
const CallControlServices_directedPickupCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary directedPickupCall
 * @constant
 */
export
const directedPickupCall: number = CallControlServices_directedPickupCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_groupPickupCall
 * @constant
 */
export
const CallControlServices_groupPickupCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary groupPickupCall
 * @constant
 */
export
const groupPickupCall: number = CallControlServices_groupPickupCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_holdCall
 * @constant
 */
export
const CallControlServices_holdCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary holdCall
 * @constant
 */
export
const holdCall: number = CallControlServices_holdCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_intrudeCall
 * @constant
 */
export
const CallControlServices_intrudeCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary intrudeCall
 * @constant
 */
export
const intrudeCall: number = CallControlServices_intrudeCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_joinCall
 * @constant
 */
export
const CallControlServices_joinCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary joinCall
 * @constant
 */
export
const joinCall: number = CallControlServices_joinCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_makeCall
 * @constant
 */
export
const CallControlServices_makeCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary makeCall
 * @constant
 */
export
const makeCall: number = CallControlServices_makeCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_makeConnection
 * @constant
 */
export
const CallControlServices_makeConnection: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary makeConnection
 * @constant
 */
export
const makeConnection: number = CallControlServices_makeConnection; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_makePredictiveCall
 * @constant
 */
export
const CallControlServices_makePredictiveCall: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary makePredictiveCall
 * @constant
 */
export
const makePredictiveCall: number = CallControlServices_makePredictiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_parkCall
 * @constant
 */
export
const CallControlServices_parkCall: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary parkCall
 * @constant
 */
export
const parkCall: number = CallControlServices_parkCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_reconnectCall
 * @constant
 */
export
const CallControlServices_reconnectCall: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary reconnectCall
 * @constant
 */
export
const reconnectCall: number = CallControlServices_reconnectCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_retrieveCall
 * @constant
 */
export
const CallControlServices_retrieveCall: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary retrieveCall
 * @constant
 */
export
const retrieveCall: number = CallControlServices_retrieveCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_sendMessage
 * @constant
 */
export
const CallControlServices_sendMessage: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary sendMessage
 * @constant
 */
export
const sendMessage: number = CallControlServices_sendMessage; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_singleStepConference
 * @constant
 */
export
const CallControlServices_singleStepConference: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConference
 * @constant
 */
export
const singleStepConference: number = CallControlServices_singleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_singleStepTransfer
 * @constant
 */
export
const CallControlServices_singleStepTransfer: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary singleStepTransfer
 * @constant
 */
export
const singleStepTransfer: number = CallControlServices_singleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlServices_transferCall
 * @constant
 */
export
const CallControlServices_transferCall: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary transferCall
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
