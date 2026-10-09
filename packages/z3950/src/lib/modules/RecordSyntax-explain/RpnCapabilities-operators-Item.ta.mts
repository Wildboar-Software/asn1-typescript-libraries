/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RpnCapabilities_operators_Item
 * @description
 * One operator in the RPN operator list. If that list is omitted, all four
 * operators are supported. AND is the intersection of the two operand sets, OR
 * is their union, and AND-NOT is the left set minus the right set. Prox is the
 * proximity operator. ANSI/NISO Z39.50-2003 §3.7.1.
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
 * @description
 * AND: the result is the intersection of the left and right operand sets.
 * ANSI/NISO Z39.50-2003 §3.7.1.
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_and: RpnCapabilities_operators_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and
 * @description
 * Short name for `RpnCapabilities_operators_Item_and`.
 * @constant
 * @type {number}
 */
export
const and: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_and; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_or
 * @description
 * OR: the result is the union of the left and right operand sets. ANSI/NISO
 * Z39.50-2003 §3.7.1.
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_or: RpnCapabilities_operators_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_or
 * @description
 * Short name for `RpnCapabilities_operators_Item_or`.
 * @constant
 * @type {number}
 */
export
const or: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_or; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and_not
 * @description
 * AND-NOT: records in the left operand set that are not in the right operand
 * set. ANSI/NISO Z39.50-2003 §3.7.1.
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_and_not: RpnCapabilities_operators_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and_not
 * @description
 * Short name for `RpnCapabilities_operators_Item_and_not`.
 * @constant
 * @type {number}
 */
export
const and_not: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_and_not; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_prox
 * @description
 * Proximity. For a type-1 query this operator is valid only in version 3; for
 * type-101 it is valid in version 2 and version 3. ANSI/NISO Z39.50-2003 §3.7.
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_prox: RpnCapabilities_operators_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_prox
 * @description
 * Short name for `RpnCapabilities_operators_Item_prox`.
 * @constant
 * @type {number}
 */
export
const prox: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_prox; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RpnCapabilities_operators_Item: $.ASN1Decoder<RpnCapabilities_operators_Item> = $._decodeInteger;
export const _encode_RpnCapabilities_operators_Item: $.ASN1Encoder<RpnCapabilities_operators_Item> = $._encodeInteger;


/* eslint-enable */
