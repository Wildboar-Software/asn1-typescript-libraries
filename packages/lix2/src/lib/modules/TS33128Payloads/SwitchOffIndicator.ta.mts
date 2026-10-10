/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SwitchOffIndicator {
    normalDetach = 1,
    switchOff = 2,
}

/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SwitchOffIndicator = _enum_for_SwitchOffIndicator;

/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SwitchOffIndicator = _enum_for_SwitchOffIndicator;

/**
 * @summary SwitchOffIndicator_normalDetach
 * @constant
 * @type {number}
 */
export
const SwitchOffIndicator_normalDetach: SwitchOffIndicator = SwitchOffIndicator.normalDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalDetach
 * @constant
 * @type {number}
 */
export
const normalDetach: SwitchOffIndicator = SwitchOffIndicator.normalDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SwitchOffIndicator_switchOff
 * @constant
 * @type {number}
 */
export
const SwitchOffIndicator_switchOff: SwitchOffIndicator = SwitchOffIndicator.switchOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchOff
 * @constant
 * @type {number}
 */
export
const switchOff: SwitchOffIndicator = SwitchOffIndicator.switchOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SwitchOffIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SwitchOffIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SwitchOffIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchOffIndicator, encoded as an ASN.1 Element.
 */
export const _encode_SwitchOffIndicator = $._encodeEnumerated;


/* eslint-enable */
