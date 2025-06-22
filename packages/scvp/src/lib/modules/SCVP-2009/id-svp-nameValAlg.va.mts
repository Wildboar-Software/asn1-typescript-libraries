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
 * @summary id_svp_nameValAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-svp-nameValAlg OBJECT IDENTIFIER ::= { id-svp 2 }
 * ```
 *
 * @constant
 */
export const id_svp_nameValAlg: OBJECT_IDENTIFIER = _OID.fromParts([2], id_svp);

/* eslint-enable */
