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
 * @summary TLS13CertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CertificateType  ::=  ENUMERATED
 * {
 *     x509(1),
 *     rawPublicKey(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13CertificateType {
    x509 = 1,
    rawPublicKey = 2,
}

/**
 * @summary TLS13CertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CertificateType  ::=  ENUMERATED
 * {
 *     x509(1),
 *     rawPublicKey(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13CertificateType = _enum_for_TLS13CertificateType;

/**
 * @summary TLS13CertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CertificateType  ::=  ENUMERATED
 * {
 *     x509(1),
 *     rawPublicKey(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13CertificateType = _enum_for_TLS13CertificateType;

/**
 * @summary TLS13CertificateType_x509
 * @constant
 * @type {number}
 */
export
const TLS13CertificateType_x509: TLS13CertificateType = TLS13CertificateType.x509; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x509
 * @constant
 * @type {number}
 */
export
const x509: TLS13CertificateType = TLS13CertificateType.x509; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13CertificateType_rawPublicKey
 * @constant
 * @type {number}
 */
export
const TLS13CertificateType_rawPublicKey: TLS13CertificateType = TLS13CertificateType.rawPublicKey; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rawPublicKey
 * @constant
 * @type {number}
 */
export
const rawPublicKey: TLS13CertificateType = TLS13CertificateType.rawPublicKey; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLS13CertificateType: $.ASN1Decoder<TLS13CertificateType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13CertificateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13CertificateType (el: _Element): TLS13CertificateType {
    if (!_cached_decoder_for_TLS13CertificateType) { _cached_decoder_for_TLS13CertificateType = $._decodeEnumerated; }
    return _cached_decoder_for_TLS13CertificateType(el);
}

let _cached_encoder_for_TLS13CertificateType: $.ASN1Encoder<TLS13CertificateType> | null = null;

/**
 * @summary Encodes a(n) TLS13CertificateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13CertificateType, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13CertificateType (value: TLS13CertificateType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13CertificateType) { _cached_encoder_for_TLS13CertificateType = $._encodeEnumerated; }
    return _cached_encoder_for_TLS13CertificateType(value, elGetter);
}


/* eslint-enable */
