/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const DataRetentionAction_ra_store: DataRetentionAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_store
 * @constant
 * @type {number}
 */
export
const ra_store: DataRetentionAction = DataRetentionAction_ra_store; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_delete
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_delete: DataRetentionAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_delete
 * @constant
 * @type {number}
 */
export
const ra_delete: DataRetentionAction = DataRetentionAction_ra_delete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_fetch
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_fetch: DataRetentionAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_fetch
 * @constant
 * @type {number}
 */
export
const ra_fetch: DataRetentionAction = DataRetentionAction_ra_fetch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_result
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_result: DataRetentionAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_result
 * @constant
 * @type {number}
 */
export
const ra_result: DataRetentionAction = DataRetentionAction_ra_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DataRetentionAction = $._decodeInteger;
export const _encode_DataRetentionAction = $._encodeInteger;


/* eslint-enable */
