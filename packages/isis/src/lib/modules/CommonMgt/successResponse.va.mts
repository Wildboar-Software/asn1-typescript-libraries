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
import { responseCode } from '../CommonMgt/responseCode.va.mjs';
/* START_OF_SYMBOL_DEFINITION successResponse */
/**
 * @summary successResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * successResponse OBJECT IDENTIFIER ::= {responseCode successResponse(1002)}
 * ```
 *
 * @constant
 */
export const successResponse: OBJECT_IDENTIFIER = new _OID(
  [/* successResponse */ 1002],
  responseCode
);
/* END_OF_SYMBOL_DEFINITION successResponse */

/* eslint-enable */
