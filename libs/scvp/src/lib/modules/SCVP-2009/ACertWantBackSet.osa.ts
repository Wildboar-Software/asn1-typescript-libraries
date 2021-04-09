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
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';
export { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';
import { swb_ac_cert } from '../SCVP-2009/swb-ac-cert.oa';
export { swb_ac_cert } from '../SCVP-2009/swb-ac-cert.oa';
import { swb_aa_cert_path } from '../SCVP-2009/swb-aa-cert-path.oa';
export { swb_aa_cert_path } from '../SCVP-2009/swb-aa-cert-path.oa';
import { swb_aa_revocation_info } from '../SCVP-2009/swb-aa-revocation-info.oa';
export { swb_aa_revocation_info } from '../SCVP-2009/swb-aa-revocation-info.oa';
import { swb_ac_revocation_info } from '../SCVP-2009/swb-ac-revocation-info.oa';
export { swb_ac_revocation_info } from '../SCVP-2009/swb-ac-revocation-info.oa';

/* START_OF_SYMBOL_DEFINITION ACertWantBackSet */
/**
 * @summary ACertWantBackSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACertWantBackSet WANT-BACK ::= {
 *     swb-ac-cert | swb-aa-cert-path |
 *     swb-aa-revocation-info | swb-ac-revocation-info
 * }
 * ```
 *
 * @constant
 * @type {WANT_BACK[]}
 *
 */
export const ACertWantBackSet: WANT_BACK<any>[] = [
  swb_ac_cert,
  swb_aa_cert_path,
  swb_aa_revocation_info,
  swb_ac_revocation_info,
];
/* END_OF_SYMBOL_DEFINITION ACertWantBackSet */

/* eslint-enable */
