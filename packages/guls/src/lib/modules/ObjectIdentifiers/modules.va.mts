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
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';

/**
 * @summary modules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modules OBJECT IDENTIFIER ::= {genericULS 1}
 * ```
 *
 * @constant
 */
export const modules: OBJECT_IDENTIFIER = new _OID([1], genericULS);

/* eslint-enable */
