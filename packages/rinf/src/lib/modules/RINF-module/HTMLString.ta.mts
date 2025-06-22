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
 * @summary HTMLString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HTMLString  ::=  UTF8String(CONSTRAINED BY {
 *      / * Shall be a valid HTML document (see [W3C HTML]) using only the markups
 *         <p>, <b>, </b>, <i>, </i>, <br/>, <a href> and </a> * /})
 * ```
 */
export type HTMLString = UTF8String; // UTF8String


export const _decode_HTMLString = $._decodeUTF8String;


export const _encode_HTMLString = $._encodeUTF8String;


/* eslint-enable */
