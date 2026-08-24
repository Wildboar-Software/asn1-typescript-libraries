/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Abort
 * @description
 *
 * ENUMERATED abort PDU (no SEQUENCE). Typically followed by TCP close.
 * (4) `connectionFailed` may be local-only (TCP never opened). Extensible.
 *
 * @enum {number}
 */
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
 * ENUMERATED PDU (no SEQUENCE wrapper). Errors not covered by Reject
 * or BindError; typically followed by closing TCP. (4)
 * `connectionFailed` may be generated locally when TCP cannot be
 * opened and so may never flow on the wire. Extensible.
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
 * @description
 *
 * PDU has invalid construction. (0)
 *
 * @constant
 * @type {number}
 */
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedPDU
 * @description
 *
 * PDU has invalid construction. (0)
 *
 * @constant
 * @type {number}
 */
export const mistypedPDU: Abort = Abort_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_unboundRequest
 * @description
 *
 * Request received before an association exists. (1) May be raised locally
 * if the peer is unreachable.
 *
 * @constant
 * @type {number}
 */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unboundRequest
 * @description
 *
 * Request received before an association exists. (1)
 *
 * @constant
 * @type {number}
 */
export const unboundRequest: Abort = Abort_unboundRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_invalidPDU
 * @description
 *
 * Received PDU is not an IDM-PDU. (2)
 *
 * @constant
 * @type {number}
 */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPDU
 * @description
 *
 * Received PDU is not an IDM-PDU. (2)
 *
 * @constant
 * @type {number}
 */
export const invalidPDU: Abort = Abort_invalidPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_resourceLimitation
 * @description
 *
 * Bind received but no work can proceed (e.g. connection limit). (3)
 *
 * @constant
 * @type {number}
 */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitation
 * @description
 *
 * Bind received but no work can proceed (e.g. connection limit). (3)
 *
 * @constant
 * @type {number}
 */
export const resourceLimitation: Abort = Abort_resourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_connectionFailed
 * @description
 *
 * Could not open TCP to send Bind. Often generated locally and never sent.
 * (4)
 *
 * @constant
 * @type {number}
 */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionFailed
 * @description
 *
 * Could not open TCP to send Bind. Often generated locally and never sent.
 * (4)
 *
 * @constant
 * @type {number}
 */
export const connectionFailed: Abort = Abort_connectionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_invalidProtocol
 * @description
 *
 * BindResult/BindError `protocolID` unknown or unsupported. (5)
 *
 * @constant
 * @type {number}
 */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidProtocol
 * @description
 *
 * BindResult/BindError `protocolID` unknown or unsupported. (5)
 *
 * @constant
 * @type {number}
 */
export const invalidProtocol: Abort = Abort_invalidProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Abort_reasonNotSpecified
 * @description
 *
 * Any other reason to tear down the association. (6)
 *
 * @constant
 * @type {number}
 */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reasonNotSpecified
 * @description
 *
 * Any other reason to tear down the association. (6)
 *
 * @constant
 * @type {number}
 */
export const reasonNotSpecified: Abort = Abort_reasonNotSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Abort = $._decodeEnumerated;


export const _encode_Abort = $._encodeEnumerated;


/* eslint-enable */
