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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary Non_numericUnicodeLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Non-numericUnicodeLabel  ::=  UTF8String
 * ```
 */
export type Non_numericUnicodeLabel = UTF8String; // UTF8String




export const _decode_Non_numericUnicodeLabel = $._decodeUTF8String;




export const _encode_Non_numericUnicodeLabel = $._encodeUTF8String;


/* eslint-enable */
