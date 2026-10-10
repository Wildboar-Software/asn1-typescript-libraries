/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSCancelStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancelStatus  ::=  ENUMERATED
 * {
 *     cancelRequestSuccessfullyReceived(1),
 *     cancelRequestCorrupted(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSCancelStatus {
    cancelRequestSuccessfullyReceived = 1,
    cancelRequestCorrupted = 2,
}

/**
 * @summary MMSCancelStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancelStatus  ::=  ENUMERATED
 * {
 *     cancelRequestSuccessfullyReceived(1),
 *     cancelRequestCorrupted(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSCancelStatus = _enum_for_MMSCancelStatus;

/**
 * @summary MMSCancelStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancelStatus  ::=  ENUMERATED
 * {
 *     cancelRequestSuccessfullyReceived(1),
 *     cancelRequestCorrupted(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSCancelStatus = _enum_for_MMSCancelStatus;

/**
 * @summary MMSCancelStatus_cancelRequestSuccessfullyReceived
 * @constant
 * @type {number}
 */
export
const MMSCancelStatus_cancelRequestSuccessfullyReceived: MMSCancelStatus = MMSCancelStatus.cancelRequestSuccessfullyReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelRequestSuccessfullyReceived
 * @constant
 * @type {number}
 */
export
const cancelRequestSuccessfullyReceived: MMSCancelStatus = MMSCancelStatus.cancelRequestSuccessfullyReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSCancelStatus_cancelRequestCorrupted
 * @constant
 * @type {number}
 */
export
const MMSCancelStatus_cancelRequestCorrupted: MMSCancelStatus = MMSCancelStatus.cancelRequestCorrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelRequestCorrupted
 * @constant
 * @type {number}
 */
export
const cancelRequestCorrupted: MMSCancelStatus = MMSCancelStatus.cancelRequestCorrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MMSCancelStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMSCancelStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MMSCancelStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSCancelStatus, encoded as an ASN.1 Element.
 */
export const _encode_MMSCancelStatus = $._encodeEnumerated;


/* eslint-enable */
