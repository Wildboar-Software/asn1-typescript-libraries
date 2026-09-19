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
 * @summary NotificationEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationEvent  ::=  BIT STRING {
 *     notificationInstall(0),
 *     notificationEnable(1),
 *     notificationDisable(2),
 *     notificationDelete(3)
 * }
 * ```
 */
export
type NotificationEvent = BIT_STRING;

/**
 * @summary NotificationEvent_notificationInstall
 * @constant
 */
export
const NotificationEvent_notificationInstall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary notificationInstall
 * @constant
 */
export
const notificationInstall: number = NotificationEvent_notificationInstall; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationEnable
 * @constant
 */
export
const NotificationEvent_notificationEnable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary notificationEnable
 * @constant
 */
export
const notificationEnable: number = NotificationEvent_notificationEnable; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationDisable
 * @constant
 */
export
const NotificationEvent_notificationDisable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary notificationDisable
 * @constant
 */
export
const notificationDisable: number = NotificationEvent_notificationDisable; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationDelete
 * @constant
 */
export
const NotificationEvent_notificationDelete: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary notificationDelete
 * @constant
 */
export
const notificationDelete: number = NotificationEvent_notificationDelete; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NotificationEvent: $.ASN1Decoder<NotificationEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationEvent (el: _Element): NotificationEvent {
    if (!_cached_decoder_for_NotificationEvent) { _cached_decoder_for_NotificationEvent = $._decodeBitString; }
    return _cached_decoder_for_NotificationEvent(el);
}

let _cached_encoder_for_NotificationEvent: $.ASN1Encoder<NotificationEvent> | null = null;

/**
 * @summary Encodes a(n) NotificationEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationEvent, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationEvent (value: NotificationEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationEvent) { _cached_encoder_for_NotificationEvent = $._encodeBitString; }
    return _cached_encoder_for_NotificationEvent(value, elGetter);
}


/* eslint-enable */
