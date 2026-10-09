/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_sort_illegal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort-illegal ::= INTEGER {
 *     relation (1),
 *     -- illegal sort relation
 *     case (2),
 *     -- illegal case value
 *     action (3),
 *     -- illegal missing data action
 *     sort (4)
 * }
 * ```
 */
export
type DiagFormat_sort_illegal = INTEGER;

/**
 * @summary DiagFormat_sort_illegal_relation
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_relation: DiagFormat_sort_illegal = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_relation
 * @constant
 * @type {number}
 */
export
const relation: DiagFormat_sort_illegal = DiagFormat_sort_illegal_relation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_case_: DiagFormat_sort_illegal = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @constant
 * @type {number}
 */
export
const case_: DiagFormat_sort_illegal = DiagFormat_sort_illegal_case_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_action: DiagFormat_sort_illegal = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @constant
 * @type {number}
 */
export
const action: DiagFormat_sort_illegal = DiagFormat_sort_illegal_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_sort: DiagFormat_sort_illegal = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @constant
 * @type {number}
 */
export
const sort: DiagFormat_sort_illegal = DiagFormat_sort_illegal_sort; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_sort_illegal = $._decodeInteger;
export const _encode_DiagFormat_sort_illegal = $._encodeInteger;


/* eslint-enable */
