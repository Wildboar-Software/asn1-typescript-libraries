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
import { id_nvae } from '../SCVP-2009/id-nvae.va.mjs';
/**
 * @summary id_nvae_bad_name_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nvae-bad-name-type   OBJECT IDENTIFIER ::= { id-nvae 5 }
 * ```
 *
 * @constant
 */
export const id_nvae_bad_name_type: OBJECT_IDENTIFIER = _OID.fromParts([5], id_nvae);

/* eslint-enable */
