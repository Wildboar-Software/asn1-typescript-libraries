/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionID_subscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionID-subscriptionIDType ::= ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionID_subscriptionIDType {
    eND_USER_E164 = 0,
    eND_USER_IMSI = 1,
    eND_USER_SIP_URI = 2,
    eND_USER_NAI = 3,
    eND_USER_PRIVATE = 4,
}

/**
 * @summary SubscriptionID_subscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionID-subscriptionIDType ::= ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionID_subscriptionIDType = _enum_for_SubscriptionID_subscriptionIDType;

/**
 * @summary SubscriptionID_subscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionID-subscriptionIDType ::= ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionID_subscriptionIDType = _enum_for_SubscriptionID_subscriptionIDType;

/**
 * @summary SubscriptionID_subscriptionIDType_eND_USER_E164
 * @constant
 * @type {number}
 */
export
const SubscriptionID_subscriptionIDType_eND_USER_E164 = SubscriptionID_subscriptionIDType.eND_USER_E164 satisfies SubscriptionID_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_E164
 * @constant
 * @type {number}
 */
export
const eND_USER_E164 = SubscriptionID_subscriptionIDType.eND_USER_E164 satisfies SubscriptionID_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionID_subscriptionIDType_eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const SubscriptionID_subscriptionIDType_eND_USER_IMSI = SubscriptionID_subscriptionIDType.eND_USER_IMSI satisfies SubscriptionID_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const eND_USER_IMSI = SubscriptionID_subscriptionIDType.eND_USER_IMSI satisfies SubscriptionID_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionID_subscriptionIDType_eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const SubscriptionID_subscriptionIDType_eND_USER_SIP_URI = SubscriptionID_subscriptionIDType.eND_USER_SIP_URI satisfies SubscriptionID_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const eND_USER_SIP_URI = SubscriptionID_subscriptionIDType.eND_USER_SIP_URI satisfies SubscriptionID_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionID_subscriptionIDType_eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const SubscriptionID_subscriptionIDType_eND_USER_NAI = SubscriptionID_subscriptionIDType.eND_USER_NAI satisfies SubscriptionID_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const eND_USER_NAI = SubscriptionID_subscriptionIDType.eND_USER_NAI satisfies SubscriptionID_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionID_subscriptionIDType_eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const SubscriptionID_subscriptionIDType_eND_USER_PRIVATE = SubscriptionID_subscriptionIDType.eND_USER_PRIVATE satisfies SubscriptionID_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const eND_USER_PRIVATE = SubscriptionID_subscriptionIDType.eND_USER_PRIVATE satisfies SubscriptionID_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SubscriptionID_subscriptionIDType: $.ASN1Decoder<SubscriptionID_subscriptionIDType> = $._decodeEnumerated;

export
const _encode_SubscriptionID_subscriptionIDType: $.ASN1Encoder<SubscriptionID_subscriptionIDType> = $._encodeEnumerated;

/* eslint-enable */
