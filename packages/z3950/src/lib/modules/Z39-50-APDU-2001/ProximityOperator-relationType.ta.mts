/* eslint-disable */
import {
    type INTEGER
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
const ProximityOperator_relationType_lessThan = 1 satisfies ProximityOperator_relationType; /* LONG_NAMED_INTEGER_VALUE */

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
const lessThan = ProximityOperator_relationType_lessThan satisfies ProximityOperator_relationType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ProximityOperator_relationType_lessThanOrEqual = 2 satisfies ProximityOperator_relationType; /* LONG_NAMED_INTEGER_VALUE */

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
const lessThanOrEqual = ProximityOperator_relationType_lessThanOrEqual satisfies ProximityOperator_relationType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ProximityOperator_relationType_equal = 3 satisfies ProximityOperator_relationType; /* LONG_NAMED_INTEGER_VALUE */

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
const equal = ProximityOperator_relationType_equal satisfies ProximityOperator_relationType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ProximityOperator_relationType_greaterThanOrEqual = 4 satisfies ProximityOperator_relationType; /* LONG_NAMED_INTEGER_VALUE */

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
const greaterThanOrEqual = ProximityOperator_relationType_greaterThanOrEqual satisfies ProximityOperator_relationType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ProximityOperator_relationType_greaterThan = 5 satisfies ProximityOperator_relationType; /* LONG_NAMED_INTEGER_VALUE */

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
const greaterThan = ProximityOperator_relationType_greaterThan satisfies ProximityOperator_relationType; /* SHORT_NAMED_INTEGER_VALUE */

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
const ProximityOperator_relationType_notEqual = 6 satisfies ProximityOperator_relationType; /* LONG_NAMED_INTEGER_VALUE */

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
const notEqual = ProximityOperator_relationType_notEqual satisfies ProximityOperator_relationType; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProximityOperator_relationType: $.ASN1Decoder<ProximityOperator_relationType> = $._decodeInteger;
export const _encode_ProximityOperator_relationType: $.ASN1Encoder<ProximityOperator_relationType> = $._encodeInteger;


/* eslint-enable */
