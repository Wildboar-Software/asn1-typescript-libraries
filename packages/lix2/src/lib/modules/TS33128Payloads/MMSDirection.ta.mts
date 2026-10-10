/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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

/**
 * @summary Decodes an ASN.1 element into a(n) MMSDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMSDirection = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MMSDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSDirection, encoded as an ASN.1 Element.
 */
export const _encode_MMSDirection = $._encodeEnumerated;


/* eslint-enable */
