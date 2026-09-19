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
 * @summary TLSCompressionAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCompressionAlgorithm  ::=  ENUMERATED
 * {
 *     null(1),
 *     deflate(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLSCompressionAlgorithm {
    null_ = 1,
    deflate = 2,
}

/**
 * @summary TLSCompressionAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCompressionAlgorithm  ::=  ENUMERATED
 * {
 *     null(1),
 *     deflate(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLSCompressionAlgorithm = _enum_for_TLSCompressionAlgorithm;

/**
 * @summary TLSCompressionAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCompressionAlgorithm  ::=  ENUMERATED
 * {
 *     null(1),
 *     deflate(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLSCompressionAlgorithm = _enum_for_TLSCompressionAlgorithm;

/**
 * @summary TLSCompressionAlgorithm_null_
 * @constant
 * @type {number}
 */
export
const TLSCompressionAlgorithm_null_: TLSCompressionAlgorithm = TLSCompressionAlgorithm.null_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary null_
 * @constant
 * @type {number}
 */
export
const null_: TLSCompressionAlgorithm = TLSCompressionAlgorithm.null_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSCompressionAlgorithm_deflate
 * @constant
 * @type {number}
 */
export
const TLSCompressionAlgorithm_deflate: TLSCompressionAlgorithm = TLSCompressionAlgorithm.deflate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deflate
 * @constant
 * @type {number}
 */
export
const deflate: TLSCompressionAlgorithm = TLSCompressionAlgorithm.deflate; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLSCompressionAlgorithm: $.ASN1Decoder<TLSCompressionAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLSCompressionAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLSCompressionAlgorithm (el: _Element): TLSCompressionAlgorithm {
    if (!_cached_decoder_for_TLSCompressionAlgorithm) { _cached_decoder_for_TLSCompressionAlgorithm = $._decodeEnumerated; }
    return _cached_decoder_for_TLSCompressionAlgorithm(el);
}

let _cached_encoder_for_TLSCompressionAlgorithm: $.ASN1Encoder<TLSCompressionAlgorithm> | null = null;

/**
 * @summary Encodes a(n) TLSCompressionAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLSCompressionAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_TLSCompressionAlgorithm (value: TLSCompressionAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLSCompressionAlgorithm) { _cached_encoder_for_TLSCompressionAlgorithm = $._encodeEnumerated; }
    return _cached_encoder_for_TLSCompressionAlgorithm(value, elGetter);
}


/* eslint-enable */
