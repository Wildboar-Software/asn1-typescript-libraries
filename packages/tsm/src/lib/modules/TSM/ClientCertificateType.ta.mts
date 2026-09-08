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



export
enum _enum_for_ClientCertificateType {
    rsa_sign = 1,
    dss_sign = 2,
    rsa_fixed_dh = 3,
    dss_fixed_dn = 4,
}

/**
 * @summary ClientCertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientCertificateType     ::=     ENUMERATED {
 * rsa-sign         (1),
 * dss-sign         (2),
 * rsa-fixed-dh     (3),
 * dss-fixed-dn     (4),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ClientCertificateType = _enum_for_ClientCertificateType | ENUMERATED;

/**
 * @summary ClientCertificateType_rsa_sign
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_rsa_sign: ClientCertificateType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rsa_sign
 * @constant
 * @type {number}
 */
export
const rsa_sign: ClientCertificateType = ClientCertificateType_rsa_sign; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClientCertificateType_dss_sign
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_dss_sign: ClientCertificateType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dss_sign
 * @constant
 * @type {number}
 */
export
const dss_sign: ClientCertificateType = ClientCertificateType_dss_sign; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClientCertificateType_rsa_fixed_dh
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_rsa_fixed_dh: ClientCertificateType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rsa_fixed_dh
 * @constant
 * @type {number}
 */
export
const rsa_fixed_dh: ClientCertificateType = ClientCertificateType_rsa_fixed_dh; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClientCertificateType_dss_fixed_dn
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_dss_fixed_dn: ClientCertificateType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dss_fixed_dn
 * @constant
 * @type {number}
 */
export
const dss_fixed_dn: ClientCertificateType = ClientCertificateType_dss_fixed_dn; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ClientCertificateType: $.ASN1Decoder<ClientCertificateType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientCertificateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientCertificateType (el: _Element): ClientCertificateType {
    if (!_cached_decoder_for_ClientCertificateType) { _cached_decoder_for_ClientCertificateType = $._decodeEnumerated; }
    return _cached_decoder_for_ClientCertificateType(el);
}

let _cached_encoder_for_ClientCertificateType: $.ASN1Encoder<ClientCertificateType> | null = null;

/**
 * @summary Encodes a(n) ClientCertificateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientCertificateType, encoded as an ASN.1 Element.
 */
export
function _encode_ClientCertificateType (value: ClientCertificateType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientCertificateType) { _cached_encoder_for_ClientCertificateType = $._encodeEnumerated; }
    return _cached_encoder_for_ClientCertificateType(value, elGetter);
}


/* eslint-enable */
