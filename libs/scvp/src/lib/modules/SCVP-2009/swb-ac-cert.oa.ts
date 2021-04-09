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
  AttributeCertificate,
  _decode_AttributeCertificate,
  _encode_AttributeCertificate,
} from '@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta';
import { id_swb_ac_cert } from '../SCVP-2009/id-swb-ac-cert.va';
export { id_swb_ac_cert } from '../SCVP-2009/id-swb-ac-cert.va';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';
export { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';

/* START_OF_SYMBOL_DEFINITION swb_ac_cert */
/**
 * @summary swb_ac_cert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-ac-cert WANT-BACK ::= { AttributeCertificate IDENTIFIED BY id-swb-ac-cert }
 * ```
 *
 * @constant
 * @type {WANT_BACK<AttributeCertificate>}
 * @implements {WANT_BACK<AttributeCertificate>}
 */
export const swb_ac_cert: WANT_BACK<AttributeCertificate> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_AttributeCertificate,
  },
  encoderFor: {
    '&Type': _encode_AttributeCertificate,
  },
  '&id': id_swb_ac_cert /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION swb_ac_cert */

/* eslint-enable */
