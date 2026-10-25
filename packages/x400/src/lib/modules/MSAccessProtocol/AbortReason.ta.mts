/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * Defined in ITU-T X.419 (1999) (§9).
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
 * @constant
 * @type {number}
 */
export const AbortReason_localSystemProblem = 0 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_localSystemProblem
 * @constant
 * @type {number}
 */
export const localSystemProblem = AbortReason_localSystemProblem satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_invalidParameter
 * @constant
 * @type {number}
 */
export const AbortReason_invalidParameter = 1 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_invalidParameter
 * @constant
 * @type {number}
 */
export const invalidParameter = AbortReason_invalidParameter satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_unrecognizedActivity
 * @constant
 * @type {number}
 */
export const AbortReason_unrecognizedActivity = 2 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_unrecognizedActivity
 * @constant
 * @type {number}
 */
export const unrecognizedActivity = AbortReason_unrecognizedActivity satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_temporaryProblem
 * @constant
 * @type {number}
 */
export const AbortReason_temporaryProblem = 3 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_temporaryProblem
 * @constant
 * @type {number}
 */
export const temporaryProblem = AbortReason_temporaryProblem satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_protocolError
 * @constant
 * @type {number}
 */
export const AbortReason_protocolError = 4 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_protocolError
 * @constant
 * @type {number}
 */
export const protocolError = AbortReason_protocolError satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_permanentProblem
 * @constant
 * @type {number}
 */
export const AbortReason_permanentProblem = 5 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_permanentProblem
 * @constant
 * @type {number}
 */
export const permanentProblem = AbortReason_permanentProblem satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_userError
 * @constant
 * @type {number}
 */
export const AbortReason_userError = 6 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_userError
 * @constant
 * @type {number}
 */
export const userError = AbortReason_userError satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_transferCompleted
 * @constant
 * @type {number}
 */
export const AbortReason_transferCompleted = 7 satisfies AbortReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_transferCompleted
 * @constant
 * @type {number}
 */
export const transferCompleted = AbortReason_transferCompleted satisfies AbortReason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AbortReason = $._decodeInteger;


export const _encode_AbortReason = $._encodeInteger;


/* eslint-enable */
