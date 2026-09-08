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
 * @summary CallCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallCharacteristics  ::=  BIT STRING
 * {     acdCall                     ( 0),
 *     lowPriorityCall                    (11),
 *     priorityCall                     ( 1),
 *     highPriorityCall                (12),
 *     maintainanceCall                 ( 2),
 *     directAgent                     ( 3),
 *     assistCall                     ( 4),
 *     voiceUnitCall                     ( 5),
 *     privateCall                    ( 6),
 *     personalCall                    ( 7),
 *     sensitiveCall                    ( 8),
 *     confidentialCall                ( 9),
 *     encryptedCall                    (10) }
 * ```
 */
export
type CallCharacteristics = BIT_STRING;

/**
 * @summary CallCharacteristics_acdCall
 * @constant
 */
export
const CallCharacteristics_acdCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acdCall
 * @constant
 */
export
const acdCall: number = CallCharacteristics_acdCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_lowPriorityCall
 * @constant
 */
export
const CallCharacteristics_lowPriorityCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary lowPriorityCall
 * @constant
 */
export
const lowPriorityCall: number = CallCharacteristics_lowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_priorityCall
 * @constant
 */
export
const CallCharacteristics_priorityCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary priorityCall
 * @constant
 */
export
const priorityCall: number = CallCharacteristics_priorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_highPriorityCall
 * @constant
 */
export
const CallCharacteristics_highPriorityCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary highPriorityCall
 * @constant
 */
export
const highPriorityCall: number = CallCharacteristics_highPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_maintainanceCall
 * @constant
 */
export
const CallCharacteristics_maintainanceCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary maintainanceCall
 * @constant
 */
export
const maintainanceCall: number = CallCharacteristics_maintainanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_directAgent
 * @constant
 */
export
const CallCharacteristics_directAgent: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary directAgent
 * @constant
 */
export
const directAgent: number = CallCharacteristics_directAgent; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_assistCall
 * @constant
 */
export
const CallCharacteristics_assistCall: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary assistCall
 * @constant
 */
export
const assistCall: number = CallCharacteristics_assistCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_voiceUnitCall
 * @constant
 */
export
const CallCharacteristics_voiceUnitCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary voiceUnitCall
 * @constant
 */
export
const voiceUnitCall: number = CallCharacteristics_voiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_privateCall
 * @constant
 */
export
const CallCharacteristics_privateCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateCall
 * @constant
 */
export
const privateCall: number = CallCharacteristics_privateCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_personalCall
 * @constant
 */
export
const CallCharacteristics_personalCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary personalCall
 * @constant
 */
export
const personalCall: number = CallCharacteristics_personalCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_sensitiveCall
 * @constant
 */
export
const CallCharacteristics_sensitiveCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary sensitiveCall
 * @constant
 */
export
const sensitiveCall: number = CallCharacteristics_sensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_confidentialCall
 * @constant
 */
export
const CallCharacteristics_confidentialCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary confidentialCall
 * @constant
 */
export
const confidentialCall: number = CallCharacteristics_confidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_encryptedCall
 * @constant
 */
export
const CallCharacteristics_encryptedCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary encryptedCall
 * @constant
 */
export
const encryptedCall: number = CallCharacteristics_encryptedCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallCharacteristics: $.ASN1Decoder<CallCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallCharacteristics (el: _Element): CallCharacteristics {
    if (!_cached_decoder_for_CallCharacteristics) { _cached_decoder_for_CallCharacteristics = $._decodeBitString; }
    return _cached_decoder_for_CallCharacteristics(el);
}

let _cached_encoder_for_CallCharacteristics: $.ASN1Encoder<CallCharacteristics> | null = null;

/**
 * @summary Encodes a(n) CallCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_CallCharacteristics (value: CallCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallCharacteristics) { _cached_encoder_for_CallCharacteristics = $._encodeBitString; }
    return _cached_encoder_for_CallCharacteristics(value, elGetter);
}


/* eslint-enable */
