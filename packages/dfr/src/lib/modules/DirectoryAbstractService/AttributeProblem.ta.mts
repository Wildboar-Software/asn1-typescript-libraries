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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeProblem  ::=  INTEGER {
 *   noSuchAttributeOrValue        (1),
 *   invalidAttributeSyntax        (2),
 *   undefinedAttributeType        (3),
 *   inappropriateMatching         (4),
 *   constraintViolation           (5),
 *   attributeOrValueAlreadyExists (6),
 *   contextViolation              (7) }
 * ```
 */
export
type AttributeProblem = INTEGER;

/**
 * @summary AttributeProblem_noSuchAttributeOrValue
 * @constant
 * @type {number}
 */
export
const AttributeProblem_noSuchAttributeOrValue: AttributeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_noSuchAttributeOrValue
 * @constant
 * @type {number}
 */
export
const noSuchAttributeOrValue: AttributeProblem = AttributeProblem_noSuchAttributeOrValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export
const AttributeProblem_invalidAttributeSyntax: AttributeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export
const invalidAttributeSyntax: AttributeProblem = AttributeProblem_invalidAttributeSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_undefinedAttributeType
 * @constant
 * @type {number}
 */
export
const AttributeProblem_undefinedAttributeType: AttributeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_undefinedAttributeType
 * @constant
 * @type {number}
 */
export
const undefinedAttributeType: AttributeProblem = AttributeProblem_undefinedAttributeType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriateMatching
 * @constant
 * @type {number}
 */
export
const AttributeProblem_inappropriateMatching: AttributeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriateMatching
 * @constant
 * @type {number}
 */
export
const inappropriateMatching: AttributeProblem = AttributeProblem_inappropriateMatching; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_constraintViolation
 * @constant
 * @type {number}
 */
export
const AttributeProblem_constraintViolation: AttributeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_constraintViolation
 * @constant
 * @type {number}
 */
export
const constraintViolation: AttributeProblem = AttributeProblem_constraintViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @constant
 * @type {number}
 */
export
const AttributeProblem_attributeOrValueAlreadyExists: AttributeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @constant
 * @type {number}
 */
export
const attributeOrValueAlreadyExists: AttributeProblem = AttributeProblem_attributeOrValueAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_contextViolation
 * @constant
 * @type {number}
 */
export
const AttributeProblem_contextViolation: AttributeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_contextViolation
 * @constant
 * @type {number}
 */
export
const contextViolation: AttributeProblem = AttributeProblem_contextViolation; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AttributeProblem: $.ASN1Decoder<AttributeProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeProblem (el: _Element): AttributeProblem {
    if (!_cached_decoder_for_AttributeProblem) { _cached_decoder_for_AttributeProblem = $._decodeInteger; }
    return _cached_decoder_for_AttributeProblem(el);
}

let _cached_encoder_for_AttributeProblem: $.ASN1Encoder<AttributeProblem> | null = null;

/**
 * @summary Encodes a(n) AttributeProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeProblem, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeProblem (value: AttributeProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeProblem) { _cached_encoder_for_AttributeProblem = $._encodeInteger; }
    return _cached_encoder_for_AttributeProblem(value, elGetter);
}


/* eslint-enable */
