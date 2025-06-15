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
import {
  CertBundles,
  _decode_CertBundles,
  _encode_CertBundles,
} from '../SCVP-2009/CertBundles.ta.mjs';
import { id_swb_pkc_all_cert_paths } from '../SCVP-2009/id-swb-pkc-all-cert-paths.va.mjs';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
/**
 * @summary swb_pkc_all_cert_paths
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-pkc-all-cert-paths WANT-BACK ::= {CertBundles IDENTIFIED BY id-swb-pkc-all-cert-paths }
 * ```
 *
 * @constant
 * @type {WANT_BACK<CertBundles>}
 * @implements {WANT_BACK<CertBundles>}
 */
export const swb_pkc_all_cert_paths: WANT_BACK<CertBundles> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_CertBundles,
  },
  encoderFor: {
    '&Type': _encode_CertBundles,
  },
  '&id': id_swb_pkc_all_cert_paths /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
