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
 * @summary RecordMsg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordMsg  ::=  BIT STRING
 * {     resource                (13),     -- optional parameters
 *     samplingRate                 ( 0),     -- optional parameters
 *     encodingAlgorithmADPCM6K         ( 1),     -- optional parameters
 *     encodingAlgorithmADPCM8K         ( 2),     -- optional parameters
 *     encodingAlgorithmMuLawPCM6K         ( 3),     -- optional parameters
 *     encodingAlgorithmALawPCM6K         ( 4),     -- optional parameters
 *     maxDuration                 ( 5),     -- optional parameters
 *     terminationParameter             ( 6),     -- optional parameters
 *     terminationDurationExceeded         ( 7),     -- optional parameters
 *     terminationDTMFDigitDetected         ( 8),     -- optional parameters
 *     terminationEndOfDataDetected         ( 9),     -- optional parameters
 *     terminationSpeechDetected         (10),     -- optional parameters
 *     privateData                 (11),     -- optional parameters
 *     privateDataInAck             (12) }
 * ```
 */
export
type RecordMsg = BIT_STRING;

/**
 * @summary RecordMsg_resource
 * @constant
 */
export
const RecordMsg_resource: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = RecordMsg_resource; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_samplingRate
 * @constant
 */
export
const RecordMsg_samplingRate: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary samplingRate
 * @constant
 */
export
const samplingRate: number = RecordMsg_samplingRate; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmADPCM6K
 * @constant
 */
export
const RecordMsg_encodingAlgorithmADPCM6K: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmADPCM6K
 * @constant
 */
export
const encodingAlgorithmADPCM6K: number = RecordMsg_encodingAlgorithmADPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmADPCM8K
 * @constant
 */
export
const RecordMsg_encodingAlgorithmADPCM8K: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmADPCM8K
 * @constant
 */
export
const encodingAlgorithmADPCM8K: number = RecordMsg_encodingAlgorithmADPCM8K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmMuLawPCM6K
 * @constant
 */
export
const RecordMsg_encodingAlgorithmMuLawPCM6K: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmMuLawPCM6K
 * @constant
 */
export
const encodingAlgorithmMuLawPCM6K: number = RecordMsg_encodingAlgorithmMuLawPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmALawPCM6K
 * @constant
 */
export
const RecordMsg_encodingAlgorithmALawPCM6K: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmALawPCM6K
 * @constant
 */
export
const encodingAlgorithmALawPCM6K: number = RecordMsg_encodingAlgorithmALawPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_maxDuration
 * @constant
 */
export
const RecordMsg_maxDuration: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary maxDuration
 * @constant
 */
export
const maxDuration: number = RecordMsg_maxDuration; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationParameter
 * @constant
 */
export
const RecordMsg_terminationParameter: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary terminationParameter
 * @constant
 */
export
const terminationParameter: number = RecordMsg_terminationParameter; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationDurationExceeded
 * @constant
 */
export
const RecordMsg_terminationDurationExceeded: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary terminationDurationExceeded
 * @constant
 */
export
const terminationDurationExceeded: number = RecordMsg_terminationDurationExceeded; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationDTMFDigitDetected
 * @constant
 */
export
const RecordMsg_terminationDTMFDigitDetected: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary terminationDTMFDigitDetected
 * @constant
 */
export
const terminationDTMFDigitDetected: number = RecordMsg_terminationDTMFDigitDetected; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationEndOfDataDetected
 * @constant
 */
export
const RecordMsg_terminationEndOfDataDetected: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary terminationEndOfDataDetected
 * @constant
 */
export
const terminationEndOfDataDetected: number = RecordMsg_terminationEndOfDataDetected; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationSpeechDetected
 * @constant
 */
export
const RecordMsg_terminationSpeechDetected: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary terminationSpeechDetected
 * @constant
 */
export
const terminationSpeechDetected: number = RecordMsg_terminationSpeechDetected; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_privateData
 * @constant
 */
export
const RecordMsg_privateData: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RecordMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_privateDataInAck
 * @constant
 */
export
const RecordMsg_privateDataInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = RecordMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RecordMsg: $.ASN1Decoder<RecordMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordMsg (el: _Element): RecordMsg {
    if (!_cached_decoder_for_RecordMsg) { _cached_decoder_for_RecordMsg = $._decodeBitString; }
    return _cached_decoder_for_RecordMsg(el);
}

let _cached_encoder_for_RecordMsg: $.ASN1Encoder<RecordMsg> | null = null;

/**
 * @summary Encodes a(n) RecordMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordMsg, encoded as an ASN.1 Element.
 */
export
function _encode_RecordMsg (value: RecordMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordMsg) { _cached_encoder_for_RecordMsg = $._encodeBitString; }
    return _cached_encoder_for_RecordMsg(value, elGetter);
}


/* eslint-enable */
