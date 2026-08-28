/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary AbortReason
 * @description
 *
 * Reason carried in `RTABapdu.abortReason`. ITU-T Rec. X.228 (11/88)
 * §7.7.3.4.1, §7.9.2.4.1, §7.9.3.4.1:
 *
 * - `localSystemProblem` (0)
 * - `invalidParameter` (1) — `reflectedParameter` is supplied
 * - `unrecognizedActivity` (2) — sending RTPM shall transfer-abort,
 *   optionally then provider-abort
 * - `temporaryProblem` (3) — do not attempt association-recovery for
 *   a locally determined period
 * - `protocolError` (4) — RTPM protocol error
 * - `permanentProblem` (5) — provider-abort, solely in normal mode
 *   (X.228 text: "permanent-error")
 * - `userError` (6) — user-abort, solely in normal mode
 * - `transferCompleted` (7) — receiving RTPM could not discard an
 *   already completed transfer (X.228 Annex B.1.6)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortReason  ::=  INTEGER {
 *   localSystemProblem(0),
 *   invalidParameter(1), -- reflectedParameter supplied
 *   unrecognizedActivity(2),
 *   temporaryProblem(3),
 *   -- the RTSE cannot accept a session for a period of time
 *   protocolError(4), -- RTSE level protocol error
 *   permanentProblem(5), --provider-abort solely in normal mode
 *   userError(6), -- user-abort solely in normal mode
 *   transferCompleted(7) -- activity can't be discarded--}
 * ```
 */
export type AbortReason = INTEGER;


/**
 * @summary AbortReason_localSystemProblem
 * @description Local system problem (ITU-T Rec. X.228 (11/88)
 *     §7.7.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_localSystemProblem: AbortReason = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_localSystemProblem
 * @description Alias of {@link AbortReason_localSystemProblem}.
 * @constant
 * @type {number}
 */
export const localSystemProblem: AbortReason = AbortReason_localSystemProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_invalidParameter
 * @description Invalid parameter; `reflectedParameter` identifies
 *     which (ITU-T Rec. X.228 (11/88) §7.7.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_invalidParameter: AbortReason = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_invalidParameter
 * @description Alias of {@link AbortReason_invalidParameter}.
 * @constant
 * @type {number}
 */
export const invalidParameter: AbortReason = AbortReason_invalidParameter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_unrecognizedActivity
 * @description Unrecognized activity; sender transfer-aborts,
 *     optionally then provider-aborts (ITU-T Rec. X.228 (11/88)
 *     §7.7.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_unrecognizedActivity: AbortReason = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_unrecognizedActivity
 * @description Alias of {@link AbortReason_unrecognizedActivity}.
 * @constant
 * @type {number}
 */
export const unrecognizedActivity: AbortReason = AbortReason_unrecognizedActivity; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_temporaryProblem
 * @description Do not attempt association-recovery for a locally
 *     determined period (ITU-T Rec. X.228 (11/88) §7.7.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_temporaryProblem: AbortReason = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_temporaryProblem
 * @description Alias of {@link AbortReason_temporaryProblem}.
 * @constant
 * @type {number}
 */
export const temporaryProblem: AbortReason = AbortReason_temporaryProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_protocolError
 * @description RTPM protocol error (ITU-T Rec. X.228 (11/88)
 *     §7.7.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_protocolError: AbortReason = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_protocolError
 * @description Alias of {@link AbortReason_protocolError}.
 * @constant
 * @type {number}
 */
export const protocolError: AbortReason = AbortReason_protocolError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_permanentProblem
 * @description Provider-abort, solely in normal mode (X.228 text:
 *     "permanent-error"). ITU-T Rec. X.228 (11/88) §7.9.2.4.1.
 * @constant
 * @type {number}
 */
export const AbortReason_permanentProblem: AbortReason = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_permanentProblem
 * @description Alias of {@link AbortReason_permanentProblem}.
 * @constant
 * @type {number}
 */
export const permanentProblem: AbortReason = AbortReason_permanentProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_userError
 * @description User-abort, solely in normal mode (ITU-T Rec. X.228
 *     (11/88) §7.9.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_userError: AbortReason = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_userError
 * @description Alias of {@link AbortReason_userError}.
 * @constant
 * @type {number}
 */
export const userError: AbortReason = AbortReason_userError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_transferCompleted
 * @description Receiving RTPM could not discard an already completed
 *     transfer (ITU-T Rec. X.228 (11/88) §7.7.3.4.1).
 * @constant
 * @type {number}
 */
export const AbortReason_transferCompleted: AbortReason = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_transferCompleted
 * @description Alias of {@link AbortReason_transferCompleted}.
 * @constant
 * @type {number}
 */
export const transferCompleted: AbortReason = AbortReason_transferCompleted; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_AbortReason = $._decodeInteger;




export const _encode_AbortReason = $._encodeInteger;


/* eslint-enable */
