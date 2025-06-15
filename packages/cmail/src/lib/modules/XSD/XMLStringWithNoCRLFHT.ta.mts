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

/* START_OF_SYMBOL_DEFINITION XMLStringWithNoCRLFHT */
/**
 * @summary XMLStringWithNoCRLFHT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XMLStringWithNoCRLFHT  ::=  UTF8String (FROM(
 * {0, 0, 0, 32} .. {0, 0, 215, 255} |
 * {0, 0, 224, 0} .. {0, 0, 255, 253} |
 * {0, 1, 0, 0} .. {0, 16, 255, 253}))
 * ```
 */
export type XMLStringWithNoCRLFHT = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoCRLFHT */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoCRLFHT */
export const _decode_XMLStringWithNoCRLFHT = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoCRLFHT */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoCRLFHT */
export const _encode_XMLStringWithNoCRLFHT = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoCRLFHT */

/* eslint-enable */
