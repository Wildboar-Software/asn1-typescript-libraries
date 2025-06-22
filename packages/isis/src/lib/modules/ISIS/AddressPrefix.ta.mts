/* eslint-disable */
import {
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AddressPrefix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddressPrefix  ::=
 *   BIT STRING
 *     (SIZE (0..160))
 * ```
 */
export type AddressPrefix = BIT_STRING;


export const _decode_AddressPrefix = $._decodeBitString;


export const _encode_AddressPrefix = $._encodeBitString;


/* eslint-enable */
