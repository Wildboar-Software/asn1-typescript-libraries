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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta';
export {
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta';
import { id_swb_aa_cert_path } from '../SCVP-2009/id-swb-aa-cert-path.va';
export { id_swb_aa_cert_path } from '../SCVP-2009/id-swb-aa-cert-path.va';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';
export { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';

/* START_OF_SYMBOL_DEFINITION swb_aa_cert_path */
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
/* END_OF_SYMBOL_DEFINITION swb_aa_cert_path */

/* eslint-enable */
