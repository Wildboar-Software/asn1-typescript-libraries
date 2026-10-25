/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RegistrationType
 * @description
 * 
 * Specifies the type of registration, see TS 24.501 [13] clause 9.11.3.7. This
 * is derived from the information received from the UE in the REGISTRATION
 * REQUEST message.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the type of registration, see TS 24.501 [13] clause 9.11.3.7. This
 * is derived from the information received from the UE in the REGISTRATION
 * REQUEST message.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the type of registration, see TS 24.501 [13] clause 9.11.3.7. This
 * is derived from the information received from the UE in the REGISTRATION
 * REQUEST message.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const RegistrationType: typeof _enum_for_RegistrationType = _enum_for_RegistrationType;

/**
 * @summary RegistrationType_registration
 * @constant
 * @type {number}
 */
export
const RegistrationType_registration: _enum_for_RegistrationType.registration = RegistrationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: _enum_for_RegistrationType.registration = RegistrationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_registrationUpdate
 * @constant
 * @type {number}
 */
export
const RegistrationType_registrationUpdate: _enum_for_RegistrationType.registrationUpdate = RegistrationType.registrationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationUpdate
 * @constant
 * @type {number}
 */
export
const registrationUpdate: _enum_for_RegistrationType.registrationUpdate = RegistrationType.registrationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationType_deregistration
 * @constant
 * @type {number}
 */
export
const RegistrationType_deregistration: _enum_for_RegistrationType.deregistration = RegistrationType.deregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistration
 * @constant
 * @type {number}
 */
export
const deregistration: _enum_for_RegistrationType.deregistration = RegistrationType.deregistration; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RegistrationType: $.ASN1Decoder<RegistrationType> = $._decodeEnumerated;
export const _encode_RegistrationType: $.ASN1Encoder<RegistrationType> = $._encodeEnumerated;


/* eslint-enable */
