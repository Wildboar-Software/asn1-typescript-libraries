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
 * @summary id_bvae_noValidCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bvae-noValidCertPath      OBJECT IDENTIFIER ::= { id-bvae 4 }
 * ```
 *
 * @constant
 */
export const id_bvae_noValidCertPath: OBJECT_IDENTIFIER = _OID.fromParts(
  [4],
  id_bvae
);

/* eslint-enable */
