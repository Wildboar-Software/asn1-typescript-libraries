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
 * RTSE abort reason, used when ROSE is realized over RTSE (ITU-T Rec. X.882 (07/94) §8.3 maps ABORT to RT-U-ABORT / RT-P-ABORT). Named values come from the RTSE APDU module (ITU-T Rec. X.228).
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
 * @description Local system problem (X.228; used with ROSE's RTSE realization, X.882 §8.3).
 * @constant
 * @type {number}
 */
export const AbortReason_localSystemProblem: AbortReason = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_localSystemProblem
 * @description Local system problem (X.228; used with ROSE's RTSE realization, X.882 §8.3).
 * @constant
 * @type {number}
 */
export const localSystemProblem: AbortReason = AbortReason_localSystemProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_invalidParameter
 * @description Invalid parameter; `reflectedParameter` is supplied.
 * @constant
 * @type {number}
 */
export const AbortReason_invalidParameter: AbortReason = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_invalidParameter
 * @description Invalid parameter; `reflectedParameter` is supplied.
 * @constant
 * @type {number}
 */
export const invalidParameter: AbortReason = AbortReason_invalidParameter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_unrecognizedActivity
 * @description Unrecognized activity.
 * @constant
 * @type {number}
 */
export const AbortReason_unrecognizedActivity: AbortReason = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_unrecognizedActivity
 * @description Unrecognized activity.
 * @constant
 * @type {number}
 */
export const unrecognizedActivity: AbortReason = AbortReason_unrecognizedActivity; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_temporaryProblem
 * @description RTSE cannot accept a session for a period of time.
 * @constant
 * @type {number}
 */
export const AbortReason_temporaryProblem: AbortReason = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_temporaryProblem
 * @description RTSE cannot accept a session for a period of time.
 * @constant
 * @type {number}
 */
export const temporaryProblem: AbortReason = AbortReason_temporaryProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_protocolError
 * @description RTSE-level protocol error.
 * @constant
 * @type {number}
 */
export const AbortReason_protocolError: AbortReason = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_protocolError
 * @description RTSE-level protocol error.
 * @constant
 * @type {number}
 */
export const protocolError: AbortReason = AbortReason_protocolError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_permanentProblem
 * @description Provider-abort, solely in normal mode.
 * @constant
 * @type {number}
 */
export const AbortReason_permanentProblem: AbortReason = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_permanentProblem
 * @description Provider-abort, solely in normal mode.
 * @constant
 * @type {number}
 */
export const permanentProblem: AbortReason = AbortReason_permanentProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_userError
 * @description User-abort, solely in normal mode.
 * @constant
 * @type {number}
 */
export const AbortReason_userError: AbortReason = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_userError
 * @description User-abort, solely in normal mode.
 * @constant
 * @type {number}
 */
export const userError: AbortReason = AbortReason_userError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_transferCompleted
 * @description Transfer completed; the activity cannot be discarded.
 * @constant
 * @type {number}
 */
export const AbortReason_transferCompleted: AbortReason = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AbortReason_transferCompleted
 * @description Transfer completed; the activity cannot be discarded.
 * @constant
 * @type {number}
 */
export const transferCompleted: AbortReason = AbortReason_transferCompleted; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_AbortReason = $._decodeInteger;




export const _encode_AbortReason = $._encodeInteger;


/* eslint-enable */
