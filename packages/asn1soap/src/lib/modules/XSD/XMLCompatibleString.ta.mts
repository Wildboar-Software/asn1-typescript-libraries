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

/* START_OF_SYMBOL_DEFINITION XMLCompatibleString */
/**
 * @summary XMLCompatibleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XMLCompatibleString  ::=  UTF8String (FROM(
 * {0, 0, 0, 9} |
 * {0, 0, 0, 10} |
 * {0, 0, 0, 13} |
 * {0, 0, 0, 32} .. {0, 0, 215, 255} |
 * {0, 0, 224, 0} .. {0, 0, 255, 253} |
 * {0, 1, 0, 0} .. {0, 16, 255, 253}))
 * ```
 */
export type XMLCompatibleString = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION XMLCompatibleString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLCompatibleString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLCompatibleString */

/* START_OF_SYMBOL_DEFINITION _decode_XMLCompatibleString */
export const _decode_XMLCompatibleString = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_XMLCompatibleString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLCompatibleString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLCompatibleString */

/* START_OF_SYMBOL_DEFINITION _encode_XMLCompatibleString */
export const _encode_XMLCompatibleString = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_XMLCompatibleString */

/* eslint-enable */
