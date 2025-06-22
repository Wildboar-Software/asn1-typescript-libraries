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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Ccr_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ccr-requirements  ::=  BIT STRING {
 *   static-commitment(0), dynamic-commitment(1), nochange-completion(2),
 *   cancel(3), overlapped-recovery(4)}
 * ```
 */
export type Ccr_requirements = BIT_STRING;


/**
 * @summary Ccr_requirements_static_commitment
 * @constant
 */
export const Ccr_requirements_static_commitment: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary static_commitment
 * @constant
 */
export const static_commitment: number = Ccr_requirements_static_commitment; /* SHORT_NAMED_BIT */


/**
 * @summary Ccr_requirements_dynamic_commitment
 * @constant
 */
export const Ccr_requirements_dynamic_commitment: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary dynamic_commitment
 * @constant
 */
export const dynamic_commitment: number = Ccr_requirements_dynamic_commitment; /* SHORT_NAMED_BIT */


/**
 * @summary Ccr_requirements_nochange_completion
 * @constant
 */
export const Ccr_requirements_nochange_completion: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary nochange_completion
 * @constant
 */
export const nochange_completion: number = Ccr_requirements_nochange_completion; /* SHORT_NAMED_BIT */


/**
 * @summary Ccr_requirements_cancel
 * @constant
 */
export const Ccr_requirements_cancel: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary cancel
 * @constant
 */
export const cancel: number = Ccr_requirements_cancel; /* SHORT_NAMED_BIT */


/**
 * @summary Ccr_requirements_overlapped_recovery
 * @constant
 */
export const Ccr_requirements_overlapped_recovery: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary overlapped_recovery
 * @constant
 */
export const overlapped_recovery: number = Ccr_requirements_overlapped_recovery; /* SHORT_NAMED_BIT */




export const _decode_Ccr_requirements = $._decodeBitString;




export const _encode_Ccr_requirements = $._encodeBitString;


/* eslint-enable */
