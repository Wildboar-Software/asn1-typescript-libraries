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
 * @summary objectIdentifiers
 * @description
 *
 * OID of the `ObjectIdentifiers` module (`{modules 0}`). ITU-T
 * Rec. X.830 (04/95) [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifiers OBJECT IDENTIFIER ::= {modules 0}
 * ```
 *
 * @constant
 */
export const objectIdentifiers: OBJECT_IDENTIFIER = _OID.fromParts([0], modules);

/* eslint-enable */
