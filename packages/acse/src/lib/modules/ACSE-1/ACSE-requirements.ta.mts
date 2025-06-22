/* eslint-disable */
import {
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ACSE_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACSE-requirements  ::=  BIT STRING {
 *   authentication(0), aSO-context-negotiation(1), higher-level-association(2),
 *   nested-association(3)}
 * ```
 */
export type ACSE_requirements = BIT_STRING;

/**
 * @summary ACSE_requirements_authentication
 * @constant
 */
export const ACSE_requirements_authentication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary authentication
 * @constant
 */
export const authentication: number = ACSE_requirements_authentication; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_aSO_context_negotiation
 * @constant
 */
export const ACSE_requirements_aSO_context_negotiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary aSO_context_negotiation
 * @constant
 */
export const aSO_context_negotiation: number = ACSE_requirements_aSO_context_negotiation; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_higher_level_association
 * @constant
 */
export const ACSE_requirements_higher_level_association: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary higher_level_association
 * @constant
 */
export const higher_level_association: number = ACSE_requirements_higher_level_association; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_nested_association
 * @constant
 */
export const ACSE_requirements_nested_association: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nested_association
 * @constant
 */
export const nested_association: number = ACSE_requirements_nested_association; /* SHORT_NAMED_BIT */


export const _decode_ACSE_requirements = $._decodeBitString;


export const _encode_ACSE_requirements = $._encodeBitString;


/* eslint-enable */
