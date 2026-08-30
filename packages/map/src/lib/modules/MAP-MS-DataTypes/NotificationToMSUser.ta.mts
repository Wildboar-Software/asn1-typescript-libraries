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
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_notifyLocationAllowed: NotificationToMSUser = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyLocationAllowed
 * @constant
 * @type {number}
 */
export
const notifyLocationAllowed: NotificationToMSUser = NotificationToMSUser_notifyLocationAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse: NotificationToMSUser = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationAllowedIfNoResponse: NotificationToMSUser = NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse: NotificationToMSUser = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationNotAllowedIfNoResponse: NotificationToMSUser = NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotificationToMSUser_locationNotAllowed
 * @constant
 * @type {number}
 */
export
const NotificationToMSUser_locationNotAllowed: NotificationToMSUser = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationNotAllowed
 * @constant
 * @type {number}
 */
export
const locationNotAllowed: NotificationToMSUser = NotificationToMSUser_locationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NotificationToMSUser: $.ASN1Decoder<NotificationToMSUser> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationToMSUser
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationToMSUser (el: _Element): NotificationToMSUser {
    if (!_cached_decoder_for_NotificationToMSUser) { _cached_decoder_for_NotificationToMSUser = $._decodeEnumerated; }
    return _cached_decoder_for_NotificationToMSUser(el);
}

let _cached_encoder_for_NotificationToMSUser: $.ASN1Encoder<NotificationToMSUser> | null = null;

/**
 * @summary Encodes a(n) NotificationToMSUser into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationToMSUser, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationToMSUser (value: NotificationToMSUser, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationToMSUser) { _cached_encoder_for_NotificationToMSUser = $._encodeEnumerated; }
    return _cached_encoder_for_NotificationToMSUser(value, elGetter);
}


/* eslint-enable */
