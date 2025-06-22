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
 * @summary id_nvae_name_mismatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nvae-name-mismatch   OBJECT IDENTIFIER ::= { id-nvae 1 }
 * ```
 *
 * @constant
 */
export const id_nvae_name_mismatch: OBJECT_IDENTIFIER = _OID.fromParts([1], id_nvae);

/* eslint-enable */
