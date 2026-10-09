/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProximityOperator_relationType
 * @description
 * 
 * Comparison of the positional difference with `distance` in a proximity test
 * (ANSI/NISO Z39.50-2003 §3.7.2.1). With the ordered flag true, the difference
 * is right minus left. With it false, the difference is the absolute value.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityOperator-relationType ::= INTEGER {
 *     lessThan (1),
 *     lessThanOrEqual (2),
 *     equal (3),
 *     greaterThanOrEqual (4),
 *     greaterThan (5),
 *     notEqual (6)
 * }
 * ```
 */
export
type ProximityOperator_relationType = INTEGER;

/**
 * @summary ProximityOperator_relationType_lessThan
 * @description
 * 
 * The positional difference is less than `distance` (ANSI/NISO Z39.50-2003
 * §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_lessThan: ProximityOperator_relationType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_lessThan
 * @description
 * 
 * Short name for `ProximityOperator_relationType_lessThan`. The positional
 * difference is less than `distance` (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const lessThan: ProximityOperator_relationType = ProximityOperator_relationType_lessThan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_lessThanOrEqual
 * @description
 * 
 * The positional difference is less than or equal to `distance`. Distance 1
 * means the same unit or adjacent units (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_lessThanOrEqual: ProximityOperator_relationType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_lessThanOrEqual
 * @description
 * 
 * Short name for `ProximityOperator_relationType_lessThanOrEqual`. Difference
 * less than or equal to `distance` (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const lessThanOrEqual: ProximityOperator_relationType = ProximityOperator_relationType_lessThanOrEqual; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_equal
 * @description
 * 
 * The positional difference equals `distance`. Distance 0 means the same unit
 * (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_equal: ProximityOperator_relationType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_equal
 * @description
 * 
 * Short name for `ProximityOperator_relationType_equal`. The positional
 * difference equals `distance` (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const equal: ProximityOperator_relationType = ProximityOperator_relationType_equal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThanOrEqual
 * @description
 * 
 * The positional difference is greater than or equal to `distance` (ANSI/NISO
 * Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_greaterThanOrEqual: ProximityOperator_relationType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThanOrEqual
 * @description
 * 
 * Short name for `ProximityOperator_relationType_greaterThanOrEqual`.
 * Difference greater than or equal to `distance` (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const greaterThanOrEqual: ProximityOperator_relationType = ProximityOperator_relationType_greaterThanOrEqual; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThan
 * @description
 * 
 * The positional difference is greater than `distance` (ANSI/NISO Z39.50-2003
 * §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_greaterThan: ProximityOperator_relationType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThan
 * @description
 * 
 * Short name for `ProximityOperator_relationType_greaterThan`. The positional
 * difference is greater than `distance` (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const greaterThan: ProximityOperator_relationType = ProximityOperator_relationType_greaterThan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_notEqual
 * @description
 * 
 * The positional difference differs from `distance` (ANSI/NISO Z39.50-2003
 * §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_notEqual: ProximityOperator_relationType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_notEqual
 * @description
 * 
 * Short name for `ProximityOperator_relationType_notEqual`. The positional
 * difference differs from `distance` (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const notEqual: ProximityOperator_relationType = ProximityOperator_relationType_notEqual; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProximityOperator_relationType: $.ASN1Decoder<ProximityOperator_relationType> = $._decodeInteger;
export const _encode_ProximityOperator_relationType: $.ASN1Encoder<ProximityOperator_relationType> = $._encodeInteger;


/* eslint-enable */
