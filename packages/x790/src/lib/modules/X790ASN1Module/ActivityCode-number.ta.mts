/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityCode_number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityCode-number ::= INTEGER {
 *     approved(0), assign(1), cancel(2), clear(3), close(4), defer(5),
 *     dispatch(6), refer(7), release(8), re-open(9), repair(10),
 *     test(11), transfer(12)
 * }
 * ```
 */
export
type ActivityCode_number = INTEGER;

/**
 * @summary ActivityCode_number_approved
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_approved = 0 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_approved
 * @constant
 * @type {number}
 */
export
const approved = ActivityCode_number_approved; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_assign
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_assign = 1 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_assign
 * @constant
 * @type {number}
 */
export
const assign = ActivityCode_number_assign; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_cancel
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_cancel = 2 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_cancel
 * @constant
 * @type {number}
 */
export
const cancel = ActivityCode_number_cancel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_clear
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_clear = 3 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_clear
 * @constant
 * @type {number}
 */
export
const clear = ActivityCode_number_clear; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_close
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_close = 4 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_close
 * @constant
 * @type {number}
 */
export
const close = ActivityCode_number_close; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_defer
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_defer = 5 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_defer
 * @constant
 * @type {number}
 */
export
const defer = ActivityCode_number_defer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_dispatch
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_dispatch = 6 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_dispatch
 * @constant
 * @type {number}
 */
export
const dispatch = ActivityCode_number_dispatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_refer
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_refer = 7 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_refer
 * @constant
 * @type {number}
 */
export
const refer = ActivityCode_number_refer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_release
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_release = 8 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_release
 * @constant
 * @type {number}
 */
export
const release = ActivityCode_number_release; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_re_open
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_re_open = 9 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_re_open
 * @constant
 * @type {number}
 */
export
const re_open = ActivityCode_number_re_open; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_repair
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_repair = 10 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_repair
 * @constant
 * @type {number}
 */
export
const repair = ActivityCode_number_repair; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_test
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_test = 11 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_test
 * @constant
 * @type {number}
 */
export
const test = ActivityCode_number_test; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_transfer
 * @constant
 * @type {number}
 */
export
const ActivityCode_number_transfer = 12 satisfies ActivityCode_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivityCode_number_transfer
 * @constant
 * @type {number}
 */
export
const transfer = ActivityCode_number_transfer; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ActivityCode_number = $._decodeInteger;
export const _encode_ActivityCode_number = $._encodeInteger;


/* eslint-enable */
