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
 * @summary failureResponse
 * @description
 *
 * Action-reply `responseCode` when `activate` / `deactivate` / `shutdown` could
 * not be initiated; accompanied by a failure-reason parameter.
 *
 * (ISO/IEC 10589:2002 Annex E.1.11 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * failureResponse OBJECT IDENTIFIER ::= {responseCode failureResponse(1001)}
 * ```
 *
 * @constant
 */
export const failureResponse: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* failureResponse */ 1001],
  responseCode
);

/* eslint-enable */
