/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_sort_key
 * @description
 * 
 * Sort-key failure (diag-1): too many keys (DIAG.1 condition 211) or a
 * duplicate key (212).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort-key ::= INTEGER {
 *     tooMany (1),
 *     -- too many sort keys
 *     duplicate (2)
 * }
 * ```
 */
export
type DiagFormat_sort_key = INTEGER;

/**
 * @summary DiagFormat_sort_key_tooMany
 * @description
 * 
 * Too many sort keys (DIAG.1 condition 211). Addinfo is the number.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_key_tooMany: DiagFormat_sort_key = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_tooMany
 * @description
 * 
 * Too many sort keys (DIAG.1 condition 211). Addinfo is the number.
 * 
 * @constant
 * @type {number}
 */
export
const tooMany: DiagFormat_sort_key = DiagFormat_sort_key_tooMany; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_duplicate
 * @description
 * 
 * Duplicate sort keys (DIAG.1 condition 212). Addinfo is the key.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_key_duplicate: DiagFormat_sort_key = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_key_duplicate
 * @description
 * 
 * Duplicate sort keys (DIAG.1 condition 212). Addinfo is the key.
 * 
 * @constant
 * @type {number}
 */
export
const duplicate: DiagFormat_sort_key = DiagFormat_sort_key_duplicate; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_sort_key: $.ASN1Decoder<DiagFormat_sort_key> = $._decodeInteger;
export const _encode_DiagFormat_sort_key: $.ASN1Encoder<DiagFormat_sort_key> = $._encodeInteger;


/* eslint-enable */
