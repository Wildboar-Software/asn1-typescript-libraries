/* eslint-disable */
import {
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
import {
  Any_sub_type,
  _decode_Any_sub_type,
  _encode_Any_sub_type,
} from '../CBEFF-DATA-ELEMENTS/Any-sub-type.ta.mjs';
import {
  Vein_only,
  _decode_Vein_only,
  _encode_Vein_only,
} from '../CBEFF-DATA-ELEMENTS/Vein-only.ta.mjs';
/**
 * @summary BiometricSubtype
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricSubtype  ::=  CHOICE {any        Any-sub-type,
 *                              vein-only  Vein-only
 * }
 * ```
 */
export type BiometricSubtype =
  | { any_: Any_sub_type } /* CHOICE_ALT_ROOT */
  | { vein_only: Vein_only } /* CHOICE_ALT_ROOT */;


export const _decode_BiometricSubtype = $._decode_inextensible_choice<BiometricSubtype>(
  {
    'CONTEXT 0': ['any_', _decode_Any_sub_type],
    'CONTEXT 1': ['vein_only', _decode_Vein_only],
  }
);


export const _encode_BiometricSubtype = $._encode_choice<BiometricSubtype>(
  {
    any_: _encode_Any_sub_type,
    vein_only: _encode_Vein_only,
  },
  $.BER
);


/* eslint-enable */
