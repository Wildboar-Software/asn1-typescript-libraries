/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetResponse_resetResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_ok: EuiccMemoryResetResponse_resetResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_nothingToDelete: EuiccMemoryResetResponse_resetResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const nothingToDelete: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_catBusy: EuiccMemoryResetResponse_resetResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_undefinedError: EuiccMemoryResetResponse_resetResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccMemoryResetResponse_resetResult = EuiccMemoryResetResponse_resetResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetResult = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetResult = $._encodeInteger;


/* eslint-enable */
