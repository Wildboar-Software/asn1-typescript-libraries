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
import { id_bvae } from '../SCVP-2009/id-bvae.va.mjs';
/**
 * @summary id_bvae_revoked
 * @description
 *
 * Basic val error: end certificate has been revoked ([RFC 5055 §3.2.4.2.2](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4.2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bvae-revoked              OBJECT IDENTIFIER ::= { id-bvae 5 }
 * ```
 *
 * @constant
 */
export const id_bvae_revoked: OBJECT_IDENTIFIER = _OID.fromParts([5], id_bvae);

/* eslint-enable */
