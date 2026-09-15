/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLogicalDeviceInformation
 * @description
 * Capability bitmap for the Get Logical Device Information service (ECMA-269
 * C.1.2, ECMA-285 §9.10). Presence of this entry in `CapExchangeServList` means
 * the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLogicalDeviceInformation  ::=  BIT STRING
 * {     privateDataInReq             ( 0),
 *     namedDeviceTypeInAck             ( 1),
 *     shortFormDeviceIDInAck             ( 2),
 *     miscMonitorCapsInAck             ( 3),
 *     maxCallBacksInAck             ( 4),
 *     maxAutoAnswerRingsInAck         ( 5),
 *     maxActiveCallsInAck             ( 6),
 *     maxHeldCallsInAck             ( 7),
 *     maxFwdSettingsInAck             ( 8),
 *     maxDevicesInConfInAck             ( 9),
 *     transAndConfSetupParameter         (10),
 *     transAndConfSetupConsultationInAck     (11),
 *     transAndConfSetupHoldMakeInAck         (12),
 *     transAndConfSetupAlternateInAck     (13),
 *     transAndConfSetupTwoCallsHoldInAck     (14),
 *     transAndConfSetupTwoCallsConnectedInAck (15),
 *     mediaClassSupportInAck             (16),
 *     connectionRateListInAck         (17),
 *     delayToleranceListInAck         (18),
 *     numberOfChannelsInAck             (19),
 *     maxChannelBindInAck             (20),
 *     privateDataInAck             (21) }
 * ```
 */
export
type GetLogicalDeviceInformation = BIT_STRING;

/**
 * @summary GetLogicalDeviceInformation_privateDataInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the service request
 * (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_privateDataInReq`.
 */
export
const privateDataInReq: number = GetLogicalDeviceInformation_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_namedDeviceTypeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `namedDeviceTypes` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_namedDeviceTypeInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary namedDeviceTypeInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_namedDeviceTypeInAck`.
 */
export
const namedDeviceTypeInAck: number = GetLogicalDeviceInformation_namedDeviceTypeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_shortFormDeviceIDInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `shortFormDeviceID` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_shortFormDeviceIDInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary shortFormDeviceIDInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_shortFormDeviceIDInAck`.
 */
