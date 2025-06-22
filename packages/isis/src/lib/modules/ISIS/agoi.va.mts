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
import { isisoi } from '../ISIS/isisoi.va.mjs';
/**
 * @summary agoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * agoi OBJECT IDENTIFIER ::= {isisoi attributeGroup(8)}
 * ```
 *
 * @constant
 */
export const agoi: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* attributeGroup */ 8],
  isisoi
);

/* eslint-enable */
