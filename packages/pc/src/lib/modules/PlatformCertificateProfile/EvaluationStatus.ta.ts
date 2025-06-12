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



/* START_OF_SYMBOL_DEFINITION _enum_for_EvaluationStatus */
/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```@enum {number}
 */
export
enum _enum_for_EvaluationStatus {
    designedToMeet = 0,
    evaluationInProgress = 1,
    evaluationCompleted = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus */
/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```@enum {number}
 */
export
type EvaluationStatus = _enum_for_EvaluationStatus;
/* END_OF_SYMBOL_DEFINITION EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus */
/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```@enum {number}
 */
export
const EvaluationStatus = _enum_for_EvaluationStatus;
/* END_OF_SYMBOL_DEFINITION EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus_designedToMeet */
/**
 * @summary EvaluationStatus_designedToMeet
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationStatus_designedToMeet */

/* START_OF_SYMBOL_DEFINITION designedToMeet */
/**
 * @summary designedToMeet
 * @constant
 * @type {number}
 */
export
const designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION designedToMeet */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationInProgress */
/**
 * @summary EvaluationStatus_evaluationInProgress
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationInProgress */

/* START_OF_SYMBOL_DEFINITION evaluationInProgress */
/**
 * @summary evaluationInProgress
 * @constant
 * @type {number}
 */
export
const evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION evaluationInProgress */

/* START_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationCompleted */
/**
 * @summary EvaluationStatus_evaluationCompleted
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationStatus_evaluationCompleted */

/* START_OF_SYMBOL_DEFINITION evaluationCompleted */
/**
 * @summary evaluationCompleted
 * @constant
 * @type {number}
 */
export
const evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION evaluationCompleted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationStatus */
let _cached_decoder_for_EvaluationStatus: $.ASN1Decoder<EvaluationStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_EvaluationStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) EvaluationStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EvaluationStatus} The decoded data structure.
 */
export
function _decode_EvaluationStatus (el: _Element) {
    if (!_cached_decoder_for_EvaluationStatus) { _cached_decoder_for_EvaluationStatus = $._decodeEnumerated; }
    return _cached_decoder_for_EvaluationStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationStatus */
let _cached_encoder_for_EvaluationStatus: $.ASN1Encoder<EvaluationStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_EvaluationStatus */
/**
 * @summary Encodes a(n) EvaluationStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvaluationStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EvaluationStatus (value: EvaluationStatus, elGetter: $.ASN1Encoder<EvaluationStatus>) {
    if (!_cached_encoder_for_EvaluationStatus) { _cached_encoder_for_EvaluationStatus = $._encodeEnumerated; }
    return _cached_encoder_for_EvaluationStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EvaluationStatus */

/* eslint-enable */
