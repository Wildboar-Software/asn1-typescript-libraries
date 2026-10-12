/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMMStatus {
    uE5GMMRegistered = 1,
    uENot5GMMRegistered = 2,
}

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus_uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMMStatus_uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGMMStatus: $.ASN1Decoder<FiveGMMStatus> = $._decodeEnumerated;
export const _encode_FiveGMMStatus: $.ASN1Encoder<FiveGMMStatus> = $._encodeEnumerated;


/* eslint-enable */
