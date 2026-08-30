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
enum _enum_for_RequestingNodeType {
    vlr = 0,
    sgsn = 1,
    s_cscf = 2,
    bsf = 3,
    gan_aaa_server = 4,
    wlan_aaa_server = 5,
    mme = 16,
    mme_sgsn = 17,
}

/**
 * @summary RequestingNodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestingNodeType  ::=  ENUMERATED {
 *     vlr  (0),
 *     sgsn  (1),
 *     ...,
 *     s-cscf  (2),
 *     bsf  (3),
 *     gan-aaa-server  (4),
 *     wlan-aaa-server  (5),
 *     mme    (16),
 *     mme-sgsn    (17)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type RequestingNodeType = _enum_for_RequestingNodeType | ENUMERATED;

/**
 * @summary RequestingNodeType_vlr
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_vlr: RequestingNodeType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vlr
 * @constant
 * @type {number}
 */
export
const vlr: RequestingNodeType = RequestingNodeType_vlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_sgsn
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_sgsn: RequestingNodeType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @constant
 * @type {number}
 */
export
const sgsn: RequestingNodeType = RequestingNodeType_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_s_cscf
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_s_cscf: RequestingNodeType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary s_cscf
 * @constant
 * @type {number}
 */
export
const s_cscf: RequestingNodeType = RequestingNodeType_s_cscf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_bsf
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_bsf: RequestingNodeType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bsf
 * @constant
 * @type {number}
 */
export
const bsf: RequestingNodeType = RequestingNodeType_bsf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_gan_aaa_server
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_gan_aaa_server: RequestingNodeType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gan_aaa_server
 * @constant
 * @type {number}
 */
export
const gan_aaa_server: RequestingNodeType = RequestingNodeType_gan_aaa_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_wlan_aaa_server
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_wlan_aaa_server: RequestingNodeType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wlan_aaa_server
 * @constant
 * @type {number}
 */
export
const wlan_aaa_server: RequestingNodeType = RequestingNodeType_wlan_aaa_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_mme
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_mme: RequestingNodeType = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme
 * @constant
 * @type {number}
 */
export
const mme: RequestingNodeType = RequestingNodeType_mme; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestingNodeType_mme_sgsn
 * @constant
 * @type {number}
 */
export
const RequestingNodeType_mme_sgsn: RequestingNodeType = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme_sgsn
 * @constant
 * @type {number}
 */
export
const mme_sgsn: RequestingNodeType = RequestingNodeType_mme_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RequestingNodeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestingNodeType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RequestingNodeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestingNodeType, encoded as an ASN.1 Element.
 */
export const _encode_RequestingNodeType = $._encodeEnumerated;


/* eslint-enable */
