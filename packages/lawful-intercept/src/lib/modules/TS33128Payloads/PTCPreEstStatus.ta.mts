/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCPreEstStatus {
    established = 1,
    modified = 2,
    released = 3,
}

/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCPreEstStatus = _enum_for_PTCPreEstStatus;

/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCPreEstStatus = _enum_for_PTCPreEstStatus;

/**
 * @summary PTCPreEstStatus_established
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_established: PTCPreEstStatus = PTCPreEstStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: PTCPreEstStatus = PTCPreEstStatus.established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPreEstStatus_modified
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_modified: PTCPreEstStatus = PTCPreEstStatus.modified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modified
 * @constant
 * @type {number}
 */
export
const modified: PTCPreEstStatus = PTCPreEstStatus.modified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPreEstStatus_released
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_released: PTCPreEstStatus = PTCPreEstStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: PTCPreEstStatus = PTCPreEstStatus.released; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PTCPreEstStatus: $.ASN1Decoder<PTCPreEstStatus> = $._decodeEnumerated;

export const _encode_PTCPreEstStatus: $.ASN1Encoder<PTCPreEstStatus> = $._encodeEnumerated;


/* eslint-enable */
