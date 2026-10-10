/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFEventsSubscriptionOpType {
    pOST = 1,
    pUT = 2,
    dELETE = 3,
}

/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;

/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;

/**
 * @summary NWDAFEventsSubscriptionOpType_pOST
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_pOST: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pOST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOST
 * @constant
 * @type {number}
 */
export
const pOST: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pOST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionOpType_pUT
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_pUT: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pUT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pUT
 * @constant
 * @type {number}
 */
export
const pUT: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.pUT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionOpType_dELETE
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_dELETE: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.dELETE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dELETE
 * @constant
 * @type {number}
 */
export
const dELETE: NWDAFEventsSubscriptionOpType = NWDAFEventsSubscriptionOpType.dELETE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEventsSubscriptionOpType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NWDAFEventsSubscriptionOpType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NWDAFEventsSubscriptionOpType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEventsSubscriptionOpType, encoded as an ASN.1 Element.
 */
export const _encode_NWDAFEventsSubscriptionOpType = $._encodeEnumerated;


/* eslint-enable */
