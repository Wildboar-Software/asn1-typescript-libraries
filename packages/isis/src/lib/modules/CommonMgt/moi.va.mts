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
import { cmoi } from '../CommonMgt/cmoi.va.mjs';
/**
 * @summary moi
 * @description
 *
 * GMI managed-object-class registration arc `{cmoi managedObjectClass(3)}`.
 *
 * (ISO/IEC 10589:2002 Annex E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * moi OBJECT IDENTIFIER ::= {cmoi managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const moi: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* managedObjectClass */ 3],
  cmoi
);

/* eslint-enable */
