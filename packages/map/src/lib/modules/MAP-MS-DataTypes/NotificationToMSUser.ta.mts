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
enum _enum_for_NotificationToMSUser {
    notifyLocationAllowed = 0,
    notifyAndVerify_LocationAllowedIfNoResponse = 1,
    notifyAndVerify_LocationNotAllowedIfNoResponse = 2,
    locationNotAllowed = 3,
}

/**
 * @summary NotificationToMSUser
 * @description
 *
 * Whether the MS user shall be notified of an MT-LR for a privacy class, and
 * whether notification-only or notification with privacy verification applies
 * (3GPP TS 23.271). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clauses 7.6.3.65B and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationToMSUser  ::=  ENUMERATED {
 *     notifyLocationAllowed    (0),
 *     notifyAndVerify-LocationAllowedIfNoResponse    (1),
 *     notifyAndVerify-LocationNotAllowedIfNoResponse    (2),
 *     ...,
 *     locationNotAllowed (3) }
 * ```
 * 
 * @enum {number}
 */
export
type NotificationToMSUser = _enum_for_NotificationToMSUser | ENUMERATED;

/**
 * @summary NotificationToMSUser_notifyLocationAllowed
 * @description
 *
 * Notify the MS; location is allowed. (3GPP TS 29.002 V19.1.0 clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_notifyLocationAllowed: NotificationToMSUser = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyLocationAllowed
 * @description
 *
 * Notify the MS; location is allowed. (3GPP TS 29.002 V19.1.0 clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const notifyLocationAllowed: NotificationToMSUser = NotificationToMSUser_notifyLocationAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse
 * @description
 *
 * Notify and verify; location allowed if no response. (3GPP TS 29.002 V19.1.0
 * clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse: NotificationToMSUser = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationAllowedIfNoResponse
 * @description
 *
 * Notify and verify; location allowed if no response. (3GPP TS 29.002 V19.1.0
 * clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationAllowedIfNoResponse: NotificationToMSUser = NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse
 * @description
 *
 * Notify and verify; location not allowed if no response. (3GPP TS 29.002
 * V19.1.0 clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse: NotificationToMSUser = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationNotAllowedIfNoResponse
 * @description
 *
 * Notify and verify; location not allowed if no response. (3GPP TS 29.002
 * V19.1.0 clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationNotAllowedIfNoResponse: NotificationToMSUser = NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotificationToMSUser_locationNotAllowed
 * @description
 *
 * Location not allowed. (3GPP TS 29.002 V19.1.0 clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_locationNotAllowed: NotificationToMSUser = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationNotAllowed
 * @description
 *
 * Location not allowed. (3GPP TS 29.002 V19.1.0 clause 7.6.3.65B)
 *
 * @constant
 * @type {number}
 */
export
const locationNotAllowed: NotificationToMSUser = NotificationToMSUser_locationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationToMSUser
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NotificationToMSUser = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NotificationToMSUser into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationToMSUser, encoded as an ASN.1 Element.
 */
export const _encode_NotificationToMSUser = $._encodeEnumerated;


/* eslint-enable */
