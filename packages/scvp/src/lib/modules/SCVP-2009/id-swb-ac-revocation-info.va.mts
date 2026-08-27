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
 * @summary id_swb_ac_revocation_info
 * @description
 *
 * WantBack OID: revocation proofs for the AC issuer path ([RFC 5055 §3.2.3](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-swb-ac-revocation-info       OBJECT IDENTIFIER ::= { id-swb 7 }
 * ```
 *
 * @constant
 */
export const id_swb_ac_revocation_info: OBJECT_IDENTIFIER = _OID.fromParts(
  [7],
  id_swb
);

/* eslint-enable */
