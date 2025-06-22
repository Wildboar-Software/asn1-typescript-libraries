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
 * @summary noi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noi OBJECT IDENTIFIER ::= {cmoi notification(10)}
 * ```
 *
 * @constant
 */
export const noi: OBJECT_IDENTIFIER = _OID.fromParts([/* notification */ 10], cmoi);

/* eslint-enable */
