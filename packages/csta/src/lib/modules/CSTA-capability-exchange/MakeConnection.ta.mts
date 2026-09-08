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
 * @summary MakeConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakeConnection  ::=  BIT STRING
 * {     null                     ( 0),     -- initials states
 *     accountCode                 ( 1),     -- optional parameters
 *     authCode                 ( 2),     -- optional parameters
 *     autoOriginatePrompt             ( 3),     -- optional parameters
 *     autoOriginateDoNotPrompt         ( 4),     -- optional parameters
 *     correlatorData                 ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     callCharacteristicsACDCall         ( 7),     -- optional parameters
 *     callCharacteristicsLowPriorityCall     ( 8),     -- optional parameters
 *     callCharacteristicsPriorityCall     ( 9),     -- optional parameters
 *     callCharacteristicsHighPriorityCall     (10),     -- optional parameters
 *     callCharacteristicsMaintenanceCall     (11),     -- optional parameters
 *     callCharacteristicsDirectAgent         (12),     -- optional parameters
 *     callCharacteristicsAssistCall         (13),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall     (14),     -- optional parameters
 *     callCharacteristicsPrivateCall         (15),     -- optional parameters
 *     callCharacteristicsPersonalCall     (16),     -- optional parameters
 *     callCharacteristicsSensitiveCall     (17),     -- optional parameters
 *     callCharacteristicsConfidentialCall    (18),     -- optional parameters
 *     callCharacteristicsEncryptedCall    (19),     -- optional parameters
 *     mediaCallCharacteristics         (20),     -- optional parameters
 *     connectionInfo                 (21),     -- optional parameters
 *     subjectOfCall                (22),     -- optional parameters
 *     languagePreferences            (23),     -- optional parameters
 *     reason                    (24),     -- optional parameters
 *     maxDevices                (25),     -- optional parameters
 *     startTime                (26),     -- optional parameters
 *     duration                (27),     -- optional parameters
 *     privateData                (28),     -- optional parameters
 *     mediaCharacteristicsinAck        (29),     -- optional parameters
 *     initiatedCallInfoInAck            (30),     -- optional parameters
 *     privateDataInAck            (31),     -- optional parameters
 *     supportsPrompting            (32),     -- optional parameters
 *     promptingMode                (33),     -- optional parameters
 *     mediaCharacteristicsAdjusted        (34),     -- optional parameters
 *     ackModelMultistep            (35) }
 * ```
 */
export
type MakeConnection = BIT_STRING;

/**
 * @summary MakeConnection_null_
 * @constant
 */
export
const MakeConnection_null_: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary null_
 * @constant
 */
export
const null_: number = MakeConnection_null_; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_accountCode
 * @constant
 */
export
const MakeConnection_accountCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = MakeConnection_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_authCode
 * @constant
 */
export
const MakeConnection_authCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = MakeConnection_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_autoOriginatePrompt
 * @constant
 */
export
const MakeConnection_autoOriginatePrompt: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginatePrompt
 * @constant
 */
export
const autoOriginatePrompt: number = MakeConnection_autoOriginatePrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_autoOriginateDoNotPrompt
 * @constant
 */
export
const MakeConnection_autoOriginateDoNotPrompt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginateDoNotPrompt
 * @constant
 */
export
const autoOriginateDoNotPrompt: number = MakeConnection_autoOriginateDoNotPrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_correlatorData
 * @constant
 */
export
const MakeConnection_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = MakeConnection_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristics
 * @constant
 */
export
const MakeConnection_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = MakeConnection_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsACDCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsACDCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 */
export
const callCharacteristicsACDCall: number = MakeConnection_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsLowPriorityCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsLowPriorityCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 */
export
const callCharacteristicsLowPriorityCall: number = MakeConnection_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsPriorityCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsPriorityCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 */
export
const callCharacteristicsPriorityCall: number = MakeConnection_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsHighPriorityCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsHighPriorityCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 */
export
const callCharacteristicsHighPriorityCall: number = MakeConnection_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsMaintenanceCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsMaintenanceCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 */
export
const callCharacteristicsMaintenanceCall: number = MakeConnection_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsDirectAgent
 * @constant
 */
export
const MakeConnection_callCharacteristicsDirectAgent: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 */
export
const callCharacteristicsDirectAgent: number = MakeConnection_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsAssistCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsAssistCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 */
export
const callCharacteristicsAssistCall: number = MakeConnection_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsVoiceUnitCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const callCharacteristicsVoiceUnitCall: number = MakeConnection_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsPrivateCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsPrivateCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 */
export
const callCharacteristicsPrivateCall: number = MakeConnection_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsPersonalCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsPersonalCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 */
export
const callCharacteristicsPersonalCall: number = MakeConnection_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsSensitiveCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsSensitiveCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 */
export
const callCharacteristicsSensitiveCall: number = MakeConnection_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsConfidentialCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsConfidentialCall: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 */
export
const callCharacteristicsConfidentialCall: number = MakeConnection_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsEncryptedCall
 * @constant
 */
export
const MakeConnection_callCharacteristicsEncryptedCall: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 */
export
const callCharacteristicsEncryptedCall: number = MakeConnection_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_mediaCallCharacteristics
 * @constant
 */
export
const MakeConnection_mediaCallCharacteristics: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = MakeConnection_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_connectionInfo
 * @constant
 */
export
const MakeConnection_connectionInfo: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = MakeConnection_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_subjectOfCall
 * @constant
 */
export
const MakeConnection_subjectOfCall: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = MakeConnection_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_languagePreferences
 * @constant
 */
export
const MakeConnection_languagePreferences: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = MakeConnection_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_reason
 * @constant
 */
export
const MakeConnection_reason: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 */
export
const reason: number = MakeConnection_reason; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_maxDevices
 * @constant
 */
export
const MakeConnection_maxDevices: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary maxDevices
 * @constant
 */
export
const maxDevices: number = MakeConnection_maxDevices; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_startTime
 * @constant
 */
export
const MakeConnection_startTime: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary startTime
 * @constant
 */
export
const startTime: number = MakeConnection_startTime; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_duration
 * @constant
 */
export
const MakeConnection_duration: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary duration
 * @constant
 */
export
const duration: number = MakeConnection_duration; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_privateData
 * @constant
 */
export
const MakeConnection_privateData: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = MakeConnection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_mediaCharacteristicsinAck
 * @constant
 */
export
const MakeConnection_mediaCharacteristicsinAck: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary mediaCharacteristicsinAck
 * @constant
 */
export
const mediaCharacteristicsinAck: number = MakeConnection_mediaCharacteristicsinAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_initiatedCallInfoInAck
 * @constant
 */
export
const MakeConnection_initiatedCallInfoInAck: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 */
export
const initiatedCallInfoInAck: number = MakeConnection_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_privateDataInAck
 * @constant
 */
export
const MakeConnection_privateDataInAck: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = MakeConnection_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_supportsPrompting
 * @constant
 */
export
const MakeConnection_supportsPrompting: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 */
export
const supportsPrompting: number = MakeConnection_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_promptingMode
 * @constant
 */
export
const MakeConnection_promptingMode: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 */
export
const promptingMode: number = MakeConnection_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_mediaCharacteristicsAdjusted
 * @constant
 */
export
const MakeConnection_mediaCharacteristicsAdjusted: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary mediaCharacteristicsAdjusted
 * @constant
 */
export
const mediaCharacteristicsAdjusted: number = MakeConnection_mediaCharacteristicsAdjusted; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_ackModelMultistep
 * @constant
 */
export
const MakeConnection_ackModelMultistep: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultistep
 * @constant
 */
export
const ackModelMultistep: number = MakeConnection_ackModelMultistep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MakeConnection: $.ASN1Decoder<MakeConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeConnection (el: _Element): MakeConnection {
    if (!_cached_decoder_for_MakeConnection) { _cached_decoder_for_MakeConnection = $._decodeBitString; }
    return _cached_decoder_for_MakeConnection(el);
}

let _cached_encoder_for_MakeConnection: $.ASN1Encoder<MakeConnection> | null = null;

/**
 * @summary Encodes a(n) MakeConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeConnection, encoded as an ASN.1 Element.
 */
export
function _encode_MakeConnection (value: MakeConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeConnection) { _cached_encoder_for_MakeConnection = $._encodeBitString; }
    return _cached_encoder_for_MakeConnection(value, elGetter);
}


/* eslint-enable */
