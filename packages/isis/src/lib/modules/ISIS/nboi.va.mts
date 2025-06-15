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
import { isisoi } from '../ISIS/isisoi.va.mjs';
/**
 * @summary nboi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nboi OBJECT IDENTIFIER ::= {isisoi nameBinding(6)}
 * ```
 *
 * @constant
 */
export const nboi: OBJECT_IDENTIFIER = new _OID([/* nameBinding */ 6], isisoi);

/* eslint-enable */
