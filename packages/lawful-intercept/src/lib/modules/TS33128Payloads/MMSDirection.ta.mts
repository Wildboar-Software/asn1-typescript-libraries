/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDirection  ::=  ENUMERATED
 * {
 *     fromTarget(0),
 *     toTarget(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSDirection {
    fromTarget = 0,
    toTarget = 1,
}

/**
 * @summary MMSDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDirection  ::=  ENUMERATED
 * {
 *     fromTarget(0),
 *     toTarget(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSDirection = _enum_for_MMSDirection;

/**
 * @summary MMSDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDirection  ::=  ENUMERATED
 * {
 *     fromTarget(0),
 *     toTarget(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSDirection = _enum_for_MMSDirection;

/**
 * @summary MMSDirection_fromTarget
 * @constant
 * @type {number}
 */
export
const MMSDirection_fromTarget: MMSDirection = MMSDirection.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: MMSDirection = MMSDirection.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDirection_toTarget
 * @constant
 * @type {number}
 */
export
const MMSDirection_toTarget: MMSDirection = MMSDirection.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: MMSDirection = MMSDirection.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSDirection: $.ASN1Decoder<MMSDirection> = $._decodeEnumerated;
export const _encode_MMSDirection: $.ASN1Encoder<MMSDirection> = $._encodeEnumerated;


/* eslint-enable */
