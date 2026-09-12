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
import { responseCode } from '../CommonMgt/responseCode.va.mjs';
/**
 * @summary successResponse
 * @description
 *
 * Action-reply `responseCode` when `activate` / `deactivate` / `shutdown`
 * successfully initiated the requested state change.
 *
 * (ISO/IEC 10589:2002 Annex E.1.11 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * successResponse OBJECT IDENTIFIER ::= {responseCode successResponse(1002)}
 * ```
 *
 * @constant
 */
export const successResponse: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* successResponse */ 1002],
  responseCode
);

/* eslint-enable */
