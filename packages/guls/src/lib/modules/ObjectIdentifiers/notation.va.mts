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
import { modules } from '../ObjectIdentifiers/modules.va.mjs';

/**
 * @summary notation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notation OBJECT IDENTIFIER ::= {modules 1}
 * ```
 *
 * @constant
 */
export const notation: OBJECT_IDENTIFIER = _OID.fromParts([1], modules);

/* eslint-enable */
