/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNNSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNNSelectionMode  ::=  ENUMERATED {
 *    uEorNetworkProvidedSubscriptionVerified    ( 0 ),
 *    uEProvidedSubscriptionNotVerified          ( 1 ),
 *    networkProvidedSubscriptionNotVerified     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DNNSelectionMode {
    uEorNetworkProvidedSubscriptionVerified = 0,
    uEProvidedSubscriptionNotVerified = 1,
    networkProvidedSubscriptionNotVerified = 2,
}

/**
 * @summary DNNSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNNSelectionMode  ::=  ENUMERATED {
 *    uEorNetworkProvidedSubscriptionVerified    ( 0 ),
 *    uEProvidedSubscriptionNotVerified          ( 1 ),
 *    networkProvidedSubscriptionNotVerified     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type DNNSelectionMode = _enum_for_DNNSelectionMode;

/**
 * @summary DNNSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNNSelectionMode  ::=  ENUMERATED {
 *    uEorNetworkProvidedSubscriptionVerified    ( 0 ),
 *    uEProvidedSubscriptionNotVerified          ( 1 ),
 *    networkProvidedSubscriptionNotVerified     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const DNNSelectionMode = _enum_for_DNNSelectionMode;

/**
 * @summary DNNSelectionMode_uEorNetworkProvidedSubscriptionVerified
 * @constant
 * @type {number}
 */
export
const DNNSelectionMode_uEorNetworkProvidedSubscriptionVerified = DNNSelectionMode.uEorNetworkProvidedSubscriptionVerified satisfies DNNSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEorNetworkProvidedSubscriptionVerified
 * @constant
 * @type {number}
 */
export
const uEorNetworkProvidedSubscriptionVerified = DNNSelectionMode.uEorNetworkProvidedSubscriptionVerified satisfies DNNSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNNSelectionMode_uEProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const DNNSelectionMode_uEProvidedSubscriptionNotVerified = DNNSelectionMode.uEProvidedSubscriptionNotVerified satisfies DNNSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const uEProvidedSubscriptionNotVerified = DNNSelectionMode.uEProvidedSubscriptionNotVerified satisfies DNNSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNNSelectionMode_networkProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const DNNSelectionMode_networkProvidedSubscriptionNotVerified = DNNSelectionMode.networkProvidedSubscriptionNotVerified satisfies DNNSelectionMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const networkProvidedSubscriptionNotVerified = DNNSelectionMode.networkProvidedSubscriptionNotVerified satisfies DNNSelectionMode; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DNNSelectionMode: $.ASN1Decoder<DNNSelectionMode> = $._decodeEnumerated;

export
const _encode_DNNSelectionMode: $.ASN1Encoder<DNNSelectionMode> = $._encodeEnumerated;

/* eslint-enable */
