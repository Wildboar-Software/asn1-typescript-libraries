/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubscriptionOption
 * @description
 *
 * SS-CFU subscription option carried in `cfuActivated` (ECMA-304 §6.3.1,
 * §6.5.3.3). The WTMI-detect PINX applies SS-CFU as Served User PINX when it
 * supports §6.8.6.1. ECMA-304 does not define the notification behaviour of
 * these three values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionOption  ::=  ENUMERATED {
 *     noNotification(0),
 *     notificationWithoutDivertedToNr(1),
 *     notificationWithDivertedToNr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionOption {
    noNotification = 0,
    notificationWithoutDivertedToNr = 1,
    notificationWithDivertedToNr = 2,
}

/**
 * @summary SubscriptionOption
 * @description
 *
 * SS-CFU subscription option carried in `cfuActivated` (ECMA-304 §6.3.1,
 * §6.5.3.3). The WTMI-detect PINX applies SS-CFU as Served User PINX when it
 * supports §6.8.6.1. ECMA-304 does not define the notification behaviour of
 * these three values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionOption  ::=  ENUMERATED {
 *     noNotification(0),
 *     notificationWithoutDivertedToNr(1),
 *     notificationWithDivertedToNr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionOption = _enum_for_SubscriptionOption;

/**
 * @summary SubscriptionOption
 * @description
 *
 * SS-CFU subscription option carried in `cfuActivated` (ECMA-304 §6.3.1,
 * §6.5.3.3). The WTMI-detect PINX applies SS-CFU as Served User PINX when it
 * supports §6.8.6.1. ECMA-304 does not define the notification behaviour of
 * these three values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionOption  ::=  ENUMERATED {
 *     noNotification(0),
 *     notificationWithoutDivertedToNr(1),
 *     notificationWithDivertedToNr(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionOption = _enum_for_SubscriptionOption;

/**
 * @summary SubscriptionOption_noNotification
 * @description
 * No diversion notification. ECMA-304 §6.3.1 gives no further meaning.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_noNotification: SubscriptionOption = SubscriptionOption.noNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noNotification
 * @description Alias of {@link SubscriptionOption_noNotification}.
 * @constant
 * @type {number}
 */
export
const noNotification: SubscriptionOption = SubscriptionOption.noNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionOption_notificationWithoutDivertedToNr
 * @description Notification without the diverted-to number. ECMA-304 §6.3.1.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_notificationWithoutDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithoutDivertedToNr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationWithoutDivertedToNr
 * @description
 * Alias of {@link SubscriptionOption_notificationWithoutDivertedToNr}.
 * @constant
 * @type {number}
 */
export
const notificationWithoutDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithoutDivertedToNr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionOption_notificationWithDivertedToNr
 * @description Notification with the diverted-to number. ECMA-304 §6.3.1.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_notificationWithDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithDivertedToNr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationWithDivertedToNr
 * @description
 * Alias of {@link SubscriptionOption_notificationWithDivertedToNr}.
 * @constant
 * @type {number}
 */
export
const notificationWithDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithDivertedToNr; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SubscriptionOption: $.ASN1Decoder<SubscriptionOption> = $._decodeEnumerated;

export
const _encode_SubscriptionOption: $.ASN1Encoder<SubscriptionOption> = $._encodeEnumerated;

/* eslint-enable */
