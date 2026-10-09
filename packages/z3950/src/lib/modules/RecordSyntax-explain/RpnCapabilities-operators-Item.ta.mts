/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RpnCapabilities_operators_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RpnCapabilities-operators-Item ::= INTEGER {
 *     and (0),
 *     or (1),
 *     and-not (2),
 *     prox (3)
 * }
 * ```
 */
export
type RpnCapabilities_operators_Item = INTEGER;

/**
 * @summary RpnCapabilities_operators_Item_and
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_and: RpnCapabilities_operators_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and
 * @constant
 * @type {number}
 */
export
const and: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_and; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_or
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_or: RpnCapabilities_operators_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_or
 * @constant
 * @type {number}
 */
export
const or: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_or; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and_not
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_and_not: RpnCapabilities_operators_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and_not
 * @constant
 * @type {number}
 */
export
const and_not: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_and_not; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_prox
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_prox: RpnCapabilities_operators_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_prox
 * @constant
 * @type {number}
 */
export
const prox: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_prox; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RpnCapabilities_operators_Item = $._decodeInteger;
export const _encode_RpnCapabilities_operators_Item = $._encodeInteger;


/* eslint-enable */
