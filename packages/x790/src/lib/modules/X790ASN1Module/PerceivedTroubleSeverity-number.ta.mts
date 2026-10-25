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
const PerceivedTroubleSeverity_number_outOfService: 0 = 0 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: 0 = PerceivedTroubleSeverity_number_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_backInService: 1 = 1 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export
const backInService: 1 = PerceivedTroubleSeverity_number_backInService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_serviceImpairment: 2 = 2 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export
const serviceImpairment: 2 = PerceivedTroubleSeverity_number_serviceImpairment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export
const PerceivedTroubleSeverity_number_nonServiceAffectingTrouble: 3 = 3 satisfies PerceivedTroubleSeverity_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export
const nonServiceAffectingTrouble: 3 = PerceivedTroubleSeverity_number_nonServiceAffectingTrouble; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PerceivedTroubleSeverity_number: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_PerceivedTroubleSeverity_number: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
