/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
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
