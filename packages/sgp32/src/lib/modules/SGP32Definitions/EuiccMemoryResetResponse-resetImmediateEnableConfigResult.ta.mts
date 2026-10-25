/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult
 * @description
 * 
 * Outcome of resetImmediateEnableConfig. Present only when that bit was set
 * and resetResult is ok or nothingToDelete (SGP.32 v1.2, section 5.9.5). The
 * operation deactivates immediate Profile enabling and removes its stored
 * data.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetImmediateEnableConfigResult ::= INTEGER {
 *     ok(0),
 *     resetIECNotSupported(1),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccMemoryResetResponse_resetImmediateEnableConfigResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok
 * @constant
 * @type {number}
 * @description
 * Immediate Profile enabling was deactivated and its stored data was removed
 * (SGP.32 v1.2, section 5.9.5).
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok = 0 satisfies EuiccMemoryResetResponse_resetImmediateEnableConfigResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok
 * @constant
 * @type {number}
 * @description
 * Immediate Profile enabling configuration was reset (SGP.32 v1.2, section
 * 5.9.5).
 */
export
const ok = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported
 * @constant
 * @type {number}
 * @description
 * This eUICC does not support resetting the immediate Profile enabling
 * configuration (SGP.32 v1.2, section 5.9.5).
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported = 1 satisfies EuiccMemoryResetResponse_resetImmediateEnableConfigResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported
 * @constant
 * @type {number}
 * @description
 * The eUICC does not support resetting immediate Profile enabling (SGP.32
 * v1.2, section 5.9.5).
 */
export
const resetIECNotSupported = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on resetImmediateEnableConfigResult in
 * section 5.9.5 and does not further define the condition that produces it.
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError = 127 satisfies EuiccMemoryResetResponse_resetImmediateEnableConfigResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 5.9.5 and does not further define the
 * condition that produces it.
 */
export
const undefinedError = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> = $._encodeInteger;


/* eslint-enable */
