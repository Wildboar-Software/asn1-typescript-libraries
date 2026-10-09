/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReportResponse_resourceReportStatus
 * @description
 * 
 * Whether the Resource-report response includes a report (ANSI/NISO Z39.50-2003
 * §3.2.6.3.3). Failure-5 and failure-6 apply only when version 3 is in force.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportResponse-resourceReportStatus ::= INTEGER {
 *     success (0),
 *     partial (1),
 *     failure-1 (2),
 *     failure-2 (3),
 *     failure-3 (4),
 *     failure-4 (5),
 *     failure-5 (6),
 *     failure-6 (7)
 * }
 * ```
 */
export
type ResourceReportResponse_resourceReportStatus = INTEGER;

/**
 * @summary ResourceReportResponse_resourceReportStatus_success
 * @description
 * 
 * A report is included, in the preferred format when the request named one
 * (ANSI/NISO Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_success: ResourceReportResponse_resourceReportStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_success
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_success`. Report
 * included in the preferred format (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const success: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_partial
 * @description
 * 
 * A report is included, but not in the preferred format. Applies only when the
 * request named a format (ANSI/NISO Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_partial: ResourceReportResponse_resourceReportStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_partial
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_partial`. Report
 * included in another format (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const partial: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_partial; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_1
 * @description
 * 
 * The server cannot supply a resource report (ANSI/NISO Z39.50-2003
 * §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_1: ResourceReportResponse_resourceReportStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_1
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_failure_1`.
 * Server cannot supply a report (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const failure_1: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_2
 * @description
 * 
 * The server ended the operation because of resource limits (ANSI/NISO
 * Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_2: ResourceReportResponse_resourceReportStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_2
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_failure_2`.
 * Operation ended for resource limits (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const failure_2: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_3
 * @description
 * 
 * Access-control failure (ANSI/NISO Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_3: ResourceReportResponse_resourceReportStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_3
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_failure_3`.
 * Access-control failure (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const failure_3: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_4
 * @description
 * 
 * Unspecified failure (ANSI/NISO Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_4: ResourceReportResponse_resourceReportStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_4
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_failure_4`.
 * Unspecified failure (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const failure_4: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_5
 * @description
 * 
 * No known operation has the requested id. Version 3 only (ANSI/NISO
 * Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_5: ResourceReportResponse_resourceReportStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_5
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_failure_5`.
 * Unknown operation id; version 3 (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const failure_5: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_6
 * @description
 * 
 * An operation with the requested id is still active. Version 3 only (ANSI/NISO
 * Z39.50-2003 §3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_6: ResourceReportResponse_resourceReportStatus = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_6
 * @description
 * 
 * Short name for `ResourceReportResponse_resourceReportStatus_failure_6`. That
 * operation is still active; version 3 (§3.2.6.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const failure_6: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_6; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ResourceReportResponse_resourceReportStatus: $.ASN1Decoder<ResourceReportResponse_resourceReportStatus> = $._decodeInteger;
export const _encode_ResourceReportResponse_resourceReportStatus: $.ASN1Encoder<ResourceReportResponse_resourceReportStatus> = $._encodeInteger;


/* eslint-enable */
