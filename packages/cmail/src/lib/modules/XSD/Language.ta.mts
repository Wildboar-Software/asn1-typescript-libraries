/* eslint-disable */
import {
  type VisibleString,
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
 * @summary Language
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Language  ::=  VisibleString (FROM ("a".."z" | "A".."Z" | "-" | "0".."9"))
 * (PATTERN
 *  "[a-zA-Z]#(1,8)(-[a-zA-Z0-9]#(1,8))*")
 * ```
 */
export type Language = VisibleString; // VisibleString




export const _decode_Language: $.ASN1Decoder<string> = $._decodeVisibleString;




export const _encode_Language: $.ASN1Encoder<string> = $._encodeVisibleString;


/* eslint-enable */
