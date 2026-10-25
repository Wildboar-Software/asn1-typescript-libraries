/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetResult
 * @description
 * 
 * `ok` (0), `nothingToDelete` (1), `catBusy` (5), or `undefinedError` (127).
 * SGP.22 v3.1 §5.7.19.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetResult ::= INTEGER {
 *     ok(0),
 *     nothingToDelete(1),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccMemoryResetResponse_resetResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @description
 * 
 * The requested reset completed. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_ok = 0 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @description
 * 
 * The requested reset completed. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const ok = EuiccMemoryResetResponse_resetResult_ok satisfies EuiccMemoryResetResponse_resetResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @description
 * 
 * Nothing matched the requested options. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_nothingToDelete = 1 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @description
 * 
 * Nothing matched the requested options. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const nothingToDelete = EuiccMemoryResetResponse_resetResult_nothingToDelete satisfies EuiccMemoryResetResponse_resetResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @description
 * 
 * A proactive session prevented the reset. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_catBusy = 5 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @description
 * 
 * A proactive session prevented the reset. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const catBusy = EuiccMemoryResetResponse_resetResult_catBusy satisfies EuiccMemoryResetResponse_resetResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @description
 * 
 * The reset failed for another reason. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetResult_undefinedError = 127 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @description
 * 
 * The reset failed for another reason. SGP.22 v3.1 §5.7.19.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError = EuiccMemoryResetResponse_resetResult_undefinedError satisfies EuiccMemoryResetResponse_resetResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetResult = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetResult = $._encodeInteger;


/* eslint-enable */
