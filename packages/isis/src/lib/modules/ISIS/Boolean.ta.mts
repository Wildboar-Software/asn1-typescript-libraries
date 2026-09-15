/* eslint-disable */
import {
  BOOLEAN,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Boolean
 * @description
 *
 * BOOLEAN alias used for IS-IS managed-object attributes such as
 * `externalDomain` (suppress intra-domain PDUs on this circuit) and
 * `manualL2OnlyMode` (use the circuit for Level 2 traffic only).
 *
 * (ISO/IEC 10589:2002 clauses 11.2.5.9 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Boolean  ::=  BOOLEAN
 * ```
 */
export type Boolean = BOOLEAN; // BooleanType


export const _decode_Boolean = $._decodeBoolean;


export const _encode_Boolean = $._encodeBoolean;


/* eslint-enable */
