/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScanResponse_scanStatus
 * @description
 * 
 * Result of Scan (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
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
 * @description
 * 
 * The response contains the number of term-list entries or surrogate
 * diagnostics that were requested (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_success: ScanResponse_scanStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_success
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_success`. Every requested entry is
 * present (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const success: ScanResponse_scanStatus = ScanResponse_scanStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_1
 * @description
 * 
 * Access control ended the operation before every expected entry could be
 * returned (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_1: ScanResponse_scanStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_1
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_partial_1`. Stopped by access control
 * (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const partial_1: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_2
 * @description
 * 
 * The expected entries do not fit in the response message (ANSI/NISO
 * Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_2: ScanResponse_scanStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_2
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_partial_2`. Entries do not fit in the
 * message (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const partial_2: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_3
 * @description
 * 
 * Resource control ended the operation at client request before every expected
 * entry could be returned (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_3: ScanResponse_scanStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_3
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_partial_3`. Stopped by resource
 * control at client request (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const partial_3: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_4
 * @description
 * 
 * Resource control at the server ended the operation before every expected
 * entry could be returned (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_4: ScanResponse_scanStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_4
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_partial_4`. Stopped by resource
 * control at the server (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const partial_4: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_5
 * @description
 * 
 * The term list has fewer entries, at the low end, the high end, or both, than
 * were requested (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_5: ScanResponse_scanStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_5
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_partial_5`. The term list is shorter
 * than requested (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const partial_5: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_failure
 * @description
 * 
 * None of the expected entries can be returned. One or more non-surrogate
 * diagnostics are returned (ANSI/NISO Z39.50-2003 §3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_failure: ScanResponse_scanStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_failure
 * @description
 * 
 * Short name for `ScanResponse_scanStatus_failure`. No expected entries;
 * non-surrogate diagnostics (§3.2.8.1.6).
 * 
 * @constant
 * @type {number}
 */
export
const failure: ScanResponse_scanStatus = ScanResponse_scanStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ScanResponse_scanStatus: $.ASN1Decoder<ScanResponse_scanStatus> = $._decodeInteger;
export const _encode_ScanResponse_scanStatus: $.ASN1Encoder<ScanResponse_scanStatus> = $._encodeInteger;


/* eslint-enable */
