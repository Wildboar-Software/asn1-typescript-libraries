/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionProblem {
    mms_eos_not_subcribed = 0,
    mts_eos_not_subcribed = 1,
}

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem_mms_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mms_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionProblem_mts_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mts_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SubscriptionProblem = $._decodeEnumerated;
export const _encode_SubscriptionProblem = $._encodeEnumerated;


/* eslint-enable */
