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
 * @summary lanL1DesignatedIntermediateSystemChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * lanL1DesignatedIntermediateSystemChange OBJECT IDENTIFIER ::= {se lanL1DesignatedIntermediateSystemChange(5)}
 * ```
 *
 * @constant
 */
export const lanL1DesignatedIntermediateSystemChange: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* lanL1DesignatedIntermediateSystemChange */ 5],
  se
);

/* eslint-enable */
