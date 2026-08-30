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
enum _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo {
    mt_sms_CSI = 0,
    mg_csi = 1,
    o_IM_CSI = 2,
    d_IM_CSI = 3,
    vt_IM_CSI = 4,
}

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalRequestedCAMEL-SubscriptionInfo  ::=  ENUMERATED {
 *     mt-sms-CSI    (0),
 *     mg-csi    (1),
 *     o-IM-CSI    (2),
 *     d-IM-CSI    (3),
 *     vt-IM-CSI    (4),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalRequestedCAMEL_SubscriptionInfo = _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo | ENUMERATED;

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mt_sms_CSI
 * @constant
 * @type {number}
 */
export
const mt_sms_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi: AdditionalRequestedCAMEL_SubscriptionInfo = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mg_csi
 * @constant
 * @type {number}
 */
export
const mg_csi: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_IM_CSI
 * @constant
 * @type {number}
 */
export
const o_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d_IM_CSI
 * @constant
 * @type {number}
 */
export
const d_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI
 * @constant
 * @type {number}
 */
export
const AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vt_IM_CSI
 * @constant
 * @type {number}
 */
export
const vt_IM_CSI: AdditionalRequestedCAMEL_SubscriptionInfo = AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AdditionalRequestedCAMEL_SubscriptionInfo: $.ASN1Decoder<AdditionalRequestedCAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalRequestedCAMEL_SubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalRequestedCAMEL_SubscriptionInfo (el: _Element): AdditionalRequestedCAMEL_SubscriptionInfo {
    if (!_cached_decoder_for_AdditionalRequestedCAMEL_SubscriptionInfo) { _cached_decoder_for_AdditionalRequestedCAMEL_SubscriptionInfo = $._decodeEnumerated; }
    return _cached_decoder_for_AdditionalRequestedCAMEL_SubscriptionInfo(el);
}

let _cached_encoder_for_AdditionalRequestedCAMEL_SubscriptionInfo: $.ASN1Encoder<AdditionalRequestedCAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) AdditionalRequestedCAMEL_SubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalRequestedCAMEL_SubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalRequestedCAMEL_SubscriptionInfo (value: AdditionalRequestedCAMEL_SubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalRequestedCAMEL_SubscriptionInfo) { _cached_encoder_for_AdditionalRequestedCAMEL_SubscriptionInfo = $._encodeEnumerated; }
    return _cached_encoder_for_AdditionalRequestedCAMEL_SubscriptionInfo(value, elGetter);
}


/* eslint-enable */
