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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BiometricInformationTemplate,
  _decode_BiometricInformationTemplate,
  _encode_BiometricInformationTemplate,
} from '../CBEFF-SMARTCARD-BIDO/BiometricInformationTemplate.ta.mjs';
/* START_OF_SYMBOL_DEFINITION GroupBIT */
/**
 * @summary GroupBIT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GroupBIT  ::=  [APPLICATION 97]  SET OF BiometricInformationTemplate
 * ```
 */
export type GroupBIT = BiometricInformationTemplate[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION GroupBIT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GroupBIT */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GroupBIT */

/* START_OF_SYMBOL_DEFINITION _decode_GroupBIT */
export const _decode_GroupBIT = $._decode_implicit<GroupBIT>(() =>
  $._decodeSetOf<BiometricInformationTemplate>(
    () => _decode_BiometricInformationTemplate
  )
);
/* END_OF_SYMBOL_DEFINITION _decode_GroupBIT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GroupBIT */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GroupBIT */

/* START_OF_SYMBOL_DEFINITION _encode_GroupBIT */
export const _encode_GroupBIT = $._encode_implicit(
  _TagClass.application,
  97,
  () =>
    $._encodeSetOf<BiometricInformationTemplate>(
      () => _encode_BiometricInformationTemplate,
      $.BER
    ),
  $.BER
);

/* END_OF_SYMBOL_DEFINITION _encode_GroupBIT */

/* eslint-enable */
