/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary GetLogicalDeviceInformation
 * @description
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
 */
export
const GetLogicalDeviceInformation_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 */
export
const privateDataInReq: number = GetLogicalDeviceInformation_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_namedDeviceTypeInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_namedDeviceTypeInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary namedDeviceTypeInAck
 * @constant
 */
export
const namedDeviceTypeInAck: number = GetLogicalDeviceInformation_namedDeviceTypeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_shortFormDeviceIDInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_shortFormDeviceIDInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary shortFormDeviceIDInAck
 * @constant
 */
export
const shortFormDeviceIDInAck: number = GetLogicalDeviceInformation_shortFormDeviceIDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_miscMonitorCapsInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_miscMonitorCapsInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary miscMonitorCapsInAck
 * @constant
 */
export
const miscMonitorCapsInAck: number = GetLogicalDeviceInformation_miscMonitorCapsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxCallBacksInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxCallBacksInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary maxCallBacksInAck
 * @constant
 */
export
const maxCallBacksInAck: number = GetLogicalDeviceInformation_maxCallBacksInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxAutoAnswerRingsInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxAutoAnswerRingsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary maxAutoAnswerRingsInAck
 * @constant
 */
export
const maxAutoAnswerRingsInAck: number = GetLogicalDeviceInformation_maxAutoAnswerRingsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxActiveCallsInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxActiveCallsInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary maxActiveCallsInAck
 * @constant
 */
export
const maxActiveCallsInAck: number = GetLogicalDeviceInformation_maxActiveCallsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxHeldCallsInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxHeldCallsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary maxHeldCallsInAck
 * @constant
 */
export
const maxHeldCallsInAck: number = GetLogicalDeviceInformation_maxHeldCallsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxFwdSettingsInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxFwdSettingsInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary maxFwdSettingsInAck
 * @constant
 */
export
const maxFwdSettingsInAck: number = GetLogicalDeviceInformation_maxFwdSettingsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxDevicesInConfInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxDevicesInConfInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary maxDevicesInConfInAck
 * @constant
 */
export
const maxDevicesInConfInAck: number = GetLogicalDeviceInformation_maxDevicesInConfInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupParameter
 * @constant
 */
export
const GetLogicalDeviceInformation_transAndConfSetupParameter: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupParameter
 * @constant
 */
export
const transAndConfSetupParameter: number = GetLogicalDeviceInformation_transAndConfSetupParameter; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupConsultationInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_transAndConfSetupConsultationInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupConsultationInAck
 * @constant
 */
export
const transAndConfSetupConsultationInAck: number = GetLogicalDeviceInformation_transAndConfSetupConsultationInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupHoldMakeInAck
 * @constant
 */
export
const transAndConfSetupHoldMakeInAck: number = GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupAlternateInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_transAndConfSetupAlternateInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupAlternateInAck
 * @constant
 */
export
const transAndConfSetupAlternateInAck: number = GetLogicalDeviceInformation_transAndConfSetupAlternateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCallsHoldInAck
 * @constant
 */
export
const transAndConfSetupTwoCallsHoldInAck: number = GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCallsConnectedInAck
 * @constant
 */
export
const transAndConfSetupTwoCallsConnectedInAck: number = GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_mediaClassSupportInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_mediaClassSupportInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary mediaClassSupportInAck
 * @constant
 */
export
const mediaClassSupportInAck: number = GetLogicalDeviceInformation_mediaClassSupportInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_connectionRateListInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_connectionRateListInAck: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary connectionRateListInAck
 * @constant
 */
export
const connectionRateListInAck: number = GetLogicalDeviceInformation_connectionRateListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_delayToleranceListInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_delayToleranceListInAck: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary delayToleranceListInAck
 * @constant
 */
export
const delayToleranceListInAck: number = GetLogicalDeviceInformation_delayToleranceListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_numberOfChannelsInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_numberOfChannelsInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary numberOfChannelsInAck
 * @constant
 */
export
const numberOfChannelsInAck: number = GetLogicalDeviceInformation_numberOfChannelsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_maxChannelBindInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_maxChannelBindInAck: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary maxChannelBindInAck
 * @constant
 */
export
const maxChannelBindInAck: number = GetLogicalDeviceInformation_maxChannelBindInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLogicalDeviceInformation_privateDataInAck
 * @constant
 */
export
const GetLogicalDeviceInformation_privateDataInAck: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
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
