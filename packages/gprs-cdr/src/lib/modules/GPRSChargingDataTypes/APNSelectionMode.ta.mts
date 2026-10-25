/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APNSelectionMode
 * @description
 *
 * This field indicates how the SGSN/MME selected the APN to be used. The
 * values and their meaning are as specified in TS 29.060 [215] for GTP case
 * and in TS 29.274 [223] for eGTP case.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.2.
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
 * This field indicates how the SGSN/MME selected the APN to be used. The
 * values and their meaning are as specified in TS 29.060 [215] for GTP case
 * and in TS 29.274 [223] for eGTP case.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.2.
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
 * This field indicates how the SGSN/MME selected the APN to be used. The
 * values and their meaning are as specified in TS 29.060 [215] for GTP case
 * and in TS 29.274 [223] for eGTP case.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.2.
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
const APNSelectionMode_mSorNetworkProvidedSubscriptionVerified = APNSelectionMode.mSorNetworkProvidedSubscriptionVerified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSorNetworkProvidedSubscriptionVerified
 * @constant
 * @type {number}
 */
export
const mSorNetworkProvidedSubscriptionVerified = APNSelectionMode.mSorNetworkProvidedSubscriptionVerified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APNSelectionMode_mSProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const APNSelectionMode_mSProvidedSubscriptionNotVerified = APNSelectionMode.mSProvidedSubscriptionNotVerified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const mSProvidedSubscriptionNotVerified = APNSelectionMode.mSProvidedSubscriptionNotVerified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APNSelectionMode_networkProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const APNSelectionMode_networkProvidedSubscriptionNotVerified = APNSelectionMode.networkProvidedSubscriptionNotVerified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkProvidedSubscriptionNotVerified
 * @constant
 * @type {number}
 */
export
const networkProvidedSubscriptionNotVerified = APNSelectionMode.networkProvidedSubscriptionNotVerified; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APNSelectionMode: $.ASN1Decoder<APNSelectionMode> = $._decodeEnumerated;

export
const _encode_APNSelectionMode: $.ASN1Encoder<APNSelectionMode> = $._encodeEnumerated;

/* eslint-enable */
