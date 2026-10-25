/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesResponse_operationStatus
 * @description
 * 
 * Status of the ES operation, as distinct from task status inside the package
 * (ANSI/NISO Z39.50-2003 §3.2.9.1.15, §3.2.9.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesResponse-operationStatus ::= INTEGER {
 *     done (1),
 *     accepted (2),
 *     failure (3)
 * }
 * ```
 */
export
type ExtendedServicesResponse_operationStatus = INTEGER;

/**
 * @summary ExtendedServicesResponse_operationStatus_done
 * @description
 * 
 * The request was accepted, the task is complete, and the results are in the
 * task package (ANSI/NISO Z39.50-2003 §3.2.9.1.15).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_done: 1 = 1 satisfies ExtendedServicesResponse_operationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_done
 * @description
 * 
 * Short name for `ExtendedServicesResponse_operationStatus_done`. Task
 * complete; package included (§3.2.9.1.15).
 * 
 * @constant
 * @type {number}
 */
export
const done: 1 = ExtendedServicesResponse_operationStatus_done; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_accepted
 * @description
 * 
 * The request was accepted and the task is queued or in process. This
 * corresponds to task status pending or active (ANSI/NISO Z39.50-2003
 * §3.2.9.1.15, §3.2.9.5).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_accepted: 2 = 2 satisfies ExtendedServicesResponse_operationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_accepted
 * @description
 * 
 * Short name for `ExtendedServicesResponse_operationStatus_accepted`. Task
 * queued or running (§3.2.9.1.15).
 * 
 * @constant
 * @type {number}
 */
export
const accepted: 2 = ExtendedServicesResponse_operationStatus_accepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_failure
 * @description
 * 
 * The request was refused. One or more diagnostics are supplied. The package
 * may never have been created because the request failed preliminary inspection
 * (ANSI/NISO Z39.50-2003 §3.2.9.1.15, §3.2.9.5).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_failure: 3 = 3 satisfies ExtendedServicesResponse_operationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_failure
 * @description
 * 
 * Short name for `ExtendedServicesResponse_operationStatus_failure`. Request
 * refused, with diagnostics (§3.2.9.1.15).
 * 
 * @constant
 * @type {number}
 */
export
const failure: 3 = ExtendedServicesResponse_operationStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesResponse_operationStatus: $.ASN1Decoder<ExtendedServicesResponse_operationStatus> = $._decodeInteger;
export const _encode_ExtendedServicesResponse_operationStatus: $.ASN1Encoder<ExtendedServicesResponse_operationStatus> = $._encodeInteger;


/* eslint-enable */
