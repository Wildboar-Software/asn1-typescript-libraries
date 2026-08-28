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
 * @summary dirProtectionMappings
 * @description
 *
 * OID of the `DirectoryProtectionMappings` module
 * (`{modules 4}`): mappings bit-compatible with X.509
 * `ENCRYPTED` / `SIGNED` / `SIGNATURE`. ITU-T Rec. X.830 (04/95)
 * [Annex E](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex F.
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
