/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortResponse_sortStatus
 * @description
 * 
 * Outcome of Sort (ANSI/NISO Z39.50-2003 §3.2.7.1.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortResponse-sortStatus ::= INTEGER {
 *     success (0),
 *     partial-1 (1),
 *     failure (2)
 * }
 * ```
 */
export
type SortResponse_sortStatus = INTEGER;

/**
 * @summary SortResponse_sortStatus_success
 * @description
 * 
 * The sort was performed (ANSI/NISO Z39.50-2003 §3.2.7.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_success: SortResponse_sortStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_success
 * @description
 * 
 * Short name for `SortResponse_sortStatus_success`. The sort was performed
 * (§3.2.7.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const success: SortResponse_sortStatus = SortResponse_sortStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_partial_1
 * @description
 * 
 * The sort was performed, and the server encountered records with missing
 * values in one or more sort elements (ANSI/NISO Z39.50-2003 §3.2.7.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_partial_1: SortResponse_sortStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_partial_1
 * @description
 * 
 * Short name for `SortResponse_sortStatus_partial_1`. Sort ran, with missing
 * values in one or more keys (§3.2.7.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const partial_1: SortResponse_sortStatus = SortResponse_sortStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_failure
 * @description
 * 
 * The sort was not performed. The response includes one or more diagnostics
 * (ANSI/NISO Z39.50-2003 §3.2.7.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_failure: SortResponse_sortStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_failure
 * @description
 * 
 * Short name for `SortResponse_sortStatus_failure`. The sort was not performed
 * (§3.2.7.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const failure: SortResponse_sortStatus = SortResponse_sortStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortResponse_sortStatus = $._decodeInteger;
export const _encode_SortResponse_sortStatus = $._encodeInteger;


/* eslint-enable */
