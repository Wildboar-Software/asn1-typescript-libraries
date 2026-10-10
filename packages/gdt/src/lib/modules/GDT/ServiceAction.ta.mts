/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAction  ::=  INTEGER {
 *     srvca-request   (0),  -- generic request
 *     srvca-result    (1),  -- generic result
 *     srvca-default   (2),  -- default action
 *     srvca-na        (3)   -- n/a
 * }
 * ```
 */
export
type ServiceAction = INTEGER;

/**
 * @summary ServiceAction_srvca_request
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_request: ServiceAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_request
 * @constant
 * @type {number}
 */
export
const srvca_request: ServiceAction = ServiceAction_srvca_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_result
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_result: ServiceAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_result
 * @constant
 * @type {number}
 */
export
const srvca_result: ServiceAction = ServiceAction_srvca_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_default
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_default: ServiceAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_default
 * @constant
 * @type {number}
 */
export
const srvca_default: ServiceAction = ServiceAction_srvca_default; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_na
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_na: ServiceAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_na
 * @constant
 * @type {number}
 */
export
const srvca_na: ServiceAction = ServiceAction_srvca_na; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceAction = $._decodeInteger;
export const _encode_ServiceAction = $._encodeInteger;


/* eslint-enable */
