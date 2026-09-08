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
 * @summary MonitorStart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorStart  ::=  BIT STRING
 * {     monitorObjectDevice             ( 0),     -- optional parameters
 *     monitorObjectCall             ( 1),     -- optional parameters
 *     requestedMonitorFilter             ( 2),     -- optional parameters
 *     monitorTypeCall             ( 3),     -- optional parameters
 *     monitorTypeDevice             ( 4),     -- optional parameters
 *     monitorMediaClassParameter         ( 5),     -- optional parameters
 *     monitorMediaClassAudio             ( 6),     -- optional parameters
 *     monitorMediaClassData             ( 7),     -- optional parameters
 *     monitorMediaClassImage             ( 8),     -- optional parameters
 *     monitorMediaClassVoice             ( 9),     -- optional parameters
 *     monitorMediaClassChat            (15),     -- optional parameters
 *     monitorMediaClassEmail            (16),     -- optional parameters
 *     monitorMediaClassMessage        (17),     -- optional parameters
 *     monitorMediaClassIM            (18),     -- optional parameters
 *     monitorMediaClassSMS            (19),     -- optional parameters
 *     monitorMediaClassMMS            (20),     -- optional parameters
 *     monitorExistingCallsInAck         (10),     -- optional parameters
 *     privateDataInAck             (11),     -- optional parameters
 *     callIDOnly                 (12),     -- miscellaneous characteristics
 *     swDomainDefaultForMonitorTypeIsDevice     (13),     -- miscellaneous characteristics
 *     acceptsMonitorStartWhileOOS         (14) }
 * ```
 */
export
type MonitorStart = BIT_STRING;

/**
 * @summary MonitorStart_monitorObjectDevice
 * @constant
 */
export
const MonitorStart_monitorObjectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary monitorObjectDevice
 * @constant
 */
export
const monitorObjectDevice: number = MonitorStart_monitorObjectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorObjectCall
 * @constant
 */
export
const MonitorStart_monitorObjectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary monitorObjectCall
 * @constant
 */
export
const monitorObjectCall: number = MonitorStart_monitorObjectCall; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_requestedMonitorFilter
 * @constant
 */
export
const MonitorStart_requestedMonitorFilter: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorFilter
 * @constant
 */
export
const requestedMonitorFilter: number = MonitorStart_requestedMonitorFilter; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorTypeCall
 * @constant
 */
export
const MonitorStart_monitorTypeCall: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary monitorTypeCall
 * @constant
 */
export
const monitorTypeCall: number = MonitorStart_monitorTypeCall; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorTypeDevice
 * @constant
 */
export
const MonitorStart_monitorTypeDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary monitorTypeDevice
 * @constant
 */
export
const monitorTypeDevice: number = MonitorStart_monitorTypeDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassParameter
 * @constant
 */
export
const MonitorStart_monitorMediaClassParameter: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassParameter
 * @constant
 */
export
const monitorMediaClassParameter: number = MonitorStart_monitorMediaClassParameter; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassAudio
 * @constant
 */
export
const MonitorStart_monitorMediaClassAudio: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassAudio
 * @constant
 */
export
const monitorMediaClassAudio: number = MonitorStart_monitorMediaClassAudio; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassData
 * @constant
 */
export
const MonitorStart_monitorMediaClassData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassData
 * @constant
 */
export
const monitorMediaClassData: number = MonitorStart_monitorMediaClassData; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassImage
 * @constant
 */
export
const MonitorStart_monitorMediaClassImage: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassImage
 * @constant
 */
export
const monitorMediaClassImage: number = MonitorStart_monitorMediaClassImage; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassVoice
 * @constant
 */
export
const MonitorStart_monitorMediaClassVoice: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassVoice
 * @constant
 */
export
const monitorMediaClassVoice: number = MonitorStart_monitorMediaClassVoice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassChat
 * @constant
 */
export
const MonitorStart_monitorMediaClassChat: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassChat
 * @constant
 */
export
const monitorMediaClassChat: number = MonitorStart_monitorMediaClassChat; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassEmail
 * @constant
 */
export
const MonitorStart_monitorMediaClassEmail: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassEmail
 * @constant
 */
export
const monitorMediaClassEmail: number = MonitorStart_monitorMediaClassEmail; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassMessage
 * @constant
 */
export
const MonitorStart_monitorMediaClassMessage: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassMessage
 * @constant
 */
export
const monitorMediaClassMessage: number = MonitorStart_monitorMediaClassMessage; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassIM
 * @constant
 */
export
const MonitorStart_monitorMediaClassIM: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassIM
 * @constant
 */
export
const monitorMediaClassIM: number = MonitorStart_monitorMediaClassIM; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassSMS
 * @constant
 */
export
const MonitorStart_monitorMediaClassSMS: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassSMS
 * @constant
 */
export
const monitorMediaClassSMS: number = MonitorStart_monitorMediaClassSMS; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassMMS
 * @constant
 */
export
const MonitorStart_monitorMediaClassMMS: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassMMS
 * @constant
 */
export
const monitorMediaClassMMS: number = MonitorStart_monitorMediaClassMMS; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorExistingCallsInAck
 * @constant
 */
export
const MonitorStart_monitorExistingCallsInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary monitorExistingCallsInAck
 * @constant
 */
export
const monitorExistingCallsInAck: number = MonitorStart_monitorExistingCallsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_privateDataInAck
 * @constant
 */
export
const MonitorStart_privateDataInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = MonitorStart_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_callIDOnly
 * @constant
 */
export
const MonitorStart_callIDOnly: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 */
export
const callIDOnly: number = MonitorStart_callIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_swDomainDefaultForMonitorTypeIsDevice
 * @constant
 */
export
const MonitorStart_swDomainDefaultForMonitorTypeIsDevice: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary swDomainDefaultForMonitorTypeIsDevice
 * @constant
 */
export
const swDomainDefaultForMonitorTypeIsDevice: number = MonitorStart_swDomainDefaultForMonitorTypeIsDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_acceptsMonitorStartWhileOOS
 * @constant
 */
export
const MonitorStart_acceptsMonitorStartWhileOOS: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary acceptsMonitorStartWhileOOS
 * @constant
 */
export
const acceptsMonitorStartWhileOOS: number = MonitorStart_acceptsMonitorStartWhileOOS; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MonitorStart: $.ASN1Decoder<MonitorStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorStart (el: _Element): MonitorStart {
    if (!_cached_decoder_for_MonitorStart) { _cached_decoder_for_MonitorStart = $._decodeBitString; }
    return _cached_decoder_for_MonitorStart(el);
}

let _cached_encoder_for_MonitorStart: $.ASN1Encoder<MonitorStart> | null = null;

/**
 * @summary Encodes a(n) MonitorStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorStart, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorStart (value: MonitorStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorStart) { _cached_encoder_for_MonitorStart = $._encodeBitString; }
    return _cached_encoder_for_MonitorStart(value, elGetter);
}


/* eslint-enable */
