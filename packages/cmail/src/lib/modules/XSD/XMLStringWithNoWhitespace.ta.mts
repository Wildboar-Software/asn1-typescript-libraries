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

/* START_OF_SYMBOL_DEFINITION XMLStringWithNoWhitespace */
/**
 * @summary XMLStringWithNoWhitespace
 * @description
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
/* END_OF_SYMBOL_DEFINITION XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoWhitespace */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoWhitespace */
export const _decode_XMLStringWithNoWhitespace = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoWhitespace */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoWhitespace */
export const _encode_XMLStringWithNoWhitespace = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoWhitespace */

/* eslint-enable */
