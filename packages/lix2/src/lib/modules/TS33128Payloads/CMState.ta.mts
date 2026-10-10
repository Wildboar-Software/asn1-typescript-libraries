/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CMState {
    idle = 1,
    connected = 2,
}

/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CMState = _enum_for_CMState;

/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CMState = _enum_for_CMState;

/**
 * @summary CMState_idle
 * @constant
 * @type {number}
 */
export
const CMState_idle: CMState = CMState.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: CMState = CMState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CMState_connected
 * @constant
 * @type {number}
 */
export
const CMState_connected: CMState = CMState.connected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected: CMState = CMState.connected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CMState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CMState = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CMState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMState, encoded as an ASN.1 Element.
 */
export const _encode_CMState = $._encodeEnumerated;


/* eslint-enable */
