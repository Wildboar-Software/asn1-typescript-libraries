/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DuplicateDetectionResponse_status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DuplicateDetectionResponse-status ::= INTEGER {
 *     success (0),
 *     failure (1)
 * }
 * ```
 */
export
type DuplicateDetectionResponse_status = INTEGER;

/**
 * @summary DuplicateDetectionResponse_status_success
 * @constant
 * @type {number}
 */
export
const DuplicateDetectionResponse_status_success: DuplicateDetectionResponse_status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_success
 * @constant
 * @type {number}
 */
export
const success: DuplicateDetectionResponse_status = DuplicateDetectionResponse_status_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_failure
 * @constant
 * @type {number}
 */
export
const DuplicateDetectionResponse_status_failure: DuplicateDetectionResponse_status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_failure
 * @constant
 * @type {number}
 */
export
const failure: DuplicateDetectionResponse_status = DuplicateDetectionResponse_status_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DuplicateDetectionResponse_status = $._decodeInteger;
export const _encode_DuplicateDetectionResponse_status = $._encodeInteger;


/* eslint-enable */
