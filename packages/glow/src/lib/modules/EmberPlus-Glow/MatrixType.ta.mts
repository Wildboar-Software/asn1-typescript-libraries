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
 * @summary MatrixType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MatrixType  ::= 
 *     INTEGER {
 *         oneToN   (0),  -- default
 *         oneToOne (1),
 *         nToN     (2)
 *     }
 * ```
 */
export
type MatrixType = INTEGER;

/**
 * @summary MatrixType_oneToN
 * @constant
 * @type {number}
 */
export
const MatrixType_oneToN: MatrixType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixType_oneToN
 * @constant
 * @type {number}
 */
export
const oneToN: MatrixType = MatrixType_oneToN; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixType_oneToOne
 * @constant
 * @type {number}
 */
export
const MatrixType_oneToOne: MatrixType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixType_oneToOne
 * @constant
 * @type {number}
 */
export
const oneToOne: MatrixType = MatrixType_oneToOne; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixType_nToN
 * @constant
 * @type {number}
 */
export
const MatrixType_nToN: MatrixType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixType_nToN
 * @constant
 * @type {number}
 */
export
const nToN: MatrixType = MatrixType_nToN; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_MatrixType: $.ASN1Decoder<MatrixType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MatrixType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MatrixType (el: _Element): MatrixType {
    if (!_cached_decoder_for_MatrixType) { _cached_decoder_for_MatrixType = $._decodeInteger; }
    return _cached_decoder_for_MatrixType(el);
}

let _cached_encoder_for_MatrixType: $.ASN1Encoder<MatrixType> | null = null;

/**
 * @summary Encodes a(n) MatrixType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatrixType, encoded as an ASN.1 Element.
 */
export
function _encode_MatrixType (value: MatrixType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MatrixType) { _cached_encoder_for_MatrixType = $._encodeInteger; }
    return _cached_encoder_for_MatrixType(value, elGetter);
}


/* eslint-enable */
