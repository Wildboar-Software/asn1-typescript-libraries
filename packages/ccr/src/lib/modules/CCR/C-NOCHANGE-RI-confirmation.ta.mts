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


export enum _enum_for_C_NOCHANGE_RI_confirmation {
  not_required = 0,
  result_requested = 1,
}


/**
 * @summary C_NOCHANGE_RI_confirmation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-NOCHANGE-RI-confirmation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type C_NOCHANGE_RI_confirmation =
  | _enum_for_C_NOCHANGE_RI_confirmation
  | ENUMERATED;


/**
 * @summary C_NOCHANGE_RI_confirmation_not_required
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RI_confirmation_not_required: C_NOCHANGE_RI_confirmation = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary not_required
 * @constant
 * @type {number}
 */
export const not_required: C_NOCHANGE_RI_confirmation = C_NOCHANGE_RI_confirmation_not_required; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary C_NOCHANGE_RI_confirmation_result_requested
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RI_confirmation_result_requested: C_NOCHANGE_RI_confirmation = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary result_requested
 * @constant
 * @type {number}
 */
export const result_requested: C_NOCHANGE_RI_confirmation = C_NOCHANGE_RI_confirmation_result_requested; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_C_NOCHANGE_RI_confirmation = $._decodeEnumerated;




export const _encode_C_NOCHANGE_RI_confirmation = $._encodeEnumerated;


/* eslint-enable */
