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
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';

/**
 * @summary modules
 * @description
 *
 * Arc for GULS ASN.1 modules (`{genericULS 1}`). ITU-T Rec.
 * X.830 (04/95) [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modules OBJECT IDENTIFIER ::= {genericULS 1}
 * ```
 *
 * @constant
 */
export const modules: OBJECT_IDENTIFIER = _OID.fromParts([1], genericULS);

/* eslint-enable */
