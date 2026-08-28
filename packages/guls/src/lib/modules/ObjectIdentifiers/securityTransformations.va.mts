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
 * @summary securityTransformations
 * @description
 *
 * Arc for registered security-transformation OIDs
 * (`{genericULS 5}`). GULS assigns `dir-encrypted(1)`,
 * `dir-signed(2)`, `dir-signature(3)`, `guls-signed(4)`,
 * `guls-signature(5)`. ITU-T Rec. X.830 (04/95)
 * [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex D; Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityTransformations OBJECT IDENTIFIER ::= {genericULS 5}
 * ```
 *
 * @constant
 */
export const securityTransformations: OBJECT_IDENTIFIER = _OID.fromParts(
  [5],
  genericULS
);

/* eslint-enable */
