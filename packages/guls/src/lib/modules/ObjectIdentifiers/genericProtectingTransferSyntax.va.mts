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
 * @summary genericProtectingTransferSyntax
 * @description
 *
 * OID of the `GenericProtectingTransferSyntax` module
 * (`{modules 7}`). ITU-T Rec. X.830 (04/95) Annex F; ITU-T Rec.
 * X.833 (04/95) [§6](https://www.itu.int/rec/T-REC-X.833-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * genericProtectingTransferSyntax OBJECT IDENTIFIER ::= {modules 7}
 * ```
 *
 * @constant
 */
export const genericProtectingTransferSyntax: OBJECT_IDENTIFIER = _OID.fromParts(
  [7],
  modules
);

/* eslint-enable */
