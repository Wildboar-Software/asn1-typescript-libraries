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

export enum _enum_for_BindProblem {
    authentication_error = 0,
    unacceptable_security_context = 1,
    unable_to_establish_association = 2,
    bind_extension_problem = 3,
    inadequate_association_confidentiality = 4,
}

/**
 * @summary BindProblem
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindProblem  ::=  ENUMERATED {
 *   authentication-error(0), unacceptable-security-context(1),
 *   unable-to-establish-association(2), ... -- 1994 extension addition --,
 *   bind-extension-problem(3), inadequate-association-confidentiality(4)
 * }
 * ```
 *
 * @enum {number}
 */
export type BindProblem = _enum_for_BindProblem | ENUMERATED;

/**
 * @summary BindProblem_authentication_error
 * @constant
 * @type {number}
 */
export const BindProblem_authentication_error = _enum_for_BindProblem.authentication_error satisfies BindProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error = BindProblem_authentication_error satisfies BindProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const BindProblem_unacceptable_security_context = _enum_for_BindProblem.unacceptable_security_context satisfies BindProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context = BindProblem_unacceptable_security_context satisfies BindProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_unable_to_establish_association
 * @constant
 * @type {number}
 */
export const BindProblem_unable_to_establish_association = _enum_for_BindProblem.unable_to_establish_association satisfies BindProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unable_to_establish_association
 * @constant
 * @type {number}
 */
export const unable_to_establish_association = BindProblem_unable_to_establish_association satisfies BindProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_bind_extension_problem
 * @constant
 * @type {number}
 */
export const BindProblem_bind_extension_problem = _enum_for_BindProblem.bind_extension_problem satisfies BindProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bind_extension_problem
 * @constant
 * @type {number}
 */
export const bind_extension_problem = BindProblem_bind_extension_problem satisfies BindProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const BindProblem_inadequate_association_confidentiality = _enum_for_BindProblem.inadequate_association_confidentiality satisfies BindProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality = BindProblem_inadequate_association_confidentiality satisfies BindProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_BindProblem = $._decodeEnumerated;


export const _encode_BindProblem = $._encodeEnumerated;


/* eslint-enable */
