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
import { swb_pkc_cert } from '../SCVP-2009/swb-pkc-cert.oa.mjs';
import { swb_pkc_best_cert_path } from '../SCVP-2009/swb-pkc-best-cert-path.oa.mjs';
import { swb_pkc_revocation_info } from '../SCVP-2009/swb-pkc-revocation-info.oa.mjs';
import { swb_pkc_public_key_info } from '../SCVP-2009/swb-pkc-public-key-info.oa.mjs';
import { swb_pkc_all_cert_paths } from '../SCVP-2009/swb-pkc-all-cert-paths.oa.mjs';
import { swb_pkc_ee_revocation_info } from '../SCVP-2009/swb-pkc-ee-revocation-info.oa.mjs';
import { swb_pkc_CAs_revocation_info } from '../SCVP-2009/swb-pkc-CAs-revocation-info.oa.mjs';
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
