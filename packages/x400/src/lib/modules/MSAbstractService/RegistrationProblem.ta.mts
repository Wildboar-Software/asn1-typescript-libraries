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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_RegistrationProblem */
export enum _enum_for_RegistrationProblem {
    registration_not_supported = 0,
    registration_improperly_specified = 1,
    registration_limit_exceeded = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RegistrationProblem */

/* START_OF_SYMBOL_DEFINITION RegistrationProblem */
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
 * ```@enum {number}
 */
export type RegistrationProblem = _enum_for_RegistrationProblem | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RegistrationProblem */

/* START_OF_SYMBOL_DEFINITION RegistrationProblem_registration_not_supported */
/**
 * @summary RegistrationProblem_registration_not_supported
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_not_supported: RegistrationProblem = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RegistrationProblem_registration_not_supported */

/* START_OF_SYMBOL_DEFINITION registration_not_supported */
/**
 * @summary registration_not_supported
 * @constant
 * @type {number}
 */
export const registration_not_supported: RegistrationProblem = RegistrationProblem_registration_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION registration_not_supported */

/* START_OF_SYMBOL_DEFINITION RegistrationProblem_registration_improperly_specified */
/**
 * @summary RegistrationProblem_registration_improperly_specified
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_improperly_specified: RegistrationProblem = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RegistrationProblem_registration_improperly_specified */

/* START_OF_SYMBOL_DEFINITION registration_improperly_specified */
/**
 * @summary registration_improperly_specified
 * @constant
 * @type {number}
 */
export const registration_improperly_specified: RegistrationProblem = RegistrationProblem_registration_improperly_specified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION registration_improperly_specified */

/* START_OF_SYMBOL_DEFINITION RegistrationProblem_registration_limit_exceeded */
/**
 * @summary RegistrationProblem_registration_limit_exceeded
 * @constant
 * @type {number}
 */
export const RegistrationProblem_registration_limit_exceeded: RegistrationProblem = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RegistrationProblem_registration_limit_exceeded */

/* START_OF_SYMBOL_DEFINITION registration_limit_exceeded */
/**
 * @summary registration_limit_exceeded
 * @constant
 * @type {number}
 */
export const registration_limit_exceeded: RegistrationProblem = RegistrationProblem_registration_limit_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION registration_limit_exceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationProblem */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationProblem */
export const _decode_RegistrationProblem = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationProblem */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationProblem */
export const _encode_RegistrationProblem = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationProblem */

/* eslint-enable */
