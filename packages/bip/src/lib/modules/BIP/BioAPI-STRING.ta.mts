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
 * @summary BioAPI_STRING
 * @description
 *
 * UTF-8 text with no NUL octets and at most 268 octets (C array
 * is 269 including the terminator).
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.53](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-STRING  ::=
 *   UTF8String
 *     (CONSTRAINED BY { --The UTF-8 encoding shall not contain any NUL characters
 *     --nd shall be no longer than 268 octets--
 *        })
 * ```
 */
export type BioAPI_STRING = UTF8String; // UTF8String




export const _decode_BioAPI_STRING = $._decodeUTF8String;




export const _encode_BioAPI_STRING = $._encodeUTF8String;


/* eslint-enable */
