/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LINotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationType  ::=  ENUMERATED
 * {
 *     activation(1),
 *     deactivation(2),
 *     modification(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LINotificationType {
    activation = 1,
    deactivation = 2,
    modification = 3,
}

/**
 * @summary LINotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationType  ::=  ENUMERATED
 * {
 *     activation(1),
 *     deactivation(2),
 *     modification(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LINotificationType = _enum_for_LINotificationType;

/**
 * @summary LINotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationType  ::=  ENUMERATED
 * {
 *     activation(1),
 *     deactivation(2),
 *     modification(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LINotificationType = _enum_for_LINotificationType;

/**
 * @summary LINotificationType_activation
 * @constant
 * @type {number}
 */
export
const LINotificationType_activation: LINotificationType = LINotificationType.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @constant
 * @type {number}
 */
export
const activation: LINotificationType = LINotificationType.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LINotificationType_deactivation
 * @constant
 * @type {number}
 */
export
const LINotificationType_deactivation: LINotificationType = LINotificationType.deactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivation
 * @constant
 * @type {number}
 */
export
const deactivation: LINotificationType = LINotificationType.deactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LINotificationType_modification
 * @constant
 * @type {number}
 */
export
const LINotificationType_modification: LINotificationType = LINotificationType.modification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modification
 * @constant
 * @type {number}
 */
export
const modification: LINotificationType = LINotificationType.modification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LINotificationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LINotificationType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LINotificationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LINotificationType, encoded as an ASN.1 Element.
 */
export const _encode_LINotificationType = $._encodeEnumerated;


/* eslint-enable */
