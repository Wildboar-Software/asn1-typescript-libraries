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
 * @summary ALType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ALType  ::=  INTEGER { aig(0), type(1), cad(2), taskforce(3), dag(4) }
 * ```
 */
export
type ALType = INTEGER;

/**
 * @summary ALType_aig
 * @constant
 * @type {number}
 */
export
const ALType_aig: ALType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_aig
 * @constant
 * @type {number}
 */
export
const aig: ALType = ALType_aig; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_type_
 * @constant
 * @type {number}
 */
export
const ALType_type_: ALType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_type_
 * @constant
 * @type {number}
 */
export
const type_: ALType = ALType_type_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_cad
 * @constant
 * @type {number}
 */
export
const ALType_cad: ALType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_cad
 * @constant
 * @type {number}
 */
export
const cad: ALType = ALType_cad; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_taskforce
 * @constant
 * @type {number}
 */
export
const ALType_taskforce: ALType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_taskforce
 * @constant
 * @type {number}
 */
export
const taskforce: ALType = ALType_taskforce; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_dag
 * @constant
 * @type {number}
 */
export
const ALType_dag: ALType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_dag
 * @constant
 * @type {number}
 */
export
const dag: ALType = ALType_dag; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ALType: $.ASN1Decoder<ALType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ALType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ALType (el: _Element): ALType {
    if (!_cached_decoder_for_ALType) { _cached_decoder_for_ALType = $._decodeInteger; }
    return _cached_decoder_for_ALType(el);
}

let _cached_encoder_for_ALType: $.ASN1Encoder<ALType> | null = null;

/**
 * @summary Encodes a(n) ALType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ALType, encoded as an ASN.1 Element.
 */
export
function _encode_ALType (value: ALType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ALType) { _cached_encoder_for_ALType = $._encodeInteger; }
    return _cached_encoder_for_ALType(value, elGetter);
}


/* eslint-enable */
