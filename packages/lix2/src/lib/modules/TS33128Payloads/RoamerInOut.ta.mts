/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoamerInOut {
    in_bound = 1,
    out_bound = 2,
}

/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut_in_bound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_in_bound: RoamerInOut = RoamerInOut.in_bound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_bound
 * @constant
 * @type {number}
 */
export
const in_bound: RoamerInOut = RoamerInOut.in_bound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoamerInOut_out_bound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_out_bound: RoamerInOut = RoamerInOut.out_bound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary out_bound
 * @constant
 * @type {number}
 */
export
const out_bound: RoamerInOut = RoamerInOut.out_bound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RoamerInOut
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoamerInOut = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RoamerInOut into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamerInOut, encoded as an ASN.1 Element.
 */
export const _encode_RoamerInOut = $._encodeEnumerated;


/* eslint-enable */
