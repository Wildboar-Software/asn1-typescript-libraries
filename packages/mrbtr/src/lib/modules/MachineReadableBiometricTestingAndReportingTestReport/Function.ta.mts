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



export
enum _enum_for_Function {
    acquisition = 1,
    enrolment = 2,
    verification = 3,
    identification = 4,
}

/**
 * @summary Function
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Function  ::=  ENUMERATED {
 *     acquisition     (1),
 *     enrolment       (2),
 *     verification    (3),
 *     identification  (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Function = _enum_for_Function | ENUMERATED;

/**
 * @summary Function_acquisition
 * @constant
 * @type {number}
 */
export
const Function_acquisition: Function = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acquisition
 * @constant
 * @type {number}
 */
export
const acquisition: Function = Function_acquisition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Function_enrolment
 * @constant
 * @type {number}
 */
export
const Function_enrolment: Function = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enrolment
 * @constant
 * @type {number}
 */
export
const enrolment: Function = Function_enrolment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Function_verification
 * @constant
 * @type {number}
 */
export
const Function_verification: Function = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verification
 * @constant
 * @type {number}
 */
export
const verification: Function = Function_verification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Function_identification
 * @constant
 * @type {number}
 */
export
const Function_identification: Function = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identification
 * @constant
 * @type {number}
 */
export
const identification: Function = Function_identification; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Function: $.ASN1Decoder<Function> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Function
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Function (el: _Element): Function {
    if (!_cached_decoder_for_Function) { _cached_decoder_for_Function = $._decodeEnumerated; }
    return _cached_decoder_for_Function(el);
}

let _cached_encoder_for_Function: $.ASN1Encoder<Function> | null = null;

/**
 * @summary Encodes a(n) Function into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Function, encoded as an ASN.1 Element.
 */
export
function _encode_Function (value: Function, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Function) { _cached_encoder_for_Function = $._encodeEnumerated; }
    return _cached_encoder_for_Function(value, elGetter);
}


/* eslint-enable */
