/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetResponse_resetEimResult
 * @description
 * 
 * Outcome of resetEimConfigData. Present only when that bit was set and
 * resetResult is ok or nothingToDelete (SGP.32 v1.2, section 5.9.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetEimResult ::= INTEGER {
 *     ok(0),
 *     nothingToDelete(1),
 *     eimResetNotSupported(2),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccMemoryResetResponse_resetEimResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_ok
 * @constant
 * @type {number}
 * @description
 * All eIM Configuration Data of all Associated eIMs was removed (SGP.32 v1.2,
 * section 5.9.5). The association-token counter is left as it was (section
 * 2.11.1.1).
 */
export
const EuiccMemoryResetResponse_resetEimResult_ok = 0 satisfies EuiccMemoryResetResponse_resetEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_ok
 * @constant
 * @type {number}
 * @description
 * All Associated eIM Configuration Data was removed (SGP.32 v1.2, section
 * 5.9.5).
 */
export
const ok = EuiccMemoryResetResponse_resetEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_nothingToDelete
 * @constant
 * @type {number}
 * @description
 * No eIM Configuration Data was stored, so there was nothing to remove (SGP.32
 * v1.2, section 5.9.5).
 */
export
const EuiccMemoryResetResponse_resetEimResult_nothingToDelete = 1 satisfies EuiccMemoryResetResponse_resetEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_nothingToDelete
 * @constant
 * @type {number}
 * @description
 * No eIM Configuration Data was present to remove (SGP.32 v1.2, section
 * 5.9.5).
 */
export
const nothingToDelete = EuiccMemoryResetResponse_resetEimResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported
 * @constant
 * @type {number}
 * @description
 * This eUICC does not support removing eIM Configuration Data (SGP.32 v1.2,
 * section 5.9.5).
 */
export
const EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported = 2 satisfies EuiccMemoryResetResponse_resetEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported
 * @constant
 * @type {number}
 * @description
 * The eUICC does not support removing eIM Configuration Data (SGP.32 v1.2,
 * section 5.9.5).
 */
export
const eimResetNotSupported = EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on resetEimResult in section 5.9.5 and
 * does not further define the condition that produces it.
 */
export
const EuiccMemoryResetResponse_resetEimResult_undefinedError = 127 satisfies EuiccMemoryResetResponse_resetEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 5.9.5 and does not further define the
 * condition that produces it.
 */
export
const undefinedError = EuiccMemoryResetResponse_resetEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccMemoryResetResponse_resetEimResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetEimResult> = $._decodeInteger;
export const _encode_EuiccMemoryResetResponse_resetEimResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetEimResult> = $._encodeInteger;


/* eslint-enable */
