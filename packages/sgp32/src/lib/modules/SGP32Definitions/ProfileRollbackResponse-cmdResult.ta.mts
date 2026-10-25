/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileRollbackResponse_cmdResult
 * @description
 * 
 * Outcome of ES10b.ProfileRollback. SGP.32 v1.2, section 5.9.16.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileRollbackResponse-cmdResult ::= INTEGER {
 *     ok(0),
 *     rollbackNotAllowed(1), -- Usage of rollback was not granted by the eIM
 *     catBusy(5),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ProfileRollbackResponse_cmdResult = INTEGER;

/**
 * @summary ProfileRollbackResponse_cmdResult_ok
 * @description
 * Rollback was executed. eUICCPackageResult is present and contains the new
 * signed result, including RollbackProfileResult. SGP.32 v1.2, section 5.9.16.
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_ok: ProfileRollbackResponse_cmdResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_ok
 * @description
 * Rollback was executed and eUICCPackageResult is present. SGP.32 v1.2,
 * section 5.9.16.
 * @constant
 * @type {number}
 */
export
const ok: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_rollbackNotAllowed
 * @description
 * The last enable PSMO did not grant the Rollback Mechanism. SGP.32 v1.2,
 * section 5.9.16.
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_rollbackNotAllowed: ProfileRollbackResponse_cmdResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_rollbackNotAllowed
 * @description
 * The eIM did not grant rollback on the last enable. SGP.32 v1.2, section
 * 5.9.16.
 * @constant
 * @type {number}
 */
export
const rollbackNotAllowed: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_rollbackNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_catBusy
 * @description
 * A proactive session is still open. The eUICC may return this and stop. If it
 * continues, it ends that session. SGP.32 v1.2, section 5.9.16.
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_catBusy: ProfileRollbackResponse_cmdResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_catBusy
 * @description
 * A proactive session is still open. SGP.32 v1.2, section 5.9.16.
 * @constant
 * @type {number}
 */
export
const catBusy: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_commandError
 * @description
 * No Profile is currently enabled. SGP.32 v1.2, section 5.9.16.
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_commandError: ProfileRollbackResponse_cmdResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_commandError
 * @description
 * No Profile is currently enabled. SGP.32 v1.2, section 5.9.16.
 * @constant
 * @type {number}
 */
export
const commandError: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on this result and does not further
 * define the condition. Section 5.9.16.
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_undefinedError: ProfileRollbackResponse_cmdResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 5.9.16.
 * @constant
 * @type {number}
 */
export
const undefinedError: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileRollbackResponse_cmdResult: $.ASN1Decoder<ProfileRollbackResponse_cmdResult> = $._decodeInteger;
export const _encode_ProfileRollbackResponse_cmdResult: $.ASN1Encoder<ProfileRollbackResponse_cmdResult> = $._encodeInteger;


/* eslint-enable */
