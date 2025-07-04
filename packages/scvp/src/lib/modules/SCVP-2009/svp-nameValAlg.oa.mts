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
import {
  NameValidationAlgParams,
  _decode_NameValidationAlgParams,
  _encode_NameValidationAlgParams,
} from '../SCVP-2009/NameValidationAlgParams.ta.mjs';
import { id_svp_nameValAlg } from '../SCVP-2009/id-svp-nameValAlg.va.mjs';
import { type POLICY } from '../SCVP-2009/POLICY.oca.mjs';
/**
 * @summary svp_nameValAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * svp-nameValAlg POLICY ::= {TYPE NameValidationAlgParams IDENTIFIED BY id-svp-nameValAlg }
 * ```
 *
 * @constant
 * @type {POLICY<NameValidationAlgParams>}
 * @implements {POLICY<NameValidationAlgParams>}
 */
export const svp_nameValAlg: POLICY = {
  class: 'ATTRIBUTE',
  decoderFor: {
    '&Type': _decode_NameValidationAlgParams,
  },
  encoderFor: {
    '&Type': _encode_NameValidationAlgParams,
  },
  '&id': id_svp_nameValAlg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
//   '&minCount': 1 /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
