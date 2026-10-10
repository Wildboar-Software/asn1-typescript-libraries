/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionResult {
    newLegRequested = 1,
    newLegEstablished = 2,
    legModificationRequested = 3,
    legModificationComplete = 4,
    legRemovalRequest = 5,
    legRemovalComplete = 6,
}

/**
 * @summary RCSSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionResult = _enum_for_RCSSessionResult;

/**
 * @summary RCSSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionResult = _enum_for_RCSSessionResult;

/**
 * @summary RCSSessionResult_newLegRequested
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_newLegRequested: RCSSessionResult = RCSSessionResult.newLegRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newLegRequested
 * @constant
 * @type {number}
 */
export
const newLegRequested: RCSSessionResult = RCSSessionResult.newLegRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_newLegEstablished
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_newLegEstablished: RCSSessionResult = RCSSessionResult.newLegEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newLegEstablished
 * @constant
 * @type {number}
 */
export
const newLegEstablished: RCSSessionResult = RCSSessionResult.newLegEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legModificationRequested
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legModificationRequested: RCSSessionResult = RCSSessionResult.legModificationRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legModificationRequested
 * @constant
 * @type {number}
 */
export
const legModificationRequested: RCSSessionResult = RCSSessionResult.legModificationRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legModificationComplete
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legModificationComplete: RCSSessionResult = RCSSessionResult.legModificationComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legModificationComplete
 * @constant
 * @type {number}
 */
export
const legModificationComplete: RCSSessionResult = RCSSessionResult.legModificationComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legRemovalRequest
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legRemovalRequest: RCSSessionResult = RCSSessionResult.legRemovalRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legRemovalRequest
 * @constant
 * @type {number}
 */
export
const legRemovalRequest: RCSSessionResult = RCSSessionResult.legRemovalRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legRemovalComplete
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legRemovalComplete: RCSSessionResult = RCSSessionResult.legRemovalComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legRemovalComplete
 * @constant
 * @type {number}
 */
export
const legRemovalComplete: RCSSessionResult = RCSSessionResult.legRemovalComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RCSSessionResult = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RCSSessionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionResult, encoded as an ASN.1 Element.
 */
export const _encode_RCSSessionResult = $._encodeEnumerated;


/* eslint-enable */
