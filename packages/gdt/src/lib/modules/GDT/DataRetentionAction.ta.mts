/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataRetentionAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataRetentionAction  ::=  INTEGER {
 *     ra-store    (0),
 *     ra-delete   (1),
 *     ra-fetch    (2),
 *     ra-result   (3)
 * }
 * ```
 */
export
type DataRetentionAction = INTEGER;

/**
 * @summary DataRetentionAction_ra_store
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_store = 0 satisfies DataRetentionAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_store
 * @constant
 * @type {number}
 */
export
const ra_store = DataRetentionAction_ra_store; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_delete
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_delete = 1 satisfies DataRetentionAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_delete
 * @constant
 * @type {number}
 */
export
const ra_delete = DataRetentionAction_ra_delete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_fetch
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_fetch = 2 satisfies DataRetentionAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_fetch
 * @constant
 * @type {number}
 */
export
const ra_fetch = DataRetentionAction_ra_fetch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_result
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_result = 3 satisfies DataRetentionAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_result
 * @constant
 * @type {number}
 */
export
const ra_result = DataRetentionAction_ra_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DataRetentionAction = $._decodeInteger;
export const _encode_DataRetentionAction = $._encodeInteger;


/* eslint-enable */
