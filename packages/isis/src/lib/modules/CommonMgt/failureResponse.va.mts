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
/**
 * @summary failureResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * failureResponse OBJECT IDENTIFIER ::= {responseCode failureResponse(1001)}
 * ```
 *
 * @constant
 */
export const failureResponse: OBJECT_IDENTIFIER = new _OID(
  [/* failureResponse */ 1001],
  responseCode
);

/* eslint-enable */
