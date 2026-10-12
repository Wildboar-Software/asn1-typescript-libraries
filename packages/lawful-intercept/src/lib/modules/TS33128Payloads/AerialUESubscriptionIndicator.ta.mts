/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AerialUESubscriptionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AerialUESubscriptionIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AerialUESubscriptionIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary AerialUESubscriptionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AerialUESubscriptionIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AerialUESubscriptionIndicator = _enum_for_AerialUESubscriptionIndicator;

/**
 * @summary AerialUESubscriptionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AerialUESubscriptionIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AerialUESubscriptionIndicator = _enum_for_AerialUESubscriptionIndicator;

/**
 * @summary AerialUESubscriptionIndicator_authorized
 * @constant
 * @type {number}
 */
export
const AerialUESubscriptionIndicator_authorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AerialUESubscriptionIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const AerialUESubscriptionIndicator_notAuthorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AerialUESubscriptionIndicator: $.ASN1Decoder<AerialUESubscriptionIndicator> = $._decodeEnumerated;
export const _encode_AerialUESubscriptionIndicator: $.ASN1Encoder<AerialUESubscriptionIndicator> = $._encodeEnumerated;


/* eslint-enable */