export
const shortFormDeviceIDInAck: number = GetLogicalDeviceInformation_shortFormDeviceIDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_miscMonitorCapsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `miscMonitorCaps` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_miscMonitorCapsInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary miscMonitorCapsInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_miscMonitorCapsInAck`.
 */
export
const miscMonitorCapsInAck: number = GetLogicalDeviceInformation_miscMonitorCapsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxCallBacksInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxCallbacks` in the acknowledgement
 * (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxCallBacksInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary maxCallBacksInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxCallBacksInAck`.
 */
export
const maxCallBacksInAck: number = GetLogicalDeviceInformation_maxCallBacksInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxAutoAnswerRingsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxAutoAnswerRings` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxAutoAnswerRingsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary maxAutoAnswerRingsInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxAutoAnswerRingsInAck`.
 */
export
const maxAutoAnswerRingsInAck: number = GetLogicalDeviceInformation_maxAutoAnswerRingsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxActiveCallsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxActiveCalls` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxActiveCallsInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary maxActiveCallsInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxActiveCallsInAck`.
 */
export
const maxActiveCallsInAck: number = GetLogicalDeviceInformation_maxActiveCallsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxHeldCallsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxHeldCalls` in the acknowledgement
 * (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxHeldCallsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary maxHeldCallsInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxHeldCallsInAck`.
 */
export
const maxHeldCallsInAck: number = GetLogicalDeviceInformation_maxHeldCallsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxFwdSettingsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxFwdSettings` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxFwdSettingsInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary maxFwdSettingsInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxFwdSettingsInAck`.
 */
export
const maxFwdSettingsInAck: number = GetLogicalDeviceInformation_maxFwdSettingsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxDevicesInConfInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxDevicesInConf` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxDevicesInConfInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary maxDevicesInConfInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxDevicesInConfInAck`.
 */
export
const maxDevicesInConfInAck: number = GetLogicalDeviceInformation_maxDevicesInConfInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupParameter
 * @constant
 * @description
 * Bit set means the SF supports optional `transAndConfSetup` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_transAndConfSetupParameter: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupParameter
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_transAndConfSetupParameter`.
 */
export
const transAndConfSetupParameter: number = GetLogicalDeviceInformation_transAndConfSetupParameter; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupConsultationInAck
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` consultationCall in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_transAndConfSetupConsultationInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupConsultationInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_transAndConfSetupConsultationInAck`.
 */
export
const transAndConfSetupConsultationInAck: number = GetLogicalDeviceInformation_transAndConfSetupConsultationInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` holdCallMakeCall in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupHoldMakeInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck`.
 */
export
const transAndConfSetupHoldMakeInAck: number = GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupAlternateInAck
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` alternateCall in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_transAndConfSetupAlternateInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupAlternateInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_transAndConfSetupAlternateInAck`.
 */
export
const transAndConfSetupAlternateInAck: number = GetLogicalDeviceInformation_transAndConfSetupAlternateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` twoCallsHold in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCallsHoldInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck`.
 */
export
const transAndConfSetupTwoCallsHoldInAck: number = GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` twoCallsConnected in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCallsConnectedInAck
 * @constant
 * @description
 * Alias of
 * `GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck`.
 */
export
const transAndConfSetupTwoCallsConnectedInAck: number = GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_mediaClassSupportInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaClassSupport` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_mediaClassSupportInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary mediaClassSupportInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_mediaClassSupportInAck`.
 */
export
const mediaClassSupportInAck: number = GetLogicalDeviceInformation_mediaClassSupportInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_connectionRateListInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `connectionRateList` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_connectionRateListInAck: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary connectionRateListInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_connectionRateListInAck`.
 */
export
const connectionRateListInAck: number = GetLogicalDeviceInformation_connectionRateListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_delayToleranceListInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `delayToleranceList` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_delayToleranceListInAck: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary delayToleranceListInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_delayToleranceListInAck`.
 */
export
const delayToleranceListInAck: number = GetLogicalDeviceInformation_delayToleranceListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_numberOfChannelsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `numberOfChannels` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_numberOfChannelsInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary numberOfChannelsInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_numberOfChannelsInAck`.
 */
export
const numberOfChannelsInAck: number = GetLogicalDeviceInformation_numberOfChannelsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxChannelBindInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `maxChannelBind` in the
 * acknowledgement (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_maxChannelBindInAck: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary maxChannelBindInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_maxChannelBindInAck`.
 */
export
const maxChannelBindInAck: number = GetLogicalDeviceInformation_maxChannelBindInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.1.2).
 */
export
const GetLogicalDeviceInformation_privateDataInAck: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetLogicalDeviceInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = GetLogicalDeviceInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLogicalDeviceInformation: $.ASN1Decoder<GetLogicalDeviceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLogicalDeviceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLogicalDeviceInformation (el: _Element): GetLogicalDeviceInformation {
    if (!_cached_decoder_for_GetLogicalDeviceInformation) { _cached_decoder_for_GetLogicalDeviceInformation = $._decodeBitString; }
    return _cached_decoder_for_GetLogicalDeviceInformation(el);
}

let _cached_encoder_for_GetLogicalDeviceInformation: $.ASN1Encoder<GetLogicalDeviceInformation> | null = null;

/**
 * @summary Encodes a(n) GetLogicalDeviceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLogicalDeviceInformation, encoded as an ASN.1 Element.
 */
export
function _encode_GetLogicalDeviceInformation (value: GetLogicalDeviceInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLogicalDeviceInformation) { _cached_encoder_for_GetLogicalDeviceInformation = $._encodeBitString; }
    return _cached_encoder_for_GetLogicalDeviceInformation(value, elGetter);
}


/* eslint-enable */
