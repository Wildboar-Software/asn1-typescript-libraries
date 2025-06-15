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
 * @summary ASOI_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASOI-identifier  ::=  INTEGER(1..128, ...)
 * ```
 */
export type ASOI_identifier = INTEGER;


export const _decode_ASOI_identifier = $._decodeInteger;


export const _encode_ASOI_identifier = $._encodeInteger;


/* eslint-enable */
