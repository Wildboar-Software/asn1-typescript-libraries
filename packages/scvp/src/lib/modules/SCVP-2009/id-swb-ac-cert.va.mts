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
import { id_swb } from '../SCVP-2009/id-swb.va.mjs';
/**
 * @summary id_swb_ac_cert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-swb-ac-cert OBJECT IDENTIFIER ::= { id-swb 11}
 * ```
 *
 * @constant
 */
export const id_swb_ac_cert: OBJECT_IDENTIFIER = _OID.fromParts([11], id_swb);

/* eslint-enable */
