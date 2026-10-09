/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesRequest_function
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest-function ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedServicesRequest_function = INTEGER;

/**
 * @summary ExtendedServicesRequest_function_create
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_create: ExtendedServicesRequest_function = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_create
 * @constant
 * @type {number}
 */
export
const create: ExtendedServicesRequest_function = ExtendedServicesRequest_function_create; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_delete_
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_delete_: ExtendedServicesRequest_function = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_delete_
 * @constant
 * @type {number}
 */
export
const delete_: ExtendedServicesRequest_function = ExtendedServicesRequest_function_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_modify
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_function_modify: ExtendedServicesRequest_function = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_function_modify
 * @constant
 * @type {number}
 */
export
const modify: ExtendedServicesRequest_function = ExtendedServicesRequest_function_modify; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesRequest_function = $._decodeInteger;
export const _encode_ExtendedServicesRequest_function = $._encodeInteger;


/* eslint-enable */
