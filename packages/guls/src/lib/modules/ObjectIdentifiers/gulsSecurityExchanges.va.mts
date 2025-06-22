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
 * @summary gulsSecurityExchanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSecurityExchanges OBJECT IDENTIFIER ::= {modules 2}
 * ```
 *
 * @constant
 */
export const gulsSecurityExchanges: OBJECT_IDENTIFIER = _OID.fromParts([2], modules);

/* eslint-enable */
