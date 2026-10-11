/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceControlRequest_partialResultsAvailable
 * @description
 * 
 * How complete a Search result set is when the server sends a Resource-control
 * request (ANSI/NISO Z39.50-2003 §3.2.6.1.2). Meaningful only during Search. If
 * the client stops the search and result-set-wanted is on, subset and interim
 * mean the server will accept later Present requests. `none` means the server
 * need not. While the operation is not suspended, this picture can change. The
 * Search response is authoritative.
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
 * @description
 * 
 * Partial, valid results are available (ANSI/NISO Z39.50-2003 §3.2.6.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_subset: ResourceControlRequest_partialResultsAvailable = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_subset
 * @description
 * 
 * Short name for `ResourceControlRequest_partialResultsAvailable_subset`.
 * Partial, valid results (§3.2.6.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const subset: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_interim
 * @description
 * 
 * Partial results are available and are not necessarily valid (ANSI/NISO
 * Z39.50-2003 §3.2.6.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_interim: ResourceControlRequest_partialResultsAvailable = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_interim
 * @description
 * 
 * Short name for `ResourceControlRequest_partialResultsAvailable_interim`.
 * Partial results, not necessarily valid (§3.2.6.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const interim: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_none
 * @description
 * 
 * No results are available (ANSI/NISO Z39.50-2003 §3.2.6.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_none: ResourceControlRequest_partialResultsAvailable = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_none
 * @description
 * 
 * Short name for `ResourceControlRequest_partialResultsAvailable_none`. No
 * results available (§3.2.6.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const none: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_none; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ResourceControlRequest_partialResultsAvailable: $.ASN1Decoder<ResourceControlRequest_partialResultsAvailable> = $._decodeInteger;
export const _encode_ResourceControlRequest_partialResultsAvailable: $.ASN1Encoder<ResourceControlRequest_partialResultsAvailable> = $._encodeInteger;


/* eslint-enable */
