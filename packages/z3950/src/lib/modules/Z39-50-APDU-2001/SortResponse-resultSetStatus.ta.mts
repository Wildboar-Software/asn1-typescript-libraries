/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortResponse_resultSetStatus
 * @description
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
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_empty: SortResponse_resultSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_empty
 * @constant
 * @type {number}
 */
export
const empty: SortResponse_resultSetStatus = SortResponse_resultSetStatus_empty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_interim: SortResponse_resultSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const interim: SortResponse_resultSetStatus = SortResponse_resultSetStatus_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_unchanged
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_unchanged: SortResponse_resultSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_unchanged
 * @constant
 * @type {number}
 */
export
const unchanged: SortResponse_resultSetStatus = SortResponse_resultSetStatus_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_none: SortResponse_resultSetStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const none: SortResponse_resultSetStatus = SortResponse_resultSetStatus_none; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortResponse_resultSetStatus = $._decodeInteger;
export const _encode_SortResponse_resultSetStatus = $._encodeInteger;


/* eslint-enable */
