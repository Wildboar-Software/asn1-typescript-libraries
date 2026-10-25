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
const EuiccMemoryResetResponse_resetResult_ok: 0 = 0 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

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
const ok: 0 = EuiccMemoryResetResponse_resetResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

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
const EuiccMemoryResetResponse_resetResult_nothingToDelete: 1 = 1 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

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
const nothingToDelete: 1 = EuiccMemoryResetResponse_resetResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

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
const EuiccMemoryResetResponse_resetResult_catBusy: 5 = 5 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

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
const catBusy: 5 = EuiccMemoryResetResponse_resetResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

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
const EuiccMemoryResetResponse_resetResult_undefinedError: 127 = 127 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError: 127 = EuiccMemoryResetResponse_resetResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetResult: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetResult: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
