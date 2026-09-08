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
 * @summary ConsultationCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultationCall  ::=  BIT STRING
 * {     connectionReservation                 ( 0),     -- optional parameters
 *     accountCode                     ( 1),     -- optional parameters
 *     authCode                     ( 2),     -- optional parameters
 *     correlatorData                     ( 3),     -- optional parameters
 *     userData                     ( 4),     -- optional parameters
 *     callCharacteristics                 ( 5),     -- optional parameters
 *     callCharacteristicsACDCall             ( 6),     -- optional parameters
 *     callCharacteristicsLowPriorityCall        (29),     -- optional parameters
 *     callCharacteristicsPriorityCall         ( 7),     -- optional parameters
 *     callCharacteristicsHighPriorityCall        (30),     -- optional parameters
 *     callCharacteristicsMaintenanceCall         ( 8),     -- optional parameters
 *     callCharacteristicsDirectAgent             ( 9),     -- optional parameters
 *     callCharacteristicsAssistCall             (10),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall         (11),     -- optional parameters
 *     callCharacteristicsPrivateCall             (31),     -- optional parameters
 *     callCharacteristicsPersonalCall         (32),     -- optional parameters
 *     callCharacteristicsSensitiveCall         (33),     -- optional parameters
 *     callCharacteristicsConfidentialCall         (34),     -- optional parameters
 *     callCharacteristicsEncryptedCall         (35),     -- optional parameters
 *     mediaCallCharacteristics             (12),     -- optional parameters
 *     callingConnectionInfo                 (13),     -- optional parameters
 *     flowDirectionTransmit                 (14),     -- optional parameters
 *     flowDirectionReceive                 (15),     -- optional parameters
 *     flowDirectionTransmitAndReceive         (16),     -- optional parameters
 *     flowDirectionNone                (36),     -- optional parameters
 *     numberOfChannels                 (17),     -- optional parameters
 *     mediaSessionInfo                (37),     -- optional parameters
 *     consultOptionConsultOnly             (18),     -- optional parameters
 *     consultOptionTransferOnly             (19),     -- optional parameters
 *     consultOptionConferenceOnly             (20),     -- optional parameters
 *     consultOptionUnrestricted             (21),     -- optional parameters
 *     subjectOfCall                    (38),     -- optional parameters
 *     languagePreferences                (39),     -- optional parameters
 *     privateData                     (22),     -- optional parameters
 *     initiatedCallInfoInAck                 (23),     -- optional parameters
 *     privateDataInAck                 (24),     -- optional parameters
 *     deviceIDOnly                     (25),     -- misc characteristics
 *     multiStage                     (26),     -- misc characteristics
 *     supportsAdjustmentOfMediaCharacteristics    (27),     -- misc characteristics
 *     ackModelMultiStep                 (28) }
 * ```
 */
export
type ConsultationCall = BIT_STRING;

/**
 * @summary ConsultationCall_connectionReservation
 * @constant
 */
export
const ConsultationCall_connectionReservation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary connectionReservation
 * @constant
 */
export
const connectionReservation: number = ConsultationCall_connectionReservation; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_accountCode
 * @constant
 */
export
const ConsultationCall_accountCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = ConsultationCall_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_authCode
 * @constant
 */
export
const ConsultationCall_authCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = ConsultationCall_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_correlatorData
 * @constant
 */
export
const ConsultationCall_correlatorData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = ConsultationCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_userData
 * @constant
 */
export
const ConsultationCall_userData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = ConsultationCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristics
 * @constant
 */
export
const ConsultationCall_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = ConsultationCall_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsACDCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsACDCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 */
export
const callCharacteristicsACDCall: number = ConsultationCall_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsLowPriorityCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsLowPriorityCall: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 */
export
const callCharacteristicsLowPriorityCall: number = ConsultationCall_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsPriorityCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsPriorityCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 */
export
const callCharacteristicsPriorityCall: number = ConsultationCall_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsHighPriorityCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsHighPriorityCall: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 */
export
const callCharacteristicsHighPriorityCall: number = ConsultationCall_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsMaintenanceCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsMaintenanceCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 */
export
const callCharacteristicsMaintenanceCall: number = ConsultationCall_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsDirectAgent
 * @constant
 */
export
const ConsultationCall_callCharacteristicsDirectAgent: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 */
export
const callCharacteristicsDirectAgent: number = ConsultationCall_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsAssistCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsAssistCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 */
export
const callCharacteristicsAssistCall: number = ConsultationCall_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsVoiceUnitCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const callCharacteristicsVoiceUnitCall: number = ConsultationCall_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsPrivateCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsPrivateCall: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 */
export
const callCharacteristicsPrivateCall: number = ConsultationCall_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsPersonalCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsPersonalCall: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 */
export
const callCharacteristicsPersonalCall: number = ConsultationCall_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsSensitiveCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsSensitiveCall: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 */
export
const callCharacteristicsSensitiveCall: number = ConsultationCall_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsConfidentialCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsConfidentialCall: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 */
export
const callCharacteristicsConfidentialCall: number = ConsultationCall_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsEncryptedCall
 * @constant
 */
export
const ConsultationCall_callCharacteristicsEncryptedCall: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 */
export
const callCharacteristicsEncryptedCall: number = ConsultationCall_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_mediaCallCharacteristics
 * @constant
 */
export
const ConsultationCall_mediaCallCharacteristics: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = ConsultationCall_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callingConnectionInfo
 * @constant
 */
export
const ConsultationCall_callingConnectionInfo: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callingConnectionInfo
 * @constant
 */
export
const callingConnectionInfo: number = ConsultationCall_callingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionTransmit
 * @constant
 */
export
const ConsultationCall_flowDirectionTransmit: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionTransmit
 * @constant
 */
export
const flowDirectionTransmit: number = ConsultationCall_flowDirectionTransmit; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionReceive
 * @constant
 */
export
const ConsultationCall_flowDirectionReceive: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionReceive
 * @constant
 */
export
const flowDirectionReceive: number = ConsultationCall_flowDirectionReceive; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionTransmitAndReceive
 * @constant
 */
export
const ConsultationCall_flowDirectionTransmitAndReceive: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionTransmitAndReceive
 * @constant
 */
export
const flowDirectionTransmitAndReceive: number = ConsultationCall_flowDirectionTransmitAndReceive; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionNone
 * @constant
 */
export
const ConsultationCall_flowDirectionNone: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionNone
 * @constant
 */
export
const flowDirectionNone: number = ConsultationCall_flowDirectionNone; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_numberOfChannels
 * @constant
 */
export
const ConsultationCall_numberOfChannels: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary numberOfChannels
 * @constant
 */
export
const numberOfChannels: number = ConsultationCall_numberOfChannels; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_mediaSessionInfo
 * @constant
 */
export
const ConsultationCall_mediaSessionInfo: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary mediaSessionInfo
 * @constant
 */
export
const mediaSessionInfo: number = ConsultationCall_mediaSessionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionConsultOnly
 * @constant
 */
export
const ConsultationCall_consultOptionConsultOnly: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConsultOnly
 * @constant
 */
export
const consultOptionConsultOnly: number = ConsultationCall_consultOptionConsultOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionTransferOnly
 * @constant
 */
export
const ConsultationCall_consultOptionTransferOnly: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionTransferOnly
 * @constant
 */
export
const consultOptionTransferOnly: number = ConsultationCall_consultOptionTransferOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionConferenceOnly
 * @constant
 */
export
const ConsultationCall_consultOptionConferenceOnly: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConferenceOnly
 * @constant
 */
export
const consultOptionConferenceOnly: number = ConsultationCall_consultOptionConferenceOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionUnrestricted
 * @constant
 */
export
const ConsultationCall_consultOptionUnrestricted: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionUnrestricted
 * @constant
 */
export
const consultOptionUnrestricted: number = ConsultationCall_consultOptionUnrestricted; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_subjectOfCall
 * @constant
 */
export
const ConsultationCall_subjectOfCall: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = ConsultationCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_languagePreferences
 * @constant
 */
export
const ConsultationCall_languagePreferences: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = ConsultationCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_privateData
 * @constant
 */
export
const ConsultationCall_privateData: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ConsultationCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_initiatedCallInfoInAck
 * @constant
 */
export
const ConsultationCall_initiatedCallInfoInAck: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 */
export
const initiatedCallInfoInAck: number = ConsultationCall_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_privateDataInAck
 * @constant
 */
export
const ConsultationCall_privateDataInAck: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ConsultationCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_deviceIDOnly
 * @constant
 */
export
const ConsultationCall_deviceIDOnly: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = ConsultationCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_multiStage
 * @constant
 */
export
const ConsultationCall_multiStage: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary multiStage
 * @constant
 */
export
const multiStage: number = ConsultationCall_multiStage; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_supportsAdjustmentOfMediaCharacteristics
 * @constant
 */
export
const ConsultationCall_supportsAdjustmentOfMediaCharacteristics: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary supportsAdjustmentOfMediaCharacteristics
 * @constant
 */
export
const supportsAdjustmentOfMediaCharacteristics: number = ConsultationCall_supportsAdjustmentOfMediaCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_ackModelMultiStep
 * @constant
 */
export
const ConsultationCall_ackModelMultiStep: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = ConsultationCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConsultationCall: $.ASN1Decoder<ConsultationCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsultationCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConsultationCall (el: _Element): ConsultationCall {
    if (!_cached_decoder_for_ConsultationCall) { _cached_decoder_for_ConsultationCall = $._decodeBitString; }
    return _cached_decoder_for_ConsultationCall(el);
}

let _cached_encoder_for_ConsultationCall: $.ASN1Encoder<ConsultationCall> | null = null;

/**
 * @summary Encodes a(n) ConsultationCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsultationCall, encoded as an ASN.1 Element.
 */
export
function _encode_ConsultationCall (value: ConsultationCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConsultationCall) { _cached_encoder_for_ConsultationCall = $._encodeBitString; }
    return _cached_encoder_for_ConsultationCall(value, elGetter);
}


/* eslint-enable */
