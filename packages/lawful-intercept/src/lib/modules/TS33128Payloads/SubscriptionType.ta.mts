/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionType
 * @description
 * 
 * Subscription type, i.e. "Subscription", "Subscription Update" or
 * "Unsubscription".
 *
 * 3GPP TS 33.128, clause 7.14.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionType  ::=  ENUMERATED
 * {
 *     subscription(1),
 *     subscriptionUpdate(2),
 *     unsubscription(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionType {
    subscription = 1,
    subscriptionUpdate = 2,
    unsubscription = 3,
}

/**
 * @summary SubscriptionType
 * @description
 * 
 * Subscription type, i.e. "Subscription", "Subscription Update" or
 * "Unsubscription".
 *
 * 3GPP TS 33.128, clause 7.14.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionType  ::=  ENUMERATED
 * {
 *     subscription(1),
 *     subscriptionUpdate(2),
 *     unsubscription(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionType = _enum_for_SubscriptionType;

/**
 * @summary SubscriptionType
 * @description
 * 
 * Subscription type, i.e. "Subscription", "Subscription Update" or
 * "Unsubscription".
 *
 * 3GPP TS 33.128, clause 7.14.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionType  ::=  ENUMERATED
 * {
 *     subscription(1),
 *     subscriptionUpdate(2),
 *     unsubscription(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionType: typeof _enum_for_SubscriptionType = _enum_for_SubscriptionType;

/**
 * @summary SubscriptionType_subscription
 * @constant
 * @type {number}
 */
export
const SubscriptionType_subscription: _enum_for_SubscriptionType.subscription = SubscriptionType.subscription; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscription
 * @constant
 * @type {number}
 */
export
const subscription: _enum_for_SubscriptionType.subscription = SubscriptionType.subscription; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionType_subscriptionUpdate
 * @constant
 * @type {number}
 */
export
const SubscriptionType_subscriptionUpdate: _enum_for_SubscriptionType.subscriptionUpdate = SubscriptionType.subscriptionUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionUpdate
 * @constant
 * @type {number}
 */
export
const subscriptionUpdate: _enum_for_SubscriptionType.subscriptionUpdate = SubscriptionType.subscriptionUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionType_unsubscription
 * @constant
 * @type {number}
 */
export
const SubscriptionType_unsubscription: _enum_for_SubscriptionType.unsubscription = SubscriptionType.unsubscription; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsubscription
 * @constant
 * @type {number}
 */
export
const unsubscription: _enum_for_SubscriptionType.unsubscription = SubscriptionType.unsubscription; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SubscriptionType: $.ASN1Decoder<SubscriptionType> = $._decodeEnumerated;
export const _encode_SubscriptionType: $.ASN1Encoder<SubscriptionType> = $._encodeEnumerated;


/* eslint-enable */
