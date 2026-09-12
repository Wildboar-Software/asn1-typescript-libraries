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
import { se } from '../ISIS/se.va.mjs';
/**
 * @summary lSPL1DatabaseOverload
 * @description
 *
 * `specificProblems` value when `l1State` changes between On and Waiting.
 * Resulting state is `notificationOverloadStateChange`; if Waiting,
 * `notificationSourceId` is the precipitating LSP. probableCause
 * `resourceAtOrNearingCapacity`; severity Major. No Cleared alarm is generated.
 *
 * (ISO/IEC 10589:2002 clauses 7.3.19 and 11.2.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * lSPL1DatabaseOverload OBJECT IDENTIFIER ::= {se lSPL1DatabaseOverload(6)}
 * ```
 *
 * @constant
 */
export const lSPL1DatabaseOverload: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* lSPL1DatabaseOverload */ 6],
  se
);

/* eslint-enable */
