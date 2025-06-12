/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
  CertBundles,
  _decode_CertBundles,
  _encode_CertBundles,
} from '../SCVP-2009/CertBundles.ta.mjs';
export {
  CertBundles,
  _decode_CertBundles,
  _encode_CertBundles,
} from '../SCVP-2009/CertBundles.ta.mjs';
import { id_swb_pkc_all_cert_paths } from '../SCVP-2009/id-swb-pkc-all-cert-paths.va.mjs';
export { id_swb_pkc_all_cert_paths } from '../SCVP-2009/id-swb-pkc-all-cert-paths.va.mjs';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
export { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';

/* START_OF_SYMBOL_DEFINITION swb_pkc_all_cert_paths */
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
/* END_OF_SYMBOL_DEFINITION swb_pkc_all_cert_paths */

/* eslint-enable */
