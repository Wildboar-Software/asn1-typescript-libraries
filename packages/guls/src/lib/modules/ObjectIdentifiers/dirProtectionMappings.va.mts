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
import { modules } from '../ObjectIdentifiers/modules.va.mjs';

/**
 * @summary dirProtectionMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirProtectionMappings OBJECT IDENTIFIER ::= {modules 4}
 * ```
 *
 * @constant
 */
export const dirProtectionMappings: OBJECT_IDENTIFIER = _OID.fromParts([4], modules);

/* eslint-enable */
