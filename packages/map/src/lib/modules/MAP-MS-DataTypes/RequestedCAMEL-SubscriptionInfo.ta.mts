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
 * @summary RequestedCAMEL_SubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedCAMEL-SubscriptionInfo  ::=  ENUMERATED {
 *     o-CSI    (0),
 *     t-CSI    (1),
 *     vt-CSI    (2),
 *     tif-CSI    (3),
 *     gprs-CSI    (4),
 *     mo-sms-CSI    (5),
 *     ss-CSI    (6),
 *     m-CSI    (7),
 *     d-csi    (8)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RequestedCAMEL_SubscriptionInfo {
    o_CSI = 0,
    t_CSI = 1,
    vt_CSI = 2,
    tif_CSI = 3,
    gprs_CSI = 4,
    mo_sms_CSI = 5,
    ss_CSI = 6,
    m_CSI = 7,
    d_csi = 8,
}

/**
 * @summary RequestedCAMEL_SubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedCAMEL-SubscriptionInfo  ::=  ENUMERATED {
 *     o-CSI    (0),
 *     t-CSI    (1),
 *     vt-CSI    (2),
 *     tif-CSI    (3),
 *     gprs-CSI    (4),
 *     mo-sms-CSI    (5),
 *     ss-CSI    (6),
 *     m-CSI    (7),
 *     d-csi    (8)}
 * ```
 * 
 * @enum {number}
 */
export
type RequestedCAMEL_SubscriptionInfo = _enum_for_RequestedCAMEL_SubscriptionInfo;

/**
 * @summary RequestedCAMEL_SubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedCAMEL-SubscriptionInfo  ::=  ENUMERATED {
 *     o-CSI    (0),
 *     t-CSI    (1),
 *     vt-CSI    (2),
 *     tif-CSI    (3),
 *     gprs-CSI    (4),
 *     mo-sms-CSI    (5),
 *     ss-CSI    (6),
 *     m-CSI    (7),
 *     d-csi    (8)}
 * ```
 * 
 * @enum {number}
 */
export
const RequestedCAMEL_SubscriptionInfo = _enum_for_RequestedCAMEL_SubscriptionInfo;

/**
 * @summary RequestedCAMEL_SubscriptionInfo_o_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_o_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.o_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_CSI
 * @constant
 * @type {number}
 */
export
const o_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.o_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_t_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_t_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.t_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t_CSI
 * @constant
 * @type {number}
 */
export
const t_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.t_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_vt_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_vt_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.vt_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vt_CSI
 * @constant
 * @type {number}
 */
export
const vt_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.vt_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_tif_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_tif_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.tif_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tif_CSI
 * @constant
 * @type {number}
 */
export
const tif_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.tif_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_gprs_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_gprs_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.gprs_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gprs_CSI
 * @constant
 * @type {number}
 */
export
const gprs_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.gprs_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_mo_sms_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_mo_sms_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.mo_sms_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mo_sms_CSI
 * @constant
 * @type {number}
 */
export
const mo_sms_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.mo_sms_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_ss_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_ss_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.ss_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ss_CSI
 * @constant
 * @type {number}
 */
export
const ss_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.ss_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_m_CSI
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_m_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.m_CSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary m_CSI
 * @constant
 * @type {number}
 */
export
const m_CSI: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.m_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedCAMEL_SubscriptionInfo_d_csi
 * @constant
 * @type {number}
 */
export
const RequestedCAMEL_SubscriptionInfo_d_csi: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.d_csi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d_csi
 * @constant
 * @type {number}
 */
export
const d_csi: RequestedCAMEL_SubscriptionInfo = RequestedCAMEL_SubscriptionInfo.d_csi; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RequestedCAMEL_SubscriptionInfo: $.ASN1Decoder<RequestedCAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedCAMEL_SubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedCAMEL_SubscriptionInfo (el: _Element): RequestedCAMEL_SubscriptionInfo {
    if (!_cached_decoder_for_RequestedCAMEL_SubscriptionInfo) { _cached_decoder_for_RequestedCAMEL_SubscriptionInfo = $._decodeEnumerated; }
    return _cached_decoder_for_RequestedCAMEL_SubscriptionInfo(el);
}

let _cached_encoder_for_RequestedCAMEL_SubscriptionInfo: $.ASN1Encoder<RequestedCAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) RequestedCAMEL_SubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedCAMEL_SubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedCAMEL_SubscriptionInfo (value: RequestedCAMEL_SubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedCAMEL_SubscriptionInfo) { _cached_encoder_for_RequestedCAMEL_SubscriptionInfo = $._encodeEnumerated; }
    return _cached_encoder_for_RequestedCAMEL_SubscriptionInfo(value, elGetter);
}


/* eslint-enable */
