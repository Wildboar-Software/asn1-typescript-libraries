/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED {
 *     toTarget,
 *     fromTarget
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_direction {
    toTarget = 0,
    fromTarget = 1,
}

/**
 * @summary ActivityType_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED {
 *     toTarget,
 *     fromTarget
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_direction = _enum_for_ActivityType_direction;

/**
 * @summary ActivityType_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED {
 *     toTarget,
 *     fromTarget
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_direction = _enum_for_ActivityType_direction;

/**
 * @summary ActivityType_direction_toTarget
 * @constant
 * @type {number}
 */
export
const ActivityType_direction_toTarget: ActivityType_direction = ActivityType_direction.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: ActivityType_direction = ActivityType_direction.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_direction_fromTarget
 * @constant
 * @type {number}
 */
export
const ActivityType_direction_fromTarget: ActivityType_direction = ActivityType_direction.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: ActivityType_direction = ActivityType_direction.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityType_direction: $.ASN1Decoder<ActivityType_direction> = $._decodeEnumerated;
export const _encode_ActivityType_direction: $.ASN1Encoder<ActivityType_direction> = $._encodeEnumerated;


/* eslint-enable */
