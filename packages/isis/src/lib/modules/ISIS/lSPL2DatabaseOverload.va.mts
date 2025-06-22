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
import { se } from '../ISIS/se.va.mjs';
/**
 * @summary lSPL2DatabaseOverload
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * lSPL2DatabaseOverload OBJECT IDENTIFIER ::= {se lSPL2DatabaseOverload(7)}
 * ```
 *
 * @constant
 */
export const lSPL2DatabaseOverload: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* lSPL2DatabaseOverload */ 7],
  se
);

/* eslint-enable */
