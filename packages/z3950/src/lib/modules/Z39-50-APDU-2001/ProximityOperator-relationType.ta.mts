/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProximityOperator_relationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityOperator-relationType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProximityOperator_relationType = INTEGER;

/**
 * @summary ProximityOperator_relationType_lessThan
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_lessThan: ProximityOperator_relationType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_lessThan
 * @constant
 * @type {number}
 */
export
const lessThan: ProximityOperator_relationType = ProximityOperator_relationType_lessThan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_lessThanOrEqual
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_lessThanOrEqual: ProximityOperator_relationType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_lessThanOrEqual
 * @constant
 * @type {number}
 */
export
const lessThanOrEqual: ProximityOperator_relationType = ProximityOperator_relationType_lessThanOrEqual; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_equal
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_equal: ProximityOperator_relationType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_equal
 * @constant
 * @type {number}
 */
export
const equal: ProximityOperator_relationType = ProximityOperator_relationType_equal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThanOrEqual
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_greaterThanOrEqual: ProximityOperator_relationType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThanOrEqual
 * @constant
 * @type {number}
 */
export
const greaterThanOrEqual: ProximityOperator_relationType = ProximityOperator_relationType_greaterThanOrEqual; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThan
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_greaterThan: ProximityOperator_relationType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_greaterThan
 * @constant
 * @type {number}
 */
export
const greaterThan: ProximityOperator_relationType = ProximityOperator_relationType_greaterThan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_notEqual
 * @constant
 * @type {number}
 */
export
const ProximityOperator_relationType_notEqual: ProximityOperator_relationType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProximityOperator_relationType_notEqual
 * @constant
 * @type {number}
 */
export
const notEqual: ProximityOperator_relationType = ProximityOperator_relationType_notEqual; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProximityOperator_relationType = $._decodeInteger;
export const _encode_ProximityOperator_relationType = $._encodeInteger;


/* eslint-enable */
