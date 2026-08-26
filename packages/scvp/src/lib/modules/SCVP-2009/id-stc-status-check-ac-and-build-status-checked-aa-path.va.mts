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
import { id_stc } from '../SCVP-2009/id-stc.va.mjs';
/**
 * @summary id_stc_status_check_ac_and_build_status_checked_aa_path
 * @description
 *
 * Check: revoke-check the AC and build a status-checked AA path ([RFC 5055 §3.2.2](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-stc-status-check-ac-and-build-status-checked-aa-path
 *                             OBJECT IDENTIFIER ::= { id-stc 7 }
 * ```
 *
 * @constant
 */
export const id_stc_status_check_ac_and_build_status_checked_aa_path: OBJECT_IDENTIFIER = _OID.fromParts(
  [7],
  id_stc
);

/* eslint-enable */
