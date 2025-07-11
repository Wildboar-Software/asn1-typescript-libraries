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
import { id_kp } from '../SCVP-2009/id-kp.va.mjs';
/**
 * @summary id_kp_scvpClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kp-scvpClient   OBJECT IDENTIFIER ::= { id-kp 16 }
 * ```
 *
 * @constant
 */
export const id_kp_scvpClient: OBJECT_IDENTIFIER = _OID.fromParts([16], id_kp);

/* eslint-enable */
