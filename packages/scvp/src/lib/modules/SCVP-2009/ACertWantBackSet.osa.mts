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
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
import { swb_ac_cert } from '../SCVP-2009/swb-ac-cert.oa.mjs';
import { swb_aa_cert_path } from '../SCVP-2009/swb-aa-cert-path.oa.mjs';
import { swb_aa_revocation_info } from '../SCVP-2009/swb-aa-revocation-info.oa.mjs';
import { swb_ac_revocation_info } from '../SCVP-2009/swb-ac-revocation-info.oa.mjs';
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

/* eslint-enable */
