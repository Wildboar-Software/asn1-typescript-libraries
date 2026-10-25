/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubscriptionOption
 * @description
 *
 * SS-CFU notification option in `cfuActivated` (ECMA-284 §6.3.1, §6.5.3.3). The
 * standard names the three values and is silent on the notification behaviour.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
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
 * SS-CFU notification option in `cfuActivated` (ECMA-284 §6.3.1, §6.5.3.3). The
 * standard names the three values and is silent on the notification behaviour.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
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
 * SS-CFU notification option in `cfuActivated` (ECMA-284 §6.3.1, §6.5.3.3). The
 * standard names the three values and is silent on the notification behaviour.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
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
 *
 * No notification. ECMA-284 §6.3.1 names this value and is silent on the
 * notification behaviour.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_noNotification = SubscriptionOption.noNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noNotification
 * @description Alias of {@link SubscriptionOption_noNotification}.
 * @constant
 * @type {number}
 */
export
const noNotification = SubscriptionOption.noNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionOption_notificationWithoutDivertedToNr
 * @description
 *
 * Notification without the diverted-to number. ECMA-284 §6.3.1 names this value
 * and is silent on the notification behaviour.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_notificationWithoutDivertedToNr = SubscriptionOption.notificationWithoutDivertedToNr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationWithoutDivertedToNr
 * @description
 * Alias of {@link SubscriptionOption_notificationWithoutDivertedToNr}.
 * @constant
 * @type {number}
 */
export
const notificationWithoutDivertedToNr = SubscriptionOption.notificationWithoutDivertedToNr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionOption_notificationWithDivertedToNr
 * @description
 *
 * Notification that includes the diverted-to number. ECMA-284 §6.3.1 names this
 * value and is silent on the notification behaviour.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_notificationWithDivertedToNr = SubscriptionOption.notificationWithDivertedToNr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationWithDivertedToNr
 * @description
 * Alias of {@link SubscriptionOption_notificationWithDivertedToNr}.
 * @constant
 * @type {number}
 */
export
const notificationWithDivertedToNr = SubscriptionOption.notificationWithDivertedToNr; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SubscriptionOption: $.ASN1Decoder<SubscriptionOption> = $._decodeEnumerated;

export
const _encode_SubscriptionOption: $.ASN1Encoder<SubscriptionOption> = $._encodeEnumerated;

/* eslint-enable */
