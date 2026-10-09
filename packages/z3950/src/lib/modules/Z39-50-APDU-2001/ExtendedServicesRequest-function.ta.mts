/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesRequest_function
 * @description
 * 
 * What the ES request does to a task package (ANSI/NISO Z39.50-2003
 * §3.2.9.1.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest-function ::= INTEGER {
 *     create (1),
 *     delete (2),
 *     modify (3)
 * }
 * ```
 */
export
type ExtendedServicesRequest_function = INTEGER;

/**
 * @summary ExtendedServicesRequest_function_create
 * @description
 * 
 * Create a task package, named by package-name when that parameter is present
 * (ANSI/NISO Z39.50-2003 §3.2.9.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_create: ExtendedServicesRequest_function = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_create
 * @description
 * 
 * Short name for `ExtendedServicesRequest_function_create`. Create a task
 * package (§3.2.9.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const create: ExtendedServicesRequest_function = ExtendedServicesRequest_function_create; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_delete_
 * @description
 * 
 * Delete the named task package. If the task has not started, it should not be
 * started. If it is active, the server should terminate it or refuse the
 * request (ANSI/NISO Z39.50-2003 §3.2.9.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_delete_: ExtendedServicesRequest_function = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_delete_
 * @description
 * 
 * Short name for `ExtendedServicesRequest_function_delete_`. Delete the named
 * task package (§3.2.9.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const delete_: ExtendedServicesRequest_function = ExtendedServicesRequest_function_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_modify
 * @description
 * 
 * Replace task-package parameters with the values in this request. An omitted
 * optional parameter is left unchanged, so restoring a default means sending
 * that default (ANSI/NISO Z39.50-2003 §3.2.9.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_modify: ExtendedServicesRequest_function = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_modify
 * @description
 * 
 * Short name for `ExtendedServicesRequest_function_modify`. Replace parameters
 * on the named package (§3.2.9.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const modify: ExtendedServicesRequest_function = ExtendedServicesRequest_function_modify; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesRequest_function: $.ASN1Decoder<ExtendedServicesRequest_function> = $._decodeInteger;
export const _encode_ExtendedServicesRequest_function: $.ASN1Encoder<ExtendedServicesRequest_function> = $._encodeInteger;


/* eslint-enable */
