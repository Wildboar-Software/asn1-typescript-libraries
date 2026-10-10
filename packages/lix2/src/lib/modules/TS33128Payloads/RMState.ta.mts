/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RMState {
    registered = 1,
    deregistered = 2,
}

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RMState = _enum_for_RMState;

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RMState = _enum_for_RMState;

/**
 * @summary RMState_registered
 * @constant
 * @type {number}
 */
export
const RMState_registered: RMState = RMState.registered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registered
 * @constant
 * @type {number}
 */
export
const registered: RMState = RMState.registered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RMState_deregistered
 * @constant
 * @type {number}
 */
export
const RMState_deregistered: RMState = RMState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @constant
 * @type {number}
 */
export
const deregistered: RMState = RMState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RMState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RMState = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RMState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RMState, encoded as an ASN.1 Element.
 */
export const _encode_RMState = $._encodeEnumerated;


/* eslint-enable */
