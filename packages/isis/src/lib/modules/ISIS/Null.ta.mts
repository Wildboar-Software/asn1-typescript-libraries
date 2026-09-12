/* eslint-disable */
import {
  NULL,
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
 * @summary Null
 * @description
 *
 * NULL syntax for GDMO specific-error parameters `constraintViolation` (REPLACE
 * refused, e.g. while enabled) and `reservedName` (CREATE using a name reserved
 * for automatic adjacencies).
 *
 * (ISO/IEC 10589:2002 clauses 11.2.1.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Null  ::=  NULL
 * ```
 */
export type Null = NULL; // NullType


export const _decode_Null = $._decodeNull;


export const _encode_Null = $._encodeNull;


/* eslint-enable */
