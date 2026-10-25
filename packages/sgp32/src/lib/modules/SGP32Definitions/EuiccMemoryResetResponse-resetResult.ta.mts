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
 * Whether the Profile-deletion part of ES10b.eUICCMemoryReset deleted
 * anything, or why it stopped (SGP.32 v1.2, section 5.9.5). When
 * resetDefaultSmdpAddress is set, both ok and nothingToDelete mean the default
 * SM-DP+ address was reset. resetEimResult and
 * resetImmediateEnableConfigResult are added only when this value is ok or
 * nothingToDelete.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetResult ::= INTEGER {
 *     ok(0),
 *     nothingToDelete(1),
 *     catBusy(5),
 *     ecallActive(104),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccMemoryResetResponse_resetResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @constant
 * @type {number}
 * @description
 * At least one Profile was deleted (SGP.32 v1.2, section 5.9.5). When
 * resetDefaultSmdpAddress is set, ok also means that address reset succeeded.
 */
export
const EuiccMemoryResetResponse_resetResult_ok = 0 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_ok
 * @constant
 * @type {number}
 * @description
 * At least one Profile was deleted (SGP.32 v1.2, section 5.9.5).
 */
export
const ok = EuiccMemoryResetResponse_resetResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @constant
 * @type {number}
 * @description
 * No Profile was deleted (SGP.32 v1.2, section 5.9.5). When
 * resetDefaultSmdpAddress is set, this value still means that address reset
 * succeeded.
 */
export
const EuiccMemoryResetResponse_resetResult_nothingToDelete = 1 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_nothingToDelete
 * @constant
 * @type {number}
 * @description
 * No Profile was deleted (SGP.32 v1.2, section 5.9.5).
 */
export
const nothingToDelete = EuiccMemoryResetResponse_resetResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @constant
 * @type {number}
 * @description
 * An enabled Profile has a proactive session still open, and the eUICC stops
 * the command (SGP.32 v1.2, section 5.9.5). The Device may end that session
 * and send the command again. The other eUICC choice is to end the session
 * itself and queue REFRESH.
 */
export
const EuiccMemoryResetResponse_resetResult_catBusy = 5 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_catBusy
 * @constant
 * @type {number}
 * @description
 * An open proactive session on an enabled Profile stopped the reset (SGP.32
 * v1.2, section 5.9.5).
 */
export
const catBusy = EuiccMemoryResetResponse_resetResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_ecallActive
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is enabled, so the eUICC rejects the memory reset
 * (SGP.32 v1.2, sections 5.9.5 and 2.11.2.1).
 */
export
const EuiccMemoryResetResponse_resetResult_ecallActive = 104 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_ecallActive
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is enabled, so the memory reset is rejected (SGP.32
 * v1.2, section 5.9.5).
 */
export
const ecallActive = EuiccMemoryResetResponse_resetResult_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on resetResult in section 5.9.5 and
 * does not further define the condition that produces it.
 */
export
const EuiccMemoryResetResponse_resetResult_undefinedError = 127 satisfies EuiccMemoryResetResponse_resetResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 5.9.5 and does not further define the
 * condition that produces it.
 */
export
const undefinedError = EuiccMemoryResetResponse_resetResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetResult> = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetResult> = $._encodeInteger;


/* eslint-enable */
