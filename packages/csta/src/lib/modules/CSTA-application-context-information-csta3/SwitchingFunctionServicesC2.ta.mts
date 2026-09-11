/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SwitchingFunctionServicesC2
 * @description
 *
 * Phase II switching-function services. Phase II (ECMA-218) compatibility BIT
 * STRING in ACSE user-information. For Phase III and later, use Capability
 * Exchange to learn supported services and events. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchingFunctionServicesC2  ::=  BIT STRING
 *     {alternateCall                  (0),
 *      answerCall                     (1),
 *      associateData                  (2),
 *      callCompletion                 (3),
 *      clearCall                      (4),
 *      clearConnection                (5),
 *      conferenceCall                 (6),
 *      consultationCall               (7),
 *      divertCall                     (8),
 *      holdCall                       (9),
 *      makeCall                       (10),
 *      makePredictiveCall             (11),
 *      parkCall                       (12),
 *      queryDevice                    (13),
 *      reconnectCall                  (14),
 *      retrieveCall                   (15),
 *      sendDTMFTones            (16),
 *      setFeature                     (17),
 *      singleStepConference           (18),
 *      singleStepTransfer             (19),
 *      transferCall                   (20)    }
 * ```
 */
export
type SwitchingFunctionServicesC2 = BIT_STRING;

/**
 * @summary SwitchingFunctionServicesC2_alternateCall
 * @description Advertises `alternateCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_alternateCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alternateCall
 * @description Alias of {@link SwitchingFunctionServicesC2_alternateCall}.
 * @constant
 */
export
const alternateCall: number = SwitchingFunctionServicesC2_alternateCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_answerCall
 * @description Advertises `answerCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_answerCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary answerCall
 * @description Alias of {@link SwitchingFunctionServicesC2_answerCall}.
 * @constant
 */
export
const answerCall: number = SwitchingFunctionServicesC2_answerCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_associateData
 * @description Advertises `associateData` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_associateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary associateData
 * @description Alias of {@link SwitchingFunctionServicesC2_associateData}.
 * @constant
 */
export
const associateData: number = SwitchingFunctionServicesC2_associateData; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_callCompletion
 * @description Advertises `callCompletion` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_callCompletion: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCompletion
 * @description Alias of {@link SwitchingFunctionServicesC2_callCompletion}.
 * @constant
 */
export
const callCompletion: number = SwitchingFunctionServicesC2_callCompletion; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_clearCall
 * @description Advertises `clearCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_clearCall: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary clearCall
 * @description Alias of {@link SwitchingFunctionServicesC2_clearCall}.
 * @constant
 */
export
const clearCall: number = SwitchingFunctionServicesC2_clearCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_clearConnection
 * @description
 * Advertises `clearConnection` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_clearConnection: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary clearConnection
 * @description Alias of {@link SwitchingFunctionServicesC2_clearConnection}.
 * @constant
 */
export
const clearConnection: number = SwitchingFunctionServicesC2_clearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_conferenceCall
 * @description Advertises `conferenceCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_conferenceCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary conferenceCall
 * @description Alias of {@link SwitchingFunctionServicesC2_conferenceCall}.
 * @constant
 */
export
const conferenceCall: number = SwitchingFunctionServicesC2_conferenceCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_consultationCall
 * @description
 * Advertises `consultationCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_consultationCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary consultationCall
 * @description Alias of {@link SwitchingFunctionServicesC2_consultationCall}.
 * @constant
 */
export
const consultationCall: number = SwitchingFunctionServicesC2_consultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_divertCall
 * @description Advertises `divertCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_divertCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary divertCall
 * @description Alias of {@link SwitchingFunctionServicesC2_divertCall}.
 * @constant
 */
export
const divertCall: number = SwitchingFunctionServicesC2_divertCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_holdCall
 * @description Advertises `holdCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_holdCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary holdCall
 * @description Alias of {@link SwitchingFunctionServicesC2_holdCall}.
 * @constant
 */
