/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PerceivedTroubleSeverity_number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerceivedTroubleSeverity-number ::= INTEGER {
 *     outOfService(0),
 *     backInService(1),
 *     serviceImpairment(2),
 *     nonServiceAffectingTrouble(3)
 * }
 * ```
 */
export
type PerceivedTroubleSeverity_number = INTEGER;

/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_outOfService = 0 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService = PerceivedTroubleSeverity_number_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_backInService = 1 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export
const backInService = PerceivedTroubleSeverity_number_backInService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_serviceImpairment = 2 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export
const serviceImpairment = PerceivedTroubleSeverity_number_serviceImpairment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_nonServiceAffectingTrouble = 3 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export
const nonServiceAffectingTrouble = PerceivedTroubleSeverity_number_nonServiceAffectingTrouble; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PerceivedTroubleSeverity_number = $._decodeInteger;
export const _encode_PerceivedTroubleSeverity_number = $._encodeInteger;


/* eslint-enable */
