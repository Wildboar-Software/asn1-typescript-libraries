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
/* START_OF_SYMBOL_DEFINITION id_bvae_invalidCertPolicy */
/**
 * @summary id_bvae_invalidCertPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bvae-invalidCertPolicy    OBJECT IDENTIFIER ::= { id-bvae 11 }
 * ```
 *
 * @constant
 */
export const id_bvae_invalidCertPolicy: OBJECT_IDENTIFIER = new _OID(
  [11],
  id_bvae
);
/* END_OF_SYMBOL_DEFINITION id_bvae_invalidCertPolicy */

/* eslint-enable */
