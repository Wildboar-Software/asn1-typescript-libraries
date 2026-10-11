/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMEDirection {
    networkInitiated = 1,
    uEInitiated = 2,
}

/**
 * @summary MMEDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMEDirection = _enum_for_MMEDirection;

/**
 * @summary MMEDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMEDirection = _enum_for_MMEDirection;

/**
 * @summary MMEDirection_networkInitiated
 * @constant
 * @type {number}
 */
export
const MMEDirection_networkInitiated: MMEDirection = MMEDirection.networkInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInitiated
 * @constant
 * @type {number}
 */
export
const networkInitiated: MMEDirection = MMEDirection.networkInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEDirection_uEInitiated
 * @constant
 * @type {number}
 */
export
const MMEDirection_uEInitiated: MMEDirection = MMEDirection.uEInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitiated
 * @constant
 * @type {number}
 */
export
const uEInitiated: MMEDirection = MMEDirection.uEInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_MMEDirection: $.ASN1Decoder<MMEDirection> = $._decodeEnumerated;

export const _encode_MMEDirection: $.ASN1Encoder<MMEDirection> = $._encodeEnumerated;


/* eslint-enable */
