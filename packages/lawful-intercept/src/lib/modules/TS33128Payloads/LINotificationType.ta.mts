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
const LINotificationType: typeof _enum_for_LINotificationType = _enum_for_LINotificationType;

/**
 * @summary LINotificationType_activation
 * @constant
 * @type {number}
 */
export
const LINotificationType_activation: _enum_for_LINotificationType.activation = LINotificationType.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @constant
 * @type {number}
 */
export
const activation: _enum_for_LINotificationType.activation = LINotificationType.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LINotificationType_deactivation
 * @constant
 * @type {number}
 */
export
const LINotificationType_deactivation: _enum_for_LINotificationType.deactivation = LINotificationType.deactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivation
 * @constant
 * @type {number}
 */
export
const deactivation: _enum_for_LINotificationType.deactivation = LINotificationType.deactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LINotificationType_modification
 * @constant
 * @type {number}
 */
export
const LINotificationType_modification: _enum_for_LINotificationType.modification = LINotificationType.modification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modification
 * @constant
 * @type {number}
 */
export
const modification: _enum_for_LINotificationType.modification = LINotificationType.modification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LINotificationType: $.ASN1Decoder<LINotificationType> = $._decodeEnumerated;
export const _encode_LINotificationType: $.ASN1Encoder<LINotificationType> = $._encodeEnumerated;


/* eslint-enable */
