/* eslint-disable */
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

export const _decode_MMSCancelStatus: $.ASN1Decoder<MMSCancelStatus> = $._decodeEnumerated;

export const _encode_MMSCancelStatus: $.ASN1Encoder<MMSCancelStatus> = $._encodeEnumerated;


/* eslint-enable */
