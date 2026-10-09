/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceControlRequest_partialResultsAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceControlRequest-partialResultsAvailable ::= INTEGER {
 *     subset (1),
 *     interim (2),
 *     none (3)
 * }
 * ```
 */
export
type ResourceControlRequest_partialResultsAvailable = INTEGER;

/**
 * @summary ResourceControlRequest_partialResultsAvailable_subset
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_subset: ResourceControlRequest_partialResultsAvailable = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_subset
 * @constant
 * @type {number}
 */
export
const subset: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_interim
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_interim: ResourceControlRequest_partialResultsAvailable = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_interim
 * @constant
 * @type {number}
 */
export
const interim: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_none
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_none: ResourceControlRequest_partialResultsAvailable = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_none
 * @constant
 * @type {number}
 */
export
const none: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_none; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ResourceControlRequest_partialResultsAvailable = $._decodeInteger;
export const _encode_ResourceControlRequest_partialResultsAvailable = $._encodeInteger;


/* eslint-enable */
