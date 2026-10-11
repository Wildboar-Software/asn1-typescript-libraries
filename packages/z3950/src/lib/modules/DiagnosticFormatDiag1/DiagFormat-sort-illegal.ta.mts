/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_sort_illegal
 * @description
 * 
 * The sort was illegal (diag-1): relation (214), case (215), missing-data
 * action (216), or the sort itself (237). DIAG.1. Condition 213 is the separate
 * case of an unsupported missing-data action.
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
 * @description
 * 
 * Illegal sort relation (DIAG.1 condition 214). Addinfo is the relation.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_relation: DiagFormat_sort_illegal = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_relation
 * @description
 * 
 * Illegal sort relation (DIAG.1 condition 214). Addinfo is the relation.
 * 
 * @constant
 * @type {number}
 */
export
const relation: DiagFormat_sort_illegal = DiagFormat_sort_illegal_relation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @description
 * 
 * Illegal case value (DIAG.1 condition 215). Addinfo is the value.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_case_: DiagFormat_sort_illegal = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @description
 * 
 * Illegal case value (DIAG.1 condition 215). Addinfo is the value.
 * 
 * @constant
 * @type {number}
 */
export
const case_: DiagFormat_sort_illegal = DiagFormat_sort_illegal_case_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @description
 * 
 * Illegal missing-data action (DIAG.1 condition 216). Addinfo is the value.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_action: DiagFormat_sort_illegal = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @description
 * 
 * Illegal missing-data action (DIAG.1 condition 216). Addinfo is the value.
 * 
 * @constant
 * @type {number}
 */
export
const action: DiagFormat_sort_illegal = DiagFormat_sort_illegal_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @description
 * 
 * Illegal sort (DIAG.1 condition 237).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_sort: DiagFormat_sort_illegal = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @description
 * 
 * Illegal sort (DIAG.1 condition 237).
 * 
 * @constant
 * @type {number}
 */
export
const sort: DiagFormat_sort_illegal = DiagFormat_sort_illegal_sort; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_sort_illegal: $.ASN1Decoder<DiagFormat_sort_illegal> = $._decodeInteger;
export const _encode_DiagFormat_sort_illegal: $.ASN1Encoder<DiagFormat_sort_illegal> = $._encodeInteger;


/* eslint-enable */
