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
import { fupoi } from '../CommonMgt/fupoi.va.mjs';
/**
 * @summary informationEventReports
 * @description
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