export
const holdCall: number = SwitchingFunctionServicesC2_holdCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_makeCall
 * @description Advertises `makeCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_makeCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary makeCall
 * @description Alias of {@link SwitchingFunctionServicesC2_makeCall}.
 * @constant
 */
export
const makeCall: number = SwitchingFunctionServicesC2_makeCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_makePredictiveCall
 * @description
 * Advertises `makePredictiveCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_makePredictiveCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary makePredictiveCall
 * @description Alias of {@link SwitchingFunctionServicesC2_makePredictiveCall}.
 * @constant
 */
export
const makePredictiveCall: number = SwitchingFunctionServicesC2_makePredictiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_parkCall
 * @description Advertises `parkCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_parkCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary parkCall
 * @description Alias of {@link SwitchingFunctionServicesC2_parkCall}.
 * @constant
 */
export
const parkCall: number = SwitchingFunctionServicesC2_parkCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_queryDevice
 * @description Advertises `queryDevice` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_queryDevice: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary queryDevice
 * @description Alias of {@link SwitchingFunctionServicesC2_queryDevice}.
 * @constant
 */
export
const queryDevice: number = SwitchingFunctionServicesC2_queryDevice; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_reconnectCall
 * @description Advertises `reconnectCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_reconnectCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary reconnectCall
 * @description Alias of {@link SwitchingFunctionServicesC2_reconnectCall}.
 * @constant
 */
export
const reconnectCall: number = SwitchingFunctionServicesC2_reconnectCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_retrieveCall
 * @description Advertises `retrieveCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_retrieveCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary retrieveCall
 * @description Alias of {@link SwitchingFunctionServicesC2_retrieveCall}.
 * @constant
 */
export
const retrieveCall: number = SwitchingFunctionServicesC2_retrieveCall; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_sendDTMFTones
 * @description Advertises `sendDTMFTones` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_sendDTMFTones: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary sendDTMFTones
 * @description Alias of {@link SwitchingFunctionServicesC2_sendDTMFTones}.
 * @constant
 */
export
const sendDTMFTones: number = SwitchingFunctionServicesC2_sendDTMFTones; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_setFeature
 * @description Advertises `setFeature` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_setFeature: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary setFeature
 * @description Alias of {@link SwitchingFunctionServicesC2_setFeature}.
 * @constant
 */
export
const setFeature: number = SwitchingFunctionServicesC2_setFeature; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_singleStepConference
 * @description
 * Advertises `singleStepConference` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_singleStepConference: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConference
 * @description
 * Alias of {@link SwitchingFunctionServicesC2_singleStepConference}.
 * @constant
 */
export
const singleStepConference: number = SwitchingFunctionServicesC2_singleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_singleStepTransfer
 * @description
 * Advertises `singleStepTransfer` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_singleStepTransfer: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary singleStepTransfer
 * @description Alias of {@link SwitchingFunctionServicesC2_singleStepTransfer}.
 * @constant
 */
export
const singleStepTransfer: number = SwitchingFunctionServicesC2_singleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionServicesC2_transferCall
 * @description Advertises `transferCall` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const SwitchingFunctionServicesC2_transferCall: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary transferCall
 * @description Alias of {@link SwitchingFunctionServicesC2_transferCall}.
 * @constant
 */
export
const transferCall: number = SwitchingFunctionServicesC2_transferCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwitchingFunctionServicesC2: $.ASN1Decoder<SwitchingFunctionServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwitchingFunctionServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwitchingFunctionServicesC2 (el: _Element): SwitchingFunctionServicesC2 {
    if (!_cached_decoder_for_SwitchingFunctionServicesC2) { _cached_decoder_for_SwitchingFunctionServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_SwitchingFunctionServicesC2(el);
}

let _cached_encoder_for_SwitchingFunctionServicesC2: $.ASN1Encoder<SwitchingFunctionServicesC2> | null = null;

/**
 * @summary Encodes a(n) SwitchingFunctionServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchingFunctionServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_SwitchingFunctionServicesC2 (value: SwitchingFunctionServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwitchingFunctionServicesC2) { _cached_encoder_for_SwitchingFunctionServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_SwitchingFunctionServicesC2(value, elGetter);
}


/* eslint-enable */
