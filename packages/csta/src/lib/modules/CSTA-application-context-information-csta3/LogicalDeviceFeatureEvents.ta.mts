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
 * @summary LogicalDeviceFeatureEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalDeviceFeatureEvents  ::=  BIT STRING
 * {    agentBusy                         ( 0),
 *     agentLoggedOn                         ( 1),
 *     agentLoggedOff                         ( 2),
 *     agentNotReady                         ( 3),
 *     agentReady                         ( 4),
 *     agentWorkingAfterCall                     ( 5),
 *     autoAnswer                         ( 6),
 *     autoWorkMode                         ( 7),
 *     callBack                         ( 8),
 *     callBackMessage                     ( 9),
 *     callerIDStatus                         (10),
 *     doNotDisturb                         (11),
 *     forwarding                         (12),
 *     presenceState                        (14),
 *     routeingMode                         (13) }
 * ```
 */
export
type LogicalDeviceFeatureEvents = BIT_STRING;

/**
 * @summary LogicalDeviceFeatureEvents_agentBusy
 * @constant
 */
export
const LogicalDeviceFeatureEvents_agentBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentBusy
 * @constant
 */
export
const agentBusy: number = LogicalDeviceFeatureEvents_agentBusy; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_agentLoggedOn
 * @constant
 */
export
const LogicalDeviceFeatureEvents_agentLoggedOn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary agentLoggedOn
 * @constant
 */
export
const agentLoggedOn: number = LogicalDeviceFeatureEvents_agentLoggedOn; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_agentLoggedOff
 * @constant
 */
export
const LogicalDeviceFeatureEvents_agentLoggedOff: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentLoggedOff
 * @constant
 */
export
const agentLoggedOff: number = LogicalDeviceFeatureEvents_agentLoggedOff; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_agentNotReady
 * @constant
 */
export
const LogicalDeviceFeatureEvents_agentNotReady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary agentNotReady
 * @constant
 */
export
const agentNotReady: number = LogicalDeviceFeatureEvents_agentNotReady; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_agentReady
 * @constant
 */
export
const LogicalDeviceFeatureEvents_agentReady: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary agentReady
 * @constant
 */
export
const agentReady: number = LogicalDeviceFeatureEvents_agentReady; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_agentWorkingAfterCall
 * @constant
 */
export
const LogicalDeviceFeatureEvents_agentWorkingAfterCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary agentWorkingAfterCall
 * @constant
 */
export
const agentWorkingAfterCall: number = LogicalDeviceFeatureEvents_agentWorkingAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_autoAnswer
 * @constant
 */
export
const LogicalDeviceFeatureEvents_autoAnswer: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary autoAnswer
 * @constant
 */
export
const autoAnswer: number = LogicalDeviceFeatureEvents_autoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_autoWorkMode
 * @constant
 */
export
const LogicalDeviceFeatureEvents_autoWorkMode: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary autoWorkMode
 * @constant
 */
export
const autoWorkMode: number = LogicalDeviceFeatureEvents_autoWorkMode; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_callBack
 * @constant
 */
export
const LogicalDeviceFeatureEvents_callBack: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callBack
 * @constant
 */
export
const callBack: number = LogicalDeviceFeatureEvents_callBack; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_callBackMessage
 * @constant
 */
export
const LogicalDeviceFeatureEvents_callBackMessage: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callBackMessage
 * @constant
 */
export
const callBackMessage: number = LogicalDeviceFeatureEvents_callBackMessage; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_callerIDStatus
 * @constant
 */
export
const LogicalDeviceFeatureEvents_callerIDStatus: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callerIDStatus
 * @constant
 */
export
const callerIDStatus: number = LogicalDeviceFeatureEvents_callerIDStatus; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_doNotDisturb
 * @constant
 */
export
const LogicalDeviceFeatureEvents_doNotDisturb: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary doNotDisturb
 * @constant
 */
export
const doNotDisturb: number = LogicalDeviceFeatureEvents_doNotDisturb; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_forwarding
 * @constant
 */
export
const LogicalDeviceFeatureEvents_forwarding: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwarding
 * @constant
 */
export
const forwarding: number = LogicalDeviceFeatureEvents_forwarding; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_presenceState
 * @constant
 */
export
const LogicalDeviceFeatureEvents_presenceState: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary presenceState
 * @constant
 */
export
const presenceState: number = LogicalDeviceFeatureEvents_presenceState; /* SHORT_NAMED_BIT */

/**
 * @summary LogicalDeviceFeatureEvents_routeingMode
 * @constant
 */
export
const LogicalDeviceFeatureEvents_routeingMode: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary routeingMode
 * @constant
 */
export
const routeingMode: number = LogicalDeviceFeatureEvents_routeingMode; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LogicalDeviceFeatureEvents: $.ASN1Decoder<LogicalDeviceFeatureEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalDeviceFeatureEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalDeviceFeatureEvents (el: _Element): LogicalDeviceFeatureEvents {
    if (!_cached_decoder_for_LogicalDeviceFeatureEvents) { _cached_decoder_for_LogicalDeviceFeatureEvents = $._decodeBitString; }
    return _cached_decoder_for_LogicalDeviceFeatureEvents(el);
}

let _cached_encoder_for_LogicalDeviceFeatureEvents: $.ASN1Encoder<LogicalDeviceFeatureEvents> | null = null;

/**
 * @summary Encodes a(n) LogicalDeviceFeatureEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalDeviceFeatureEvents, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalDeviceFeatureEvents (value: LogicalDeviceFeatureEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalDeviceFeatureEvents) { _cached_encoder_for_LogicalDeviceFeatureEvents = $._encodeBitString; }
    return _cached_encoder_for_LogicalDeviceFeatureEvents(value, elGetter);
}


/* eslint-enable */
