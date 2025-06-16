/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_Abort {
    mistypedPDU = 0,
    unboundRequest = 1,
    invalidPDU = 2,
    resourceLimitation = 3,
    connectionFailed = 4,
    invalidProtocol = 5,
    reasonNotSpecified = 6,
}

/**
 * @summary Abort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort  ::=  ENUMERATED {
 *   mistypedPDU         (0),
 *   unboundRequest      (1),
 *   invalidPDU          (2),
 *   resourceLimitation  (3),
 *   connectionFailed    (4),
 *   invalidProtocol     (5),
 *   reasonNotSpecified  (6),
 *   ...}
 * ```
 * 
 * @enum {number}
 */
export type Abort = _enum_for_Abort | ENUMERATED;

/**
 * @summary Abort_mistypedPDU
 * @constant
 * @type {number}
 */
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedPDU
 * @constant
 * @type {number}
 */
export const mistypedPDU: Abort = Abort_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_unboundRequest
 * @constant
 * @type {number}
 */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unboundRequest
 * @constant
 * @type {number}
 */
export const unboundRequest: Abort = Abort_unboundRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_invalidPDU
 * @constant
 * @type {number}
 */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPDU
 * @constant
 * @type {number}
 */
export const invalidPDU: Abort = Abort_invalidPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_resourceLimitation
 * @constant
 * @type {number}
 */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: Abort = Abort_resourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_connectionFailed
 * @constant
 * @type {number}
 */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionFailed
 * @constant
 * @type {number}
 */
export const connectionFailed: Abort = Abort_connectionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_invalidProtocol
 * @constant
 * @type {number}
 */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidProtocol
 * @constant
 * @type {number}
 */
export const invalidProtocol: Abort = Abort_invalidProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_reasonNotSpecified
 * @constant
 * @type {number}
 */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reasonNotSpecified
 * @constant
 * @type {number}
 */
export const reasonNotSpecified: Abort = Abort_reasonNotSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Abort = $._decodeEnumerated;


export const _encode_Abort = $._encodeEnumerated;


/* eslint-enable */
