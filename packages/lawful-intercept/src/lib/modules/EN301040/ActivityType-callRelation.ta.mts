/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_callRelation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-callRelation ::= ENUMERATED {
 *     begin,
 *     end,
 *     continue,
 *     report
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_callRelation {
    begin = 0,
    end = 1,
    continue_ = 2,
    report = 3,
}

/**
 * @summary ActivityType_callRelation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-callRelation ::= ENUMERATED {
 *     begin,
 *     end,
 *     continue,
 *     report
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_callRelation = _enum_for_ActivityType_callRelation;

/**
 * @summary ActivityType_callRelation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-callRelation ::= ENUMERATED {
 *     begin,
 *     end,
 *     continue,
 *     report
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_callRelation = _enum_for_ActivityType_callRelation;

/**
 * @summary ActivityType_callRelation_begin
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_begin: ActivityType_callRelation = ActivityType_callRelation.begin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary begin
 * @constant
 * @type {number}
 */
export
const begin: ActivityType_callRelation = ActivityType_callRelation.begin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_callRelation_end
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_end: ActivityType_callRelation = ActivityType_callRelation.end; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary end
 * @constant
 * @type {number}
 */
export
const end: ActivityType_callRelation = ActivityType_callRelation.end; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_callRelation_continue_
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_continue_: ActivityType_callRelation = ActivityType_callRelation.continue_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continue_
 * @constant
 * @type {number}
 */
export
const continue_: ActivityType_callRelation = ActivityType_callRelation.continue_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_callRelation_report
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_report: ActivityType_callRelation = ActivityType_callRelation.report; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary report
 * @constant
 * @type {number}
 */
export
const report: ActivityType_callRelation = ActivityType_callRelation.report; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityType_callRelation: $.ASN1Decoder<ActivityType_callRelation> = $._decodeEnumerated;
export const _encode_ActivityType_callRelation: $.ASN1Encoder<ActivityType_callRelation> = $._encodeEnumerated;


/* eslint-enable */
