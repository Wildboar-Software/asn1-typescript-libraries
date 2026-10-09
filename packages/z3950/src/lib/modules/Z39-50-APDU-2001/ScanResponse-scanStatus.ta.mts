/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScanResponse_scanStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScanResponse-scanStatus ::= INTEGER {
 *     success (0),
 *     partial-1 (1),
 *     partial-2 (2),
 *     partial-3 (3),
 *     partial-4 (4),
 *     partial-5 (5),
 *     failure (6)
 * }
 * ```
 */
export
type ScanResponse_scanStatus = INTEGER;

/**
 * @summary ScanResponse_scanStatus_success
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_success: ScanResponse_scanStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_success
 * @constant
 * @type {number}
 */
export
const success: ScanResponse_scanStatus = ScanResponse_scanStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_1
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_1: ScanResponse_scanStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_1
 * @constant
 * @type {number}
 */
export
const partial_1: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_2
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_2: ScanResponse_scanStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_2
 * @constant
 * @type {number}
 */
export
const partial_2: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_3
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_3: ScanResponse_scanStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_3
 * @constant
 * @type {number}
 */
export
const partial_3: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_4
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_4: ScanResponse_scanStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_4
 * @constant
 * @type {number}
 */
export
const partial_4: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_5
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_5: ScanResponse_scanStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_5
 * @constant
 * @type {number}
 */
export
const partial_5: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_failure
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_failure: ScanResponse_scanStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: ScanResponse_scanStatus = ScanResponse_scanStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ScanResponse_scanStatus = $._decodeInteger;
export const _encode_ScanResponse_scanStatus = $._encodeInteger;


/* eslint-enable */
