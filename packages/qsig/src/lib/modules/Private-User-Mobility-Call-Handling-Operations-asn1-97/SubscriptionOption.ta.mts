/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubscriptionOption
 * @description
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
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_noNotification: SubscriptionOption = SubscriptionOption.noNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noNotification
 * @constant
 * @type {number}
 */
export
const noNotification: SubscriptionOption = SubscriptionOption.noNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionOption_notificationWithoutDivertedToNr
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_notificationWithoutDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithoutDivertedToNr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationWithoutDivertedToNr
 * @constant
 * @type {number}
 */
export
const notificationWithoutDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithoutDivertedToNr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionOption_notificationWithDivertedToNr
 * @constant
 * @type {number}
 */
export
const SubscriptionOption_notificationWithDivertedToNr: SubscriptionOption = SubscriptionOption.notificationWithDivertedToNr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationWithDivertedToNr
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
