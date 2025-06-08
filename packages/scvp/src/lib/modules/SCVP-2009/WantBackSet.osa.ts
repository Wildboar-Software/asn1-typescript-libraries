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
import { swb_pkc_cert } from '../SCVP-2009/swb-pkc-cert.oa';
export { swb_pkc_cert } from '../SCVP-2009/swb-pkc-cert.oa';
import { swb_pkc_best_cert_path } from '../SCVP-2009/swb-pkc-best-cert-path.oa';
export { swb_pkc_best_cert_path } from '../SCVP-2009/swb-pkc-best-cert-path.oa';
import { swb_pkc_revocation_info } from '../SCVP-2009/swb-pkc-revocation-info.oa';
export { swb_pkc_revocation_info } from '../SCVP-2009/swb-pkc-revocation-info.oa';
import { swb_pkc_public_key_info } from '../SCVP-2009/swb-pkc-public-key-info.oa';
export { swb_pkc_public_key_info } from '../SCVP-2009/swb-pkc-public-key-info.oa';
import { swb_pkc_all_cert_paths } from '../SCVP-2009/swb-pkc-all-cert-paths.oa';
export { swb_pkc_all_cert_paths } from '../SCVP-2009/swb-pkc-all-cert-paths.oa';
import { swb_pkc_ee_revocation_info } from '../SCVP-2009/swb-pkc-ee-revocation-info.oa';
export { swb_pkc_ee_revocation_info } from '../SCVP-2009/swb-pkc-ee-revocation-info.oa';
import { swb_pkc_CAs_revocation_info } from '../SCVP-2009/swb-pkc-CAs-revocation-info.oa';
export { swb_pkc_CAs_revocation_info } from '../SCVP-2009/swb-pkc-CAs-revocation-info.oa';

/* START_OF_SYMBOL_DEFINITION WantBackSet */
/**
 * @summary WantBackSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WantBackSet WANT-BACK ::= {
 *     swb-pkc-cert | swb-pkc-best-cert-path |
 *     swb-pkc-revocation-info | swb-pkc-public-key-info |
 *     swb-pkc-all-cert-paths | swb-pkc-ee-revocation-info |
 *     swb-pkc-CAs-revocation-info
 * }
 * ```
 *
 * @constant
 * @type {WANT_BACK[]}
 *
 */
export const WantBackSet: WANT_BACK<any>[] = [
  swb_pkc_cert,
  swb_pkc_best_cert_path,
  swb_pkc_revocation_info,
  swb_pkc_public_key_info,
  swb_pkc_all_cert_paths,
  swb_pkc_ee_revocation_info,
  swb_pkc_CAs_revocation_info,
];
/* END_OF_SYMBOL_DEFINITION WantBackSet */

/* eslint-enable */
