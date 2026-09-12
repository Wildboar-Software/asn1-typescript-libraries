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
 * @summary aoi
 * @description
 *
 * GMI attribute registration arc `{cmoi attribute(7)}`.
 *
 * (ISO/IEC 10589:2002 Annex E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aoi OBJECT IDENTIFIER ::= {cmoi attribute(7)}
 * ```
 *
 * @constant
 */
export const aoi: OBJECT_IDENTIFIER = _OID.fromParts([/* attribute */ 7], cmoi);

/* eslint-enable */
