/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesRequest_waitAction
 * @description
 * 
 * Whether the ES response should wait for the task and whether it may include
 * the task package (ANSI/NISO Z39.50-2003 §3.2.9.1.13). If the operation
 * aborts, this is treated as do-not-send-task-package (§3.2.9.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest-waitAction ::= INTEGER {
 *     wait (1),
 *     waitIfPossible (2),
 *     dontWait (3),
 *     dontReturnPackage (4)
 * }
 * ```
 */
export
type ExtendedServicesRequest_waitAction = INTEGER;

/**
 * @summary ExtendedServicesRequest_waitAction_wait
 * @description
 * 
 * The server must finish the task before the ES response, unless the operation
 * aborts, and must include the task package. If it will not wait, it refuses
 * the request with operation status failure and a diagnostic (ANSI/NISO
 * Z39.50-2003 §3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_wait: ExtendedServicesRequest_waitAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_wait
 * @description
 * 
 * Short name for `ExtendedServicesRequest_waitAction_wait`. Finish the task,
 * then respond with the package (§3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const wait: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_wait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_waitIfPossible
 * @description
 * 
 * Finish the task before responding, and include the package, when the server
 * can. Otherwise behave as do-not-wait (ANSI/NISO Z39.50-2003 §3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_waitIfPossible: ExtendedServicesRequest_waitAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_waitIfPossible
 * @description
 * 
 * Short name for `ExtendedServicesRequest_waitAction_waitIfPossible`. Wait and
 * return the package when possible (§3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const waitIfPossible: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_waitIfPossible; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontWait
 * @description
 * 
 * The client does not ask the server to finish the task before responding. If
 * the server does finish in time, the response may include the package
 * (ANSI/NISO Z39.50-2003 §3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_dontWait: ExtendedServicesRequest_waitAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontWait
 * @description
 * 
 * Short name for `ExtendedServicesRequest_waitAction_dontWait`. Respond without
 * waiting; the package is optional (§3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const dontWait: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_dontWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontReturnPackage
 * @description
 * 
 * The server may run the task when it chooses and must not include the task
 * package in the response (ANSI/NISO Z39.50-2003 §3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_dontReturnPackage: ExtendedServicesRequest_waitAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontReturnPackage
 * @description
 * 
 * Short name for `ExtendedServicesRequest_waitAction_dontReturnPackage`. Do not
 * return the package (§3.2.9.1.13).
 * 
 * @constant
 * @type {number}
 */
export
const dontReturnPackage: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_dontReturnPackage; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesRequest_waitAction = $._decodeInteger;
export const _encode_ExtendedServicesRequest_waitAction = $._encodeInteger;


/* eslint-enable */
