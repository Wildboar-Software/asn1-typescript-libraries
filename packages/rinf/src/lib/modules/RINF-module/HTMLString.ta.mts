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
 * Restricted HTML used in RINF text fields. Shall be a
 * valid HTML 4.01 document using only `<p>`, `<b>`,
 * `</b>`, `<i>`, `</i>`, `<br/>`, `<a href>` and `</a>`
 * (W3C HTML 4.01; D.2.5). ITU-T Rec. X.672 (06/2022)
 * [D.2.5](https://www.itu.int/rec/T-REC-X.672-202206-I).
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
