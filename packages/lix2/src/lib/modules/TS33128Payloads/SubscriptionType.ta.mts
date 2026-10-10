/* eslint-disable */

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

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubscriptionType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SubscriptionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionType, encoded as an ASN.1 Element.
 */
export const _encode_SubscriptionType = $._encodeEnumerated;


/* eslint-enable */
