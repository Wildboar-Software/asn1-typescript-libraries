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
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_cancelFailed_ParameterType_problem {
    unknownOperation = 0,
    tooLate = 1,
    operationNotCancellable = 2,
}

/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem_unknownOperation
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_unknownOperation: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.unknownOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperation
 * @constant
 * @type {number}
 */
export
const unknownOperation: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.unknownOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_tooLate
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_tooLate: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.tooLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export
const tooLate: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_operationNotCancellable
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_operationNotCancellable: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.operationNotCancellable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationNotCancellable
 * @constant
 * @type {number}
 */
export
const operationNotCancellable: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.operationNotCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_cancelFailed_ParameterType_problem: $.ASN1Decoder<cancelFailed_ParameterType_problem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) cancelFailed_ParameterType_problem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_cancelFailed_ParameterType_problem (el: _Element): cancelFailed_ParameterType_problem {
    if (!_cached_decoder_for_cancelFailed_ParameterType_problem) { _cached_decoder_for_cancelFailed_ParameterType_problem = $._decodeEnumerated; }
    return _cached_decoder_for_cancelFailed_ParameterType_problem(el);
}

let _cached_encoder_for_cancelFailed_ParameterType_problem: $.ASN1Encoder<cancelFailed_ParameterType_problem> | null = null;

/**
 * @summary Encodes a(n) cancelFailed_ParameterType_problem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The cancelFailed_ParameterType_problem, encoded as an ASN.1 Element.
 */
export
function _encode_cancelFailed_ParameterType_problem (value: cancelFailed_ParameterType_problem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_cancelFailed_ParameterType_problem) { _cached_encoder_for_cancelFailed_ParameterType_problem = $._encodeEnumerated; }
    return _cached_encoder_for_cancelFailed_ParameterType_problem(value, elGetter);
}


/* eslint-enable */
