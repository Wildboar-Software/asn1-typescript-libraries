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
import { fupoi } from '../CommonMgt/fupoi.va.mjs';
/**
 * @summary informationEventReports
 * @description
 *
 * `FunctionalUnitPackageId` for negotiating the communications-information
 * functional unit (bit 0 of the package).
 *
 * (ISO/IEC 10589:2002 Annex E.1.13 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * informationEventReports OBJECT IDENTIFIER ::= {fupoi informationEventReports(1000)}
 * ```
 *
 * @constant
 */
export const informationEventReports: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* informationEventReports */ 1000],
  fupoi
);

/* eslint-enable */
