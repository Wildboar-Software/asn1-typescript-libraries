/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SGSNMTLCSRecord_notificationToMSUser {
    notifyLocationAllowed = 0,
    notifyAndVerify_LocationAllowedIfNoResponse = 1,
    notifyAndVerify_LocationNotAllowedIfNoResponse = 2,
    locationNotAllowed = 3,
}

/**
 * @summary SGSNMTLCSRecord_notificationToMSUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNMTLCSRecord-notificationToMSUser ::= ENUMERATED {
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
type SGSNMTLCSRecord_notificationToMSUser = _enum_for_SGSNMTLCSRecord_notificationToMSUser | ENUMERATED;

/**
 * @summary SGSNMTLCSRecord_notificationToMSUser_notifyLocationAllowed
 * @constant
 * @type {number}
 */
export
const SGSNMTLCSRecord_notificationToMSUser_notifyLocationAllowed: _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyLocationAllowed = _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyLocationAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyLocationAllowed
 * @constant
 * @type {number}
 */
export
const notifyLocationAllowed: _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyLocationAllowed = SGSNMTLCSRecord_notificationToMSUser_notifyLocationAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse: _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyAndVerify_LocationAllowedIfNoResponse = _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyAndVerify_LocationAllowedIfNoResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationAllowedIfNoResponse: _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyAndVerify_LocationAllowedIfNoResponse = SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse: _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyAndVerify_LocationNotAllowedIfNoResponse = _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyAndVerify_LocationNotAllowedIfNoResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndVerify_LocationNotAllowedIfNoResponse
 * @constant
 * @type {number}
 */
export
const notifyAndVerify_LocationNotAllowedIfNoResponse: _enum_for_SGSNMTLCSRecord_notificationToMSUser.notifyAndVerify_LocationNotAllowedIfNoResponse = SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMTLCSRecord_notificationToMSUser_locationNotAllowed
 * @constant
 * @type {number}
 */
export
const SGSNMTLCSRecord_notificationToMSUser_locationNotAllowed: _enum_for_SGSNMTLCSRecord_notificationToMSUser.locationNotAllowed = _enum_for_SGSNMTLCSRecord_notificationToMSUser.locationNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationNotAllowed
 * @constant
 * @type {number}
 */
export
const locationNotAllowed: _enum_for_SGSNMTLCSRecord_notificationToMSUser.locationNotAllowed = SGSNMTLCSRecord_notificationToMSUser_locationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SGSNMTLCSRecord_notificationToMSUser: $.ASN1Decoder<SGSNMTLCSRecord_notificationToMSUser> = $._decodeEnumerated;

export
const _encode_SGSNMTLCSRecord_notificationToMSUser: $.ASN1Encoder<SGSNMTLCSRecord_notificationToMSUser> = $._encodeEnumerated;

/* eslint-enable */
