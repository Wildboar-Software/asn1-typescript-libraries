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
 * CCR functional units proposed or selected on C-INITIALIZE. Default
 * `{static-commitment}`. The acceptor includes only units that were
 * both proposed and locally supported. Service semantics of each unit
 * are in ITU-T Rec. X.851 | ISO/IEC 9804; this protocol spec names
 * them and gates procedures (X.852 §7.1.4.2, §7.1.5.2, Annex A).
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
 * @description
 *
 * Bit 0. Default FU. Pre-1997 editions specified Versions 1 and 2
 * for this unit only (X.852 Introduction, Annex A).
 *
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
 * @description
 *
 * Bit 1. Named FU; X.852 does not define its service semantics
 * (see X.851).
 *
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
 * @description
 *
 * Bit 2. Required to use C-NOCHANGE (X.852 §7.7.1).
 *
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
 * @description
 *
 * Bit 3. Required to use C-CANCEL (X.852 §7.8.3.2).
 *
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
 * @description
 *
 * Bit 4. Allows recovery of more than one branch on an association
 * that is not also running an undisrupted branch. Without it,
 * C-BEGIN and C-RECOVER cannot collide (X.852 §7.2.7, §7.9.3).
 *
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
