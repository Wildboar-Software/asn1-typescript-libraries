/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APNSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNSelectionMode  ::=  ENUMERATED {
 *    mSorNetworkProvidedSubscriptionVerified    ( 0 ),
 *    mSProvidedSubscriptionNotVerified          ( 1 ),
 *    networkProvidedSubscriptionNotVerified     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_APNSelectionMode {
    mSorNetworkProvidedSubscriptionVerified = 0,
    mSProvidedSubscriptionNotVerified = 1,
    networkProvidedSubscriptionNotVerified = 2,
}

/**
 * @summary APNSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNSelectionMode  ::=  ENUMERATED {
 *    mSorNetworkProvidedSubscriptionVerified    ( 0 ),
 *    mSProvidedSubscriptionNotVerified          ( 1 ),
 *    networkProvidedSubscriptionNotVerified     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type APNSelectionMode = _enum_for_APNSelectionMode;

/**
 * @summary APNSelectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNSelectionMode  ::=  ENUMERATED {
 *    mSorNetworkProvidedSubscriptionVerified    ( 0 ),
 *    mSProvidedSubscriptionNotVerified          ( 1 ),
 *    networkProvidedSubscriptionNotVerified     ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const APNSelectionMode = _enum_for_APNSelectionMode;

/**
 * @summary APNSelectionMode_mSorNetworkProvidedSubscriptionVerified
 * @constant
 * @type {number}
 */
export
const APNSelectionMode_mSorNetworkProvidedSubscriptionVerified: APNSelectionMode = APNSelectionMode.mSorNetworkProvidedSubscriptionVerified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSorNetworkProvidedSubscriptionVerified
 * @constant
 * @type {number}
 */
export
const mSorNetworkProvidedSubscriptionVerified: APNSelectionMode = APNSelectionMode.mSorNetworkProvidedSubscriptionVerified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APNSelectionMode_mSProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const APNSelectionMode_mSProvidedSubscriptionNotVerified: APNSelectionMode = APNSelectionMode.mSProvidedSubscriptionNotVerified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const mSProvidedSubscriptionNotVerified: APNSelectionMode = APNSelectionMode.mSProvidedSubscriptionNotVerified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APNSelectionMode_networkProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const APNSelectionMode_networkProvidedSubscriptionNotVerified: APNSelectionMode = APNSelectionMode.networkProvidedSubscriptionNotVerified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const networkProvidedSubscriptionNotVerified: APNSelectionMode = APNSelectionMode.networkProvidedSubscriptionNotVerified; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APNSelectionMode: $.ASN1Decoder<APNSelectionMode> = $._decodeEnumerated;

export
const _encode_APNSelectionMode: $.ASN1Encoder<APNSelectionMode> = $._encodeEnumerated;

/* eslint-enable */
