/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_PreEstStatus {
    established = 1,
    modify = 2,
    released = 3,
}

/**
 * @summary PreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreEstStatus             ::=  ENUMERATED
 * {
 *     established        (1),
 *     modify            (2),
 *     released        (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PreEstStatus = _enum_for_PreEstStatus | ENUMERATED;

/**
 * @summary PreEstStatus_established
 * @constant
 * @type {number}
 */
export
const PreEstStatus_established: PreEstStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: PreEstStatus = PreEstStatus_established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_modify
 * @constant
 * @type {number}
 */
export
const PreEstStatus_modify: PreEstStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @constant
 * @type {number}
 */
export
const modify: PreEstStatus = PreEstStatus_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_released
 * @constant
 * @type {number}
 */
export
const PreEstStatus_released: PreEstStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: PreEstStatus = PreEstStatus_released; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PreEstStatus: $.ASN1Decoder<PreEstStatus> = $._decodeEnumerated;

export const _encode_PreEstStatus: $.ASN1Encoder<PreEstStatus> = $._encodeEnumerated;

/* eslint-enable */
