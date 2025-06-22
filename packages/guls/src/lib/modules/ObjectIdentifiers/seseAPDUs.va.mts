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
import { modules } from '../ObjectIdentifiers/modules.va.mjs';

/**
 * @summary seseAPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * seseAPDUs OBJECT IDENTIFIER ::= {modules 6}
 * ```
 *
 * @constant
 */
export const seseAPDUs: OBJECT_IDENTIFIER = _OID.fromParts([6], modules);

/* eslint-enable */
