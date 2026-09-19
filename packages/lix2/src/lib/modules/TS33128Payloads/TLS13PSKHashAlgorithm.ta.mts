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
 * @summary TLS13PSKHashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKHashAlgorithm  ::=  ENUMERATED
 * {
 *     sha256(1),
 *     sha384(2),
 *     sha512(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13PSKHashAlgorithm {
    sha256 = 1,
    sha384 = 2,
    sha512 = 3,
}

/**
 * @summary TLS13PSKHashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKHashAlgorithm  ::=  ENUMERATED
 * {
 *     sha256(1),
 *     sha384(2),
 *     sha512(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13PSKHashAlgorithm = _enum_for_TLS13PSKHashAlgorithm;

/**
 * @summary TLS13PSKHashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKHashAlgorithm  ::=  ENUMERATED
 * {
 *     sha256(1),
 *     sha384(2),
 *     sha512(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13PSKHashAlgorithm = _enum_for_TLS13PSKHashAlgorithm;

/**
 * @summary TLS13PSKHashAlgorithm_sha256
 * @constant
 * @type {number}
 */
export
const TLS13PSKHashAlgorithm_sha256: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha256; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sha256
 * @constant
 * @type {number}
 */
export
const sha256: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha256; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13PSKHashAlgorithm_sha384
 * @constant
 * @type {number}
 */
export
const TLS13PSKHashAlgorithm_sha384: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha384; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sha384
 * @constant
 * @type {number}
 */
export
const sha384: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha384; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13PSKHashAlgorithm_sha512
 * @constant
 * @type {number}
 */
export
const TLS13PSKHashAlgorithm_sha512: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha512; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sha512
 * @constant
 * @type {number}
 */
export
const sha512: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha512; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLS13PSKHashAlgorithm: $.ASN1Decoder<TLS13PSKHashAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13PSKHashAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13PSKHashAlgorithm (el: _Element): TLS13PSKHashAlgorithm {
    if (!_cached_decoder_for_TLS13PSKHashAlgorithm) { _cached_decoder_for_TLS13PSKHashAlgorithm = $._decodeEnumerated; }
    return _cached_decoder_for_TLS13PSKHashAlgorithm(el);
}

let _cached_encoder_for_TLS13PSKHashAlgorithm: $.ASN1Encoder<TLS13PSKHashAlgorithm> | null = null;

/**
 * @summary Encodes a(n) TLS13PSKHashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13PSKHashAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13PSKHashAlgorithm (value: TLS13PSKHashAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13PSKHashAlgorithm) { _cached_encoder_for_TLS13PSKHashAlgorithm = $._encodeEnumerated; }
    return _cached_encoder_for_TLS13PSKHashAlgorithm(value, elGetter);
}


/* eslint-enable */
