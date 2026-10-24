/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult
 * @description
 * 
 * Result of ES10b.ExecuteFallbackMechanism (SGP.32 v1.2, section 5.9.20). On
 * any error the Profiles stay as they were.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteFallbackMechanismResponse-executeFallbackMechanismResult ::= INTEGER {
 *     ok(0),
 *     profileNotInDisabledState(2),
 *     catBusy(5),
 *     fallbackNotAvailable(6), -- Fallback Attribute not set
 *     commandError(7),
 *     ecallActive(104),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = INTEGER;

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok
 * @constant
 * @type {number}
 * @description
 * The Fallback Profile was enabled and the previously enabled Profile was
 * disabled, or both were marked for that swap and REFRESH was sent (SGP.32
 * v1.2, section 5.9.20).
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok
 * @constant
 * @type {number}
 * @description
 * The Fallback swap succeeded or was committed to REFRESH (SGP.32 v1.2,
 * section 5.9.20).
 */
export
const ok: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState
 * @constant
 * @type {number}
 * @description
 * The Fallback Profile is already enabled (SGP.32 v1.2, section 5.9.20).
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState
 * @constant
 * @type {number}
 * @description
 * The Fallback Profile is already enabled (SGP.32 v1.2, section 5.9.20).
 */
export
const profileNotInDisabledState: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy
 * @constant
 * @type {number}
 * @description
 * A proactive session is still open and the eUICC chooses to stop the command
 * (SGP.32 v1.2, section 5.9.20). The other choice is to end that session and
 * continue.
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy
 * @constant
 * @type {number}
 * @description
 * An open proactive session caused the eUICC to stop the command (SGP.32 v1.2,
 * section 5.9.20).
 */
export
const catBusy: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable
 * @constant
 * @type {number}
 * @description
 * No Profile on the eUICC has the Fallback Attribute set (SGP.32 v1.2, section
 * 5.9.20).
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable
 * @constant
 * @type {number}
 * @description
 * No Profile has the Fallback Attribute set (SGP.32 v1.2, section 5.9.20).
 */
export
const fallbackNotAvailable: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError
 * @constant
 * @type {number}
 * @description
 * No Profile is currently enabled (SGP.32 v1.2, section 5.9.20).
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError
 * @constant
 * @type {number}
 * @description
 * No Profile is currently enabled (SGP.32 v1.2, section 5.9.20).
 */
export
const commandError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is enabled, so the eUICC rejects the Fallback command
 * (SGP.32 v1.2, sections 5.9.20 and 2.11.2.1).
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is enabled, so Fallback is rejected (SGP.32 v1.2,
 * section 5.9.20).
 */
export
const ecallActive: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) in section 5.9.20 and does not further
 * define the condition that produces it.
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 5.9.20 and does not further define
 * the condition that produces it.
 */
export
const undefinedError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult: $.ASN1Decoder<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult> = $._decodeInteger;
export const _encode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult: $.ASN1Encoder<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult> = $._encodeInteger;


/* eslint-enable */
