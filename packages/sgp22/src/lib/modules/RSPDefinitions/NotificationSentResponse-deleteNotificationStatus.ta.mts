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
 * @summary NotificationSentResponse_deleteNotificationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationSentResponse-deleteNotificationStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type NotificationSentResponse_deleteNotificationStatus = INTEGER;

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_ok
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_ok: NotificationSentResponse_deleteNotificationStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_ok
 * @constant
 * @type {number}
 */
export
const ok: NotificationSentResponse_deleteNotificationStatus = NotificationSentResponse_deleteNotificationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_nothingToDelete
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_nothingToDelete: NotificationSentResponse_deleteNotificationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_nothingToDelete
 * @constant
 * @type {number}
 */
export
const nothingToDelete: NotificationSentResponse_deleteNotificationStatus = NotificationSentResponse_deleteNotificationStatus_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_undefinedError
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_undefinedError: NotificationSentResponse_deleteNotificationStatus = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: NotificationSentResponse_deleteNotificationStatus = NotificationSentResponse_deleteNotificationStatus_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_NotificationSentResponse_deleteNotificationStatus: $.ASN1Decoder<NotificationSentResponse_deleteNotificationStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationSentResponse_deleteNotificationStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationSentResponse_deleteNotificationStatus (el: _Element): NotificationSentResponse_deleteNotificationStatus {
    if (!_cached_decoder_for_NotificationSentResponse_deleteNotificationStatus) { _cached_decoder_for_NotificationSentResponse_deleteNotificationStatus = $._decodeInteger; }
    return _cached_decoder_for_NotificationSentResponse_deleteNotificationStatus(el);
}

let _cached_encoder_for_NotificationSentResponse_deleteNotificationStatus: $.ASN1Encoder<NotificationSentResponse_deleteNotificationStatus> | null = null;

/**
 * @summary Encodes a(n) NotificationSentResponse_deleteNotificationStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationSentResponse_deleteNotificationStatus, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationSentResponse_deleteNotificationStatus (value: NotificationSentResponse_deleteNotificationStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationSentResponse_deleteNotificationStatus) { _cached_encoder_for_NotificationSentResponse_deleteNotificationStatus = $._encodeInteger; }
    return _cached_encoder_for_NotificationSentResponse_deleteNotificationStatus(value, elGetter);
}


/* eslint-enable */
