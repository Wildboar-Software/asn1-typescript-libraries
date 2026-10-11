/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DuplicateDetectionResponse_status
 * @description
 * 
 * Whether duplicate detection produced the output result set (ANSI/NISO
 * Z39.50-2003 §3.2.7.2.7).
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
 * @description
 * 
 * The output result set was built. The response includes its size (ANSI/NISO
 * Z39.50-2003 §3.2.7.2.7, §3.2.7.2.8).
 * 
 * @constant
 * @type {number}
 */
export
const DuplicateDetectionResponse_status_success: DuplicateDetectionResponse_status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_success
 * @description
 * 
 * Short name for `DuplicateDetectionResponse_status_success`. The output result
 * set was built (§3.2.7.2.7).
 * 
 * @constant
 * @type {number}
 */
export
const success: DuplicateDetectionResponse_status = DuplicateDetectionResponse_status_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_failure
 * @description
 * 
 * The request failed. At least one diagnostic is included (ANSI/NISO
 * Z39.50-2003 §3.2.7.2.7, §3.2.7.2.9).
 * 
 * @constant
 * @type {number}
 */
export
const DuplicateDetectionResponse_status_failure: DuplicateDetectionResponse_status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_failure
 * @description
 * 
 * Short name for `DuplicateDetectionResponse_status_failure`. The request
 * failed (§3.2.7.2.7).
 * 
 * @constant
 * @type {number}
 */
export
const failure: DuplicateDetectionResponse_status = DuplicateDetectionResponse_status_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DuplicateDetectionResponse_status: $.ASN1Decoder<DuplicateDetectionResponse_status> = $._decodeInteger;
export const _encode_DuplicateDetectionResponse_status: $.ASN1Encoder<DuplicateDetectionResponse_status> = $._encodeInteger;


/* eslint-enable */
