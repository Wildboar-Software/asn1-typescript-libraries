/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MTLCSRecord_notificationToMSUser {
    notifyLocationAllowed = 0,
    notifyAndVerify_LocationAllowedIfNoResponse = 1,
    notifyAndVerify_LocationNotAllowedIfNoResponse = 2,
    locationNotAllowed = 3,
}

/**
 * @summary MTLCSRecord_notificationToMSUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTLCSRecord-notificationToMSUser ::= ENUMERATED {
 *    notifyLocationAllowed                             ( 0 ),
 *    notifyAndVerify-LocationAllowedIfNoResponse       ( 1 ),
 *    notifyAndVerify-LocationNotAllowedIfNoResponse    ( 2 ),
 *    ... ,
 *    locationNotAllowed                                ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MTLCSRecord_notificationToMSUser = _enum_for_MTLCSRecord_notificationToMSUser | ENUMERATED;

/**
 * @summary MTLCSRecord_notificationToMSUser_notifyLocationAllowed
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_notifyLocationAllowed: MTLCSRecord_notificationToMSUser = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyLocationAllowed
 * @constant
 * @type {number}
 */
export
const notifyLocationAllowed: MTLCSRecord_notificationToMSUser = MTLCSRecord_notificationToMSUser_notifyLocationAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse: MTLCSRecord_notificationToMSUser = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationAllowedIfNoResponse: MTLCSRecord_notificationToMSUser = MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse: MTLCSRecord_notificationToMSUser = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationNotAllowedIfNoResponse: MTLCSRecord_notificationToMSUser = MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MTLCSRecord_notificationToMSUser_locationNotAllowed
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_locationNotAllowed: MTLCSRecord_notificationToMSUser = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationNotAllowed
 * @constant
 * @type {number}
 */
export
const locationNotAllowed: MTLCSRecord_notificationToMSUser = MTLCSRecord_notificationToMSUser_locationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MTLCSRecord_notificationToMSUser: $.ASN1Decoder<MTLCSRecord_notificationToMSUser> = $._decodeEnumerated;

export
const _encode_MTLCSRecord_notificationToMSUser: $.ASN1Encoder<MTLCSRecord_notificationToMSUser> = $._encodeEnumerated;

/* eslint-enable */
