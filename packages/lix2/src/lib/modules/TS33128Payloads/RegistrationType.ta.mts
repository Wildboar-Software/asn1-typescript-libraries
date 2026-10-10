/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {
 *     registration (1),
 *     registrationUpdate(2),
 *     deregistration(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RegistrationType {
    registration = 1,
    registrationUpdate = 2,
    deregistration = 3,
}

/**
 * @summary RegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {
 *     registration (1),
 *     registrationUpdate(2),
 *     deregistration(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationType = _enum_for_RegistrationType;

/**
 * @summary RegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationType  ::=  ENUMERATED
 * {
 *     registration (1),
 *     registrationUpdate(2),
 *     deregistration(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RegistrationType = _enum_for_RegistrationType;

/**
 * @summary RegistrationType_registration
 * @constant
 * @type {number}
 */
export
const RegistrationType_registration: RegistrationType = RegistrationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: RegistrationType = RegistrationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_registrationUpdate
 * @constant
 * @type {number}
 */
export
const RegistrationType_registrationUpdate: RegistrationType = RegistrationType.registrationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationUpdate
 * @constant
 * @type {number}
 */
export
const registrationUpdate: RegistrationType = RegistrationType.registrationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_deregistration
 * @constant
 * @type {number}
 */
export
const RegistrationType_deregistration: RegistrationType = RegistrationType.deregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistration
 * @constant
 * @type {number}
 */
export
const deregistration: RegistrationType = RegistrationType.deregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RegistrationType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RegistrationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationType, encoded as an ASN.1 Element.
 */
export const _encode_RegistrationType = $._encodeEnumerated;


/* eslint-enable */
