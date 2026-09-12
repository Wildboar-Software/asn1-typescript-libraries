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
 * @summary manualAddressDroppedFromArea
 * @description
 *
 * `specificProblems` value when a `manualAreaAddresses` entry is omitted from
 * `areaAddresses` / `partitionAreaAddresses` because more than
 * `maximumAreaAddresses` distinct addresses exist. The dropped address is
 * `notificationAreaAddress`. Generated once per drop, not while dropped.
 * probableCause `configurationOrCustomisationError`; severity Major.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5 and 11.2.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manualAddressDroppedFromArea OBJECT IDENTIFIER ::= {se manualAddressDroppedFromArea(8)}
 * ```
 *
 * @constant
 */
export const manualAddressDroppedFromArea: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* manualAddressDroppedFromArea */ 8],
  se
);

/* eslint-enable */
