/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

export enum _enum_for_RegistrationProblem {
    registration_not_supported = 0,
    registration_improperly_specified = 1,
    registration_limit_exceeded = 2,
}

/**
 * @summary RegistrationProblem
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationProblem  ::=  ENUMERATED {
 *   registration-not-supported(0), registration-improperly-specified(1),
 *   registration-limit-exceeded(2), ... -- For future extension additions --
 *   }
 * ```
 *
 * @enum {number}
 */
export type RegistrationProblem = _enum_for_RegistrationProblem | ENUMERATED;

/**
 * @summary RegistrationProblem_registration_not_supported
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_not_supported = _enum_for_RegistrationProblem.registration_not_supported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_not_supported
 * @constant
 * @type {number}
 */
export const registration_not_supported = RegistrationProblem_registration_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationProblem_registration_improperly_specified
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_improperly_specified = _enum_for_RegistrationProblem.registration_improperly_specified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_improperly_specified
 * @constant
 * @type {number}
 */
export const registration_improperly_specified = RegistrationProblem_registration_improperly_specified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationProblem_registration_limit_exceeded
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_limit_exceeded = _enum_for_RegistrationProblem.registration_limit_exceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_limit_exceeded
 * @constant
 * @type {number}
 */
export const registration_limit_exceeded = RegistrationProblem_registration_limit_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_RegistrationProblem = $._decodeEnumerated;


export const _encode_RegistrationProblem = $._encodeEnumerated;


/* eslint-enable */
