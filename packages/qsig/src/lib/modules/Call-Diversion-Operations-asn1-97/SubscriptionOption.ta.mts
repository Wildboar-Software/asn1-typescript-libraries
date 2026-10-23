/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubscriptionOption
 * @description
 *
 * Whether the calling user is told that the call diverted, and whether that
 * notification may include the diverted-to number and name (ECMA-174 §6.2.1
 * table 1, §6.5.1.1; ECMA-173 §6.2.2.2.3). Carried on `callRerouteing` and
 * copied to `divertingLegInformation1`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * Whether the calling user is told that the call diverted, and whether that
 * notification may include the diverted-to number and name (ECMA-174 §6.2.1
 * table 1, §6.5.1.1; ECMA-173 §6.2.2.2.3). Carried on `callRerouteing` and
 * copied to `divertingLegInformation1`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * Whether the calling user is told that the call diverted, and whether that
 * notification may include the diverted-to number and name (ECMA-174 §6.2.1
 * table 1, §6.5.1.1; ECMA-173 §6.2.2.2.3). Carried on `callRerouteing` and
 * copied to `divertingLegInformation1`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * Do not notify the calling user that the call diverted (ECMA-174 §6.2.1,
 * §6.5.1.1; ECMA-173 §6.2.2.2.3). If any diversion of the call used this
 * option, a later CFNR is not notified either.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * @description
 *
 * Notify the calling user, without the diverted-to number or name (ECMA-174
 * §6.2.1, §6.5.1.1; ECMA-173 §6.2.2.2.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * @description
 *
 * Notify the calling user, and allow the diverted-to number and name, still
 * subject to the diverted-to user's presentation restriction on
 * `divertingLegInformation3` (ECMA-174 §6.5.1.1; ECMA-173 §6.2.2.2.3). On
 * multiple diversion the number is presented only if every served user selected
 * this option.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
