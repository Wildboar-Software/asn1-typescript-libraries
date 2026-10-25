/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionIDType  ::=  ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionIDType {
    eND_USER_E164 = 0,
    eND_USER_IMSI = 1,
    eND_USER_SIP_URI = 2,
    eND_USER_NAI = 3,
    eND_USER_PRIVATE = 4,
}

/**
 * @summary SubscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionIDType  ::=  ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionIDType = _enum_for_SubscriptionIDType;

/**
 * @summary SubscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionIDType  ::=  ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionIDType = _enum_for_SubscriptionIDType;

/**
 * @summary SubscriptionIDType_eND_USER_E164
 * @constant
 * @type {number}
 */
export
const SubscriptionIDType_eND_USER_E164 = SubscriptionIDType.eND_USER_E164 satisfies SubscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_E164
 * @constant
 * @type {number}
 */
export
const eND_USER_E164 = SubscriptionIDType.eND_USER_E164 satisfies SubscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionIDType_eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const SubscriptionIDType_eND_USER_IMSI = SubscriptionIDType.eND_USER_IMSI satisfies SubscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const eND_USER_IMSI = SubscriptionIDType.eND_USER_IMSI satisfies SubscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionIDType_eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const SubscriptionIDType_eND_USER_SIP_URI = SubscriptionIDType.eND_USER_SIP_URI satisfies SubscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const eND_USER_SIP_URI = SubscriptionIDType.eND_USER_SIP_URI satisfies SubscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionIDType_eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const SubscriptionIDType_eND_USER_NAI = SubscriptionIDType.eND_USER_NAI satisfies SubscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const eND_USER_NAI = SubscriptionIDType.eND_USER_NAI satisfies SubscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionIDType_eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const SubscriptionIDType_eND_USER_PRIVATE = SubscriptionIDType.eND_USER_PRIVATE satisfies SubscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const eND_USER_PRIVATE = SubscriptionIDType.eND_USER_PRIVATE satisfies SubscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SubscriptionIDType: $.ASN1Decoder<SubscriptionIDType> = $._decodeEnumerated;

export
const _encode_SubscriptionIDType: $.ASN1Encoder<SubscriptionIDType> = $._encodeEnumerated;

/* eslint-enable */
