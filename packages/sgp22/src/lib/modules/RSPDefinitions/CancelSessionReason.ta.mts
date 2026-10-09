/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionReason  ::=  INTEGER {endUserRejection(0), postponed(1), timeout(2), pprNotAllowed(3), metadataMismatch(4), loadBppExecutionError(5), undefinedReason(127)}
 * ```
 */
export
type CancelSessionReason = INTEGER;

/**
 * @summary CancelSessionReason_endUserRejection
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_endUserRejection: CancelSessionReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_endUserRejection
 * @constant
 * @type {number}
 */
export
const endUserRejection: CancelSessionReason = CancelSessionReason_endUserRejection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_postponed
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_postponed: CancelSessionReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_postponed
 * @constant
 * @type {number}
 */
export
const postponed: CancelSessionReason = CancelSessionReason_postponed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_timeout
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_timeout: CancelSessionReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_timeout
 * @constant
 * @type {number}
 */
export
const timeout: CancelSessionReason = CancelSessionReason_timeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_pprNotAllowed
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_pprNotAllowed: CancelSessionReason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_pprNotAllowed
 * @constant
 * @type {number}
 */
export
const pprNotAllowed: CancelSessionReason = CancelSessionReason_pprNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_metadataMismatch
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_metadataMismatch: CancelSessionReason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_metadataMismatch
 * @constant
 * @type {number}
 */
export
const metadataMismatch: CancelSessionReason = CancelSessionReason_metadataMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_loadBppExecutionError
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_loadBppExecutionError: CancelSessionReason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_loadBppExecutionError
 * @constant
 * @type {number}
 */
export
const loadBppExecutionError: CancelSessionReason = CancelSessionReason_loadBppExecutionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_undefinedReason
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_undefinedReason: CancelSessionReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_undefinedReason
 * @constant
 * @type {number}
 */
export
const undefinedReason: CancelSessionReason = CancelSessionReason_undefinedReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionReason = $._decodeInteger;
export const _encode_CancelSessionReason = $._encodeInteger;


/* eslint-enable */
