/* eslint-disable */
import {
  VisibleString,
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
 * Mapping of XML Schema `xsd:language`. RFC 3066 language tags
 * (primary subtag 1–8 letters, optional `-` + 1–8 alphanumerics).
 * In ASN.1 SOAP, `Text.lang` maps to SOAP `xml:lang`.
 * ITU-T Rec. X.892 (05/2005) §7.4.4.2, Annex A. ITU-T Rec. X.694.
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




export const _decode_Language = $._decodeVisibleString;




export const _encode_Language = $._encodeVisibleString;


/* eslint-enable */
