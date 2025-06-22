/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
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
export const RegistrationProblem_registration_not_supported: RegistrationProblem = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_not_supported
 * @constant
 * @type {number}
 */
export const registration_not_supported: RegistrationProblem = RegistrationProblem_registration_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationProblem_registration_improperly_specified
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_improperly_specified: RegistrationProblem = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_improperly_specified
 * @constant
 * @type {number}
 */
export const registration_improperly_specified: RegistrationProblem = RegistrationProblem_registration_improperly_specified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationProblem_registration_limit_exceeded
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_limit_exceeded: RegistrationProblem = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_limit_exceeded
 * @constant
 * @type {number}
 */
export const registration_limit_exceeded: RegistrationProblem = RegistrationProblem_registration_limit_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_RegistrationProblem = $._decodeEnumerated;


export const _encode_RegistrationProblem = $._encodeEnumerated;


/* eslint-enable */
