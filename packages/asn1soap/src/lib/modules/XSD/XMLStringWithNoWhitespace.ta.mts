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
 * @summary XMLStringWithNoWhitespace
 * @description
 *
 * XML-compatible string excluding all whitespace (U+0009, U+000A,
 * U+000D, U+0020). Used for `xsd:Name` / `xsd:NMTOKEN`.
 * ITU-T Rec. X.694 | ISO/IEC 8825-5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XMLStringWithNoWhitespace  ::=  UTF8String (FROM(
 * {0, 0, 0, 33} .. {0, 0, 215, 255} |
 * {0, 0, 224, 0} .. {0, 0, 255, 253} |
 * {0, 1, 0, 0} .. {0, 16, 255, 253}))
 * ```
 */
export type XMLStringWithNoWhitespace = UTF8String; // UTF8String




export const _decode_XMLStringWithNoWhitespace = $._decodeUTF8String;




export const _encode_XMLStringWithNoWhitespace = $._encodeUTF8String;


/* eslint-enable */
