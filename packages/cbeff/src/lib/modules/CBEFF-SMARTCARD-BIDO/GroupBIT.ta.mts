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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  BiometricInformationTemplate,
  _decode_BiometricInformationTemplate,
  _encode_BiometricInformationTemplate,
} from '../CBEFF-SMARTCARD-BIDO/BiometricInformationTemplate.ta.mjs';
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


export const _decode_GroupBIT: $.ASN1Decoder<GroupBIT> = $._decode_implicit<GroupBIT>(() =>
  $._decodeSetOf<BiometricInformationTemplate>(
    () => _decode_BiometricInformationTemplate
  )
);


export const _encode_GroupBIT: $.ASN1Encoder<GroupBIT> = $._encode_implicit(
  _TagClass.application,
  97,
  () =>
    $._encodeSetOf<BiometricInformationTemplate>(
      () => _encode_BiometricInformationTemplate,
      $.BER
    ),
  $.BER
);


/* eslint-enable */
