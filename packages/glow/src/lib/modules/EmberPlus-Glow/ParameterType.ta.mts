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
 * @summary ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterType  ::= 
 *     INTEGER {
 *         null    (0),
 *         integer (1),
 *         real    (2),
 *         string  (3),
 *         boolean (4),
 *         trigger (5),
 *         enum    (6),
 *         octets  (7)
 *     }
 * ```
 */
export
type ParameterType = INTEGER;

/**
 * @summary ParameterType_null_
 * @constant
 * @type {number}
 */
export
const ParameterType_null_: ParameterType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_null_
 * @constant
 * @type {number}
 */
export
const null_: ParameterType = ParameterType_null_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_integer
 * @constant
 * @type {number}
 */
export
const ParameterType_integer: ParameterType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_integer
 * @constant
 * @type {number}
 */
export
const integer: ParameterType = ParameterType_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_real
 * @constant
 * @type {number}
 */
export
const ParameterType_real: ParameterType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_real
 * @constant
 * @type {number}
 */
export
const real: ParameterType = ParameterType_real; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_string_
 * @constant
 * @type {number}
 */
export
const ParameterType_string_: ParameterType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_string_
 * @constant
 * @type {number}
 */
export
const string_: ParameterType = ParameterType_string_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_boolean_
 * @constant
 * @type {number}
 */
export
const ParameterType_boolean_: ParameterType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_boolean_
 * @constant
 * @type {number}
 */
export
const boolean_: ParameterType = ParameterType_boolean_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_trigger
 * @constant
 * @type {number}
 */
export
const ParameterType_trigger: ParameterType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_trigger
 * @constant
 * @type {number}
 */
export
const trigger: ParameterType = ParameterType_trigger; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_enum_
 * @constant
 * @type {number}
 */
export
const ParameterType_enum_: ParameterType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_enum_
 * @constant
 * @type {number}
 */
export
const enum_: ParameterType = ParameterType_enum_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_octets
 * @constant
 * @type {number}
 */
export
const ParameterType_octets: ParameterType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_octets
 * @constant
 * @type {number}
 */
export
const octets: ParameterType = ParameterType_octets; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterType: $.ASN1Decoder<ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterType (el: _Element): ParameterType {
    if (!_cached_decoder_for_ParameterType) { _cached_decoder_for_ParameterType = $._decodeInteger; }
    return _cached_decoder_for_ParameterType(el);
}

let _cached_encoder_for_ParameterType: $.ASN1Encoder<ParameterType> | null = null;

/**
 * @summary Encodes a(n) ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterType (value: ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterType) { _cached_encoder_for_ParameterType = $._encodeInteger; }
    return _cached_encoder_for_ParameterType(value, elGetter);
}


/* eslint-enable */
