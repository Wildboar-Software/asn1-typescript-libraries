/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { id_swb } from '../SCVP-2009/id-swb.va.mjs';
/**
 * @summary id_swb_pkc_all_cert_paths
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-swb-pkc-all-cert-paths       OBJECT IDENTIFIER ::= { id-swb 12}
 * ```
 *
 * @constant
 */
export const id_swb_pkc_all_cert_paths: OBJECT_IDENTIFIER = _OID.fromParts(
  [12],
  id_swb
);

/* eslint-enable */
