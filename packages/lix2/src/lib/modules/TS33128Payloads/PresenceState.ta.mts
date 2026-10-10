/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PresenceState {
    inArea = 1,
    outOfArea = 2,
    unknown = 3,
    inactive = 4,
}

/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState_inArea
 * @constant
 * @type {number}
 */
export
const PresenceState_inArea: PresenceState = PresenceState.inArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inArea
 * @constant
 * @type {number}
 */
export
const inArea: PresenceState = PresenceState.inArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_outOfArea
 * @constant
 * @type {number}
 */
export
const PresenceState_outOfArea: PresenceState = PresenceState.outOfArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfArea
 * @constant
 * @type {number}
 */
export
const outOfArea: PresenceState = PresenceState.outOfArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_unknown
 * @constant
 * @type {number}
 */
export
const PresenceState_unknown: PresenceState = PresenceState.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PresenceState = PresenceState.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_inactive
 * @constant
 * @type {number}
 */
export
const PresenceState_inactive: PresenceState = PresenceState.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: PresenceState = PresenceState.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PresenceState = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceState, encoded as an ASN.1 Element.
 */
export const _encode_PresenceState = $._encodeEnumerated;


/* eslint-enable */
