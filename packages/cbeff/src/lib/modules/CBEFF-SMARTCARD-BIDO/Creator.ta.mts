/* eslint-disable */
import {
  UTF8String,
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
 * @summary Creator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Creator  ::=  UTF8String
 * ```
 */
export type Creator = UTF8String; // UTF8String


export const _decode_Creator = $._decodeUTF8String;


export const _encode_Creator = $._encodeUTF8String;


/* eslint-enable */
