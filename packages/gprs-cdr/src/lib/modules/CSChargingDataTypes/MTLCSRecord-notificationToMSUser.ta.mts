/* eslint-disable */
import {
    type ENUMERATED
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
const MTLCSRecord_notificationToMSUser_notifyLocationAllowed: _enum_for_MTLCSRecord_notificationToMSUser.notifyLocationAllowed = _enum_for_MTLCSRecord_notificationToMSUser.notifyLocationAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyLocationAllowed
 * @constant
 * @type {number}
 */
export
const notifyLocationAllowed: _enum_for_MTLCSRecord_notificationToMSUser.notifyLocationAllowed = MTLCSRecord_notificationToMSUser_notifyLocationAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse: _enum_for_MTLCSRecord_notificationToMSUser.notifyAndVerify_LocationAllowedIfNoResponse = _enum_for_MTLCSRecord_notificationToMSUser.notifyAndVerify_LocationAllowedIfNoResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationAllowedIfNoResponse: _enum_for_MTLCSRecord_notificationToMSUser.notifyAndVerify_LocationAllowedIfNoResponse = MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse: _enum_for_MTLCSRecord_notificationToMSUser.notifyAndVerify_LocationNotAllowedIfNoResponse = _enum_for_MTLCSRecord_notificationToMSUser.notifyAndVerify_LocationNotAllowedIfNoResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationNotAllowedIfNoResponse: _enum_for_MTLCSRecord_notificationToMSUser.notifyAndVerify_LocationNotAllowedIfNoResponse = MTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MTLCSRecord_notificationToMSUser_locationNotAllowed
 * @constant
 * @type {number}
 */
export
const MTLCSRecord_notificationToMSUser_locationNotAllowed: _enum_for_MTLCSRecord_notificationToMSUser.locationNotAllowed = _enum_for_MTLCSRecord_notificationToMSUser.locationNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationNotAllowed
 * @constant
 * @type {number}
 */
export
const locationNotAllowed: _enum_for_MTLCSRecord_notificationToMSUser.locationNotAllowed = MTLCSRecord_notificationToMSUser_locationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MTLCSRecord_notificationToMSUser: $.ASN1Decoder<MTLCSRecord_notificationToMSUser> = $._decodeEnumerated;

export
const _encode_MTLCSRecord_notificationToMSUser: $.ASN1Encoder<MTLCSRecord_notificationToMSUser> = $._encodeEnumerated;

/* eslint-enable */
