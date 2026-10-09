/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortResponse_resultSetStatus
 * @description
 * 
 * Contents of the sorted result set when Sort fails (ANSI/NISO Z39.50-2003
 * §3.2.7.1.5). Supplied if and only if sort status is failure.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortResponse-resultSetStatus ::= INTEGER {
 *     empty (1),
 *     interim (2),
 *     unchanged (3),
 *     none (4)
 * }
 * ```
 */
export
type SortResponse_resultSetStatus = INTEGER;

/**
 * @summary SortResponse_resultSetStatus_empty
 * @description
 * 
 * The result set is empty (ANSI/NISO Z39.50-2003 §3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_empty: SortResponse_resultSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_empty
 * @description
 * 
 * Short name for `SortResponse_resultSetStatus_empty`. The result set is empty
 * (§3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const empty: SortResponse_resultSetStatus = SortResponse_resultSetStatus_empty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_interim
 * @description
 * 
 * Partial results are available and are not necessarily valid (ANSI/NISO
 * Z39.50-2003 §3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_interim: SortResponse_resultSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_interim
 * @description
 * 
 * Short name for `SortResponse_resultSetStatus_interim`. Partial results, not
 * necessarily valid (§3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const interim: SortResponse_resultSetStatus = SortResponse_resultSetStatus_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_unchanged
 * @description
 * 
 * The result set is unchanged. Applies only when the sorted name is one of the
 * input result sets (ANSI/NISO Z39.50-2003 §3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_unchanged: SortResponse_resultSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_unchanged
 * @description
 * 
 * Short name for `SortResponse_resultSetStatus_unchanged`. Input set left as it
 * was (§3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const unchanged: SortResponse_resultSetStatus = SortResponse_resultSetStatus_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_none
 * @description
 * 
 * No result set was created. Applies only when the sorted name is not one of
 * the input result sets (ANSI/NISO Z39.50-2003 §3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_none: SortResponse_resultSetStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_none
 * @description
 * 
 * Short name for `SortResponse_resultSetStatus_none`. No result set was created
 * (§3.2.7.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const none: SortResponse_resultSetStatus = SortResponse_resultSetStatus_none; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortResponse_resultSetStatus = $._decodeInteger;
export const _encode_SortResponse_resultSetStatus = $._encodeInteger;


/* eslint-enable */
