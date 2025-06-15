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
 * @summary OneByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneByte  ::=  INTEGER(0..255)
 * ```
 */
export type OneByte = INTEGER;


export const _decode_OneByte = $._decodeInteger;


export const _encode_OneByte = $._encodeInteger;


/* eslint-enable */
