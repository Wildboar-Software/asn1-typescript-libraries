/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMRegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EMMRegStatus {
    uEEMMRegistered = 1,
    uENotEMMRegistered = 2,
}

/**
 * @summary EMMRegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EMMRegStatus = _enum_for_EMMRegStatus;

/**
 * @summary EMMRegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EMMRegStatus = _enum_for_EMMRegStatus;

/**
 * @summary EMMRegStatus_uEEMMRegistered
 * @constant
 * @type {number}
 */
export
const EMMRegStatus_uEEMMRegistered: EMMRegStatus = EMMRegStatus.uEEMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEEMMRegistered
 * @constant
 * @type {number}
 */
export
const uEEMMRegistered: EMMRegStatus = EMMRegStatus.uEEMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EMMRegStatus_uENotEMMRegistered
 * @constant
 * @type {number}
 */
export
const EMMRegStatus_uENotEMMRegistered: EMMRegStatus = EMMRegStatus.uENotEMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENotEMMRegistered
 * @constant
 * @type {number}
 */
export
const uENotEMMRegistered: EMMRegStatus = EMMRegStatus.uENotEMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_EMMRegStatus: $.ASN1Decoder<EMMRegStatus> = $._decodeEnumerated;

export const _encode_EMMRegStatus: $.ASN1Encoder<EMMRegStatus> = $._encodeEnumerated;


/* eslint-enable */
