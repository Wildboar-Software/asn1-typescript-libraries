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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindProblem  ::=  ENUMERATED {
 *   authentication-error(0), unacceptable-security-context(1),
 *   unable-to-establish-association(2), ... -- 1994 extension addition --,
 *   bind-extension-problem(3), inadequate-association-confidentiality(4)
 * }
 * ```@enum {number}
 */
export type BindProblem = _enum_for_BindProblem | ENUMERATED;

/**
 * @summary BindProblem_authentication_error
 * @constant
 * @type {number}
 */
export const BindProblem_authentication_error: BindProblem = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: BindProblem = BindProblem_authentication_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const BindProblem_unacceptable_security_context: BindProblem = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: BindProblem = BindProblem_unacceptable_security_context; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_unable_to_establish_association
 * @constant
 * @type {number}
 */
export const BindProblem_unable_to_establish_association: BindProblem = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unable_to_establish_association
 * @constant
 * @type {number}
 */
export const unable_to_establish_association: BindProblem = BindProblem_unable_to_establish_association; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_bind_extension_problem
 * @constant
 * @type {number}
 */
export const BindProblem_bind_extension_problem: BindProblem = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bind_extension_problem
 * @constant
 * @type {number}
 */
export const bind_extension_problem: BindProblem = BindProblem_bind_extension_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BindProblem_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const BindProblem_inadequate_association_confidentiality: BindProblem = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality: BindProblem = BindProblem_inadequate_association_confidentiality; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_BindProblem = $._decodeEnumerated;


export const _encode_BindProblem = $._encodeEnumerated;


/* eslint-enable */
