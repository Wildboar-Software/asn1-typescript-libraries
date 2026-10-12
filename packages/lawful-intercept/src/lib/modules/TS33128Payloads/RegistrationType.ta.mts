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
export const _decode_RegistrationType: $.ASN1Decoder<RegistrationType> = $._decodeEnumerated;
export const _encode_RegistrationType: $.ASN1Encoder<RegistrationType> = $._encodeEnumerated;


/* eslint-enable */
