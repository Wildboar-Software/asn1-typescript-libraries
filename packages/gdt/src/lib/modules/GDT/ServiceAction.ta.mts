/* eslint-disable */
import {
    type INTEGER
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
const ServiceAction_srvca_request: 0 = 0 satisfies ServiceAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_request
 * @constant
 * @type {number}
 */
export
const srvca_request: 0 = ServiceAction_srvca_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_result
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_result: 1 = 1 satisfies ServiceAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_result
 * @constant
 * @type {number}
 */
export
const srvca_result: 1 = ServiceAction_srvca_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_default
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_default: 2 = 2 satisfies ServiceAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_default
 * @constant
 * @type {number}
 */
export
const srvca_default: 2 = ServiceAction_srvca_default; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_na
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_na: 3 = 3 satisfies ServiceAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_na
 * @constant
 * @type {number}
 */
export
const srvca_na: 3 = ServiceAction_srvca_na; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceAction: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ServiceAction: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
