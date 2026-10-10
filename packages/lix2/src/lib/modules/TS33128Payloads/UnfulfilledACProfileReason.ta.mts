/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UnfulfilledACProfileReason {
    eASNotAvailable = 1,
    requirementsUnfulfilled = 2,
}

/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UnfulfilledACProfileReason = _enum_for_UnfulfilledACProfileReason;

/**
 * @summary UnfulfilledACProfileReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfileReason  ::=  ENUMERATED
 * {
 *     eASNotAvailable(1),
 *     requirementsUnfulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UnfulfilledACProfileReason = _enum_for_UnfulfilledACProfileReason;

/**
 * @summary UnfulfilledACProfileReason_eASNotAvailable
 * @constant
 * @type {number}
 */
export
const UnfulfilledACProfileReason_eASNotAvailable: UnfulfilledACProfileReason = UnfulfilledACProfileReason.eASNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASNotAvailable
 * @constant
 * @type {number}
 */
export
const eASNotAvailable: UnfulfilledACProfileReason = UnfulfilledACProfileReason.eASNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnfulfilledACProfileReason_requirementsUnfulfilled
 * @constant
 * @type {number}
 */
export
const UnfulfilledACProfileReason_requirementsUnfulfilled: UnfulfilledACProfileReason = UnfulfilledACProfileReason.requirementsUnfulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requirementsUnfulfilled
 * @constant
 * @type {number}
 */
export
const requirementsUnfulfilled: UnfulfilledACProfileReason = UnfulfilledACProfileReason.requirementsUnfulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) UnfulfilledACProfileReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnfulfilledACProfileReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UnfulfilledACProfileReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnfulfilledACProfileReason, encoded as an ASN.1 Element.
 */
export const _encode_UnfulfilledACProfileReason = $._encodeEnumerated;


/* eslint-enable */
