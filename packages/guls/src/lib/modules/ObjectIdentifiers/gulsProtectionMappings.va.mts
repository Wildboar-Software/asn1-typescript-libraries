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
 * @summary gulsProtectionMappings
 * @description
 *
 * OID of the `GULSProtectionMappings` module (`{modules 5}`):
 * more general mappings than the Directory ones. ITU-T Rec.
 * X.830 (04/95) [Annex E](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex F.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsProtectionMappings OBJECT IDENTIFIER ::= {modules 5}
 * ```
 *
 * @constant
 */
export const gulsProtectionMappings: OBJECT_IDENTIFIER = _OID.fromParts([5], modules);

/* eslint-enable */
