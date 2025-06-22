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
import { id_svp } from '../SCVP-2009/id-svp.va.mjs';
/**
 * @summary id_svp_defaultValPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-svp-defaultValPolicy OBJECT IDENTIFIER ::= { id-svp 1 }
 * ```
 *
 * @constant
 */
export const id_svp_defaultValPolicy: OBJECT_IDENTIFIER = _OID.fromParts([1], id_svp);

/* eslint-enable */
