/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionType
 * @description
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
const SubscriptionType = _enum_for_SubscriptionType;

/**
 * @summary SubscriptionType_subscription
 * @constant
 * @type {number}
 */
export
const SubscriptionType_subscription: SubscriptionType = SubscriptionType.subscription; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscription
 * @constant
 * @type {number}
 */
export
const subscription: SubscriptionType = SubscriptionType.subscription; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionType_subscriptionUpdate
 * @constant
 * @type {number}
 */
export
const SubscriptionType_subscriptionUpdate: SubscriptionType = SubscriptionType.subscriptionUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionUpdate
 * @constant
 * @type {number}
 */
export
const subscriptionUpdate: SubscriptionType = SubscriptionType.subscriptionUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionType_unsubscription
 * @constant
 * @type {number}
 */
export
const SubscriptionType_unsubscription: SubscriptionType = SubscriptionType.unsubscription; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsubscription
 * @constant
 * @type {number}
 */
export
const unsubscription: SubscriptionType = SubscriptionType.unsubscription; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SubscriptionType: $.ASN1Decoder<SubscriptionType> = $._decodeEnumerated;
export const _encode_SubscriptionType: $.ASN1Encoder<SubscriptionType> = $._encodeEnumerated;


/* eslint-enable */
