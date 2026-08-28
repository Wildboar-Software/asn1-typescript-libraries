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
 * @summary Non_numericUnicodeLabel
 * @description
 *
 * Non-integer Unicode label of an OID arc. Restricted per
 * Rec. ITU-T X.660 | ISO/IEC 9834-1
 * [§7.5](https://www.itu.int/rec/T-REC-X.660-201107-I)
 * (X.672 C.2.3 cites this as 7.2.5, the 2008 numbering): at
 * least one non-digit; the character set of that clause; no
 * leading or trailing HYPHEN-MINUS; no `--` in positions
 * 3–4. Labels compare equal after A-label conversion (IETF
 * RFC 5891 §5.3). ITU-T Rec. X.672 (06/2022)
 * [C.2.3](https://www.itu.int/rec/T-REC-X.672-202206-I).
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
