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
import { id_nvae } from '../SCVP-2009/id-nvae.va.mjs';
/**
 * @summary id_nvae_unknown_alg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nvae-unknown-alg     OBJECT IDENTIFIER ::= { id-nvae 3 }
 * ```
 *
 * @constant
 */
export const id_nvae_unknown_alg: OBJECT_IDENTIFIER = new _OID([3], id_nvae);

/* eslint-enable */
