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
 * @summary fupoi
 * @description
 *
 * GMI functional-unit-package arc `{cmoi functionalUnitPackage(1)}`.
 * `informationEventReports` is assigned under this arc for negotiating the
 * communications-information functional unit.
 *
 * (ISO/IEC 10589:2002 Annex E.1.13 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fupoi OBJECT IDENTIFIER ::= {cmoi functionalUnitPackage(1)}
 * ```
 *
 * @constant
 */
export const fupoi: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* functionalUnitPackage */ 1],
  cmoi
);

/* eslint-enable */
