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
 * @summary GeneralProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedComponent(0), mistypedComponent(1), badlyStructuredComponent(2)
 * }
 * ```
 */
export
type GeneralProblem = INTEGER;

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_unrecognizedComponent: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @constant
 * @type {number}
 */
export
const unrecognizedComponent: GeneralProblem = GeneralProblem_unrecognizedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_mistypedComponent: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @constant
 * @type {number}
 */
export
const mistypedComponent: GeneralProblem = GeneralProblem_mistypedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_badlyStructuredComponent: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @constant
 * @type {number}
 */
export
const badlyStructuredComponent: GeneralProblem = GeneralProblem_badlyStructuredComponent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GeneralProblem: $.ASN1Decoder<GeneralProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralProblem (el: _Element): GeneralProblem {
    if (!_cached_decoder_for_GeneralProblem) { _cached_decoder_for_GeneralProblem = $._decodeInteger; }
    return _cached_decoder_for_GeneralProblem(el);
}

let _cached_encoder_for_GeneralProblem: $.ASN1Encoder<GeneralProblem> | null = null;

/**
 * @summary Encodes a(n) GeneralProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralProblem, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralProblem (value: GeneralProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralProblem) { _cached_encoder_for_GeneralProblem = $._encodeInteger; }
    return _cached_encoder_for_GeneralProblem(value, elGetter);
}


/* eslint-enable */
