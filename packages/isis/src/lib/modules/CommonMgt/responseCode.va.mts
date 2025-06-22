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
import { proi } from '../CommonMgt/proi.va.mjs';
/**
 * @summary responseCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * responseCode OBJECT IDENTIFIER ::= {proi responseCode(1001)}
 * ```
 *
 * @constant
 */
export const responseCode: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* responseCode */ 1001],
  proi
);

/* eslint-enable */
