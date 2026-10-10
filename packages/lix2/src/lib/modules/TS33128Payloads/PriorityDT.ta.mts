/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityDT {
    noPriority = 1,
    priority = 2,
}

/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityDT = _enum_for_PriorityDT;

/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityDT = _enum_for_PriorityDT;

/**
 * @summary PriorityDT_noPriority
 * @constant
 * @type {number}
 */
export
const PriorityDT_noPriority: PriorityDT = PriorityDT.noPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noPriority
 * @constant
 * @type {number}
 */
export
const noPriority: PriorityDT = PriorityDT.noPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityDT_priority
 * @constant
 * @type {number}
 */
export
const PriorityDT_priority: PriorityDT = PriorityDT.priority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priority
 * @constant
 * @type {number}
 */
export
const priority: PriorityDT = PriorityDT.priority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PriorityDT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PriorityDT = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PriorityDT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PriorityDT, encoded as an ASN.1 Element.
 */
export const _encode_PriorityDT = $._encodeEnumerated;


/* eslint-enable */
