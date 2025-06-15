/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary IntermediateSystemPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateSystemPriority  ::=  INTEGER(1..127)
 * ```
 */
export type IntermediateSystemPriority = INTEGER;


export const _decode_IntermediateSystemPriority = $._decodeInteger;


export const _encode_IntermediateSystemPriority = $._encodeInteger;


/* eslint-enable */
