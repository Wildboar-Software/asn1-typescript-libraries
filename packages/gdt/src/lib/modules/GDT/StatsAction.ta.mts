/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StatsAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatsAction  ::=  INTEGER {
 *     sa-request  (0),
 *     sa-result   (1)
 * }
 * ```
 */
export
type StatsAction = INTEGER;

/**
 * @summary StatsAction_sa_request
 * @constant
 * @type {number}
 */
export
const StatsAction_sa_request = 0 satisfies StatsAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_request
 * @constant
 * @type {number}
 */
export
const sa_request = StatsAction_sa_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_result
 * @constant
 * @type {number}
 */
export
const StatsAction_sa_result = 1 satisfies StatsAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_result
 * @constant
 * @type {number}
 */
export
const sa_result = StatsAction_sa_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StatsAction = $._decodeInteger;
export const _encode_StatsAction = $._encodeInteger;


/* eslint-enable */
