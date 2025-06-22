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
 * @summary acoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acoi OBJECT IDENTIFIER ::= {isisoi action(9)}
 * ```
 *
 * @constant
 */
export const acoi: OBJECT_IDENTIFIER = _OID.fromParts([/* action */ 9], isisoi);

/* eslint-enable */
