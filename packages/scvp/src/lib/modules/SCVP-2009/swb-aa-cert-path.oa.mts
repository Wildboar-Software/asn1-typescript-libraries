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
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta.mjs';
import { id_swb_aa_cert_path } from '../SCVP-2009/id-swb-aa-cert-path.va.mjs';
import { type WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
/**
 * @summary swb_aa_cert_path
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-aa-cert-path WANT-BACK ::= {CertBundle IDENTIFIED BY id-swb-aa-cert-path }
 * ```
 *
 * @constant
 * @type {WANT_BACK<CertBundle>}
 * @implements {WANT_BACK<CertBundle>}
 */
export const swb_aa_cert_path: WANT_BACK<CertBundle> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_CertBundle,
  },
  encoderFor: {
    '&Type': _encode_CertBundle,
  },
  '&id': id_swb_aa_cert_path /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
