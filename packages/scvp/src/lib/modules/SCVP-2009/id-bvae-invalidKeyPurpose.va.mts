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
} from 'asn1-ts';
import { id_bvae } from '../SCVP-2009/id-bvae.va.mjs';
/**
 * @summary id_bvae_invalidKeyPurpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bvae-invalidKeyPurpose    OBJECT IDENTIFIER ::= { id-bvae 9 }
 * ```
 *
 * @constant
 */
export const id_bvae_invalidKeyPurpose: OBJECT_IDENTIFIER = new _OID(
  [9],
  id_bvae
);

/* eslint-enable */
