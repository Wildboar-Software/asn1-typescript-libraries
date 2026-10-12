/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED {
 *     point2Point,
 *     point2MultiPoint,
 *     broadcast
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_scope {
    point2Point = 0,
    point2MultiPoint = 1,
    broadcast = 2,
}

/**
 * @summary ActivityType_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED {
 *     point2Point,
 *     point2MultiPoint,
 *     broadcast
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_scope = _enum_for_ActivityType_scope;

/**
 * @summary ActivityType_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED {
 *     point2Point,
 *     point2MultiPoint,
 *     broadcast
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_scope = _enum_for_ActivityType_scope;

/**
 * @summary ActivityType_scope_point2Point
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_point2Point: ActivityType_scope = ActivityType_scope.point2Point; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary point2Point
 * @constant
 * @type {number}
 */
export
const point2Point: ActivityType_scope = ActivityType_scope.point2Point; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_scope_point2MultiPoint
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_point2MultiPoint: ActivityType_scope = ActivityType_scope.point2MultiPoint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary point2MultiPoint
 * @constant
 * @type {number}
 */
export
const point2MultiPoint: ActivityType_scope = ActivityType_scope.point2MultiPoint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_scope_broadcast
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_broadcast: ActivityType_scope = ActivityType_scope.broadcast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export
const broadcast: ActivityType_scope = ActivityType_scope.broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityType_scope: $.ASN1Decoder<ActivityType_scope> = $._decodeEnumerated;
export const _encode_ActivityType_scope: $.ASN1Encoder<ActivityType_scope> = $._encodeEnumerated;


/* eslint-enable */
