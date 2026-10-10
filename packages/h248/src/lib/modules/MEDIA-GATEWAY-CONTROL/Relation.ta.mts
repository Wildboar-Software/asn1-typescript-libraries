/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Relation {
    greaterThan = 0,
    smallerThan = 1,
    unequalTo = 2,
}

/**
 * @summary Relation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Relation  ::=  ENUMERATED
 *     {
 *         greaterThan(0),
 *         smallerThan(1),
 *         unequalTo(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Relation = _enum_for_Relation | ENUMERATED;

/**
 * @summary Relation_greaterThan
 * @constant
 * @type {number}
 */
export
const Relation_greaterThan: Relation = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greaterThan
 * @constant
 * @type {number}
 */
export
const greaterThan: Relation = Relation_greaterThan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Relation_smallerThan
 * @constant
 * @type {number}
 */
export
const Relation_smallerThan: Relation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smallerThan
 * @constant
 * @type {number}
 */
export
const smallerThan: Relation = Relation_smallerThan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Relation_unequalTo
 * @constant
 * @type {number}
 */
export
const Relation_unequalTo: Relation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unequalTo
 * @constant
 * @type {number}
 */
export
const unequalTo: Relation = Relation_unequalTo; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Relation = $._decodeEnumerated;
export const _encode_Relation = $._encodeEnumerated;


/* eslint-enable */
