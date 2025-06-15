/* eslint-disable */
import {
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION PatronHeaderVersion */
/**
 * @summary PatronHeaderVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PatronHeaderVersion  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export type PatronHeaderVersion = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION PatronHeaderVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PatronHeaderVersion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PatronHeaderVersion */

/* START_OF_SYMBOL_DEFINITION _decode_PatronHeaderVersion */
export const _decode_PatronHeaderVersion = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_PatronHeaderVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PatronHeaderVersion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PatronHeaderVersion */

/* START_OF_SYMBOL_DEFINITION _encode_PatronHeaderVersion */
export const _encode_PatronHeaderVersion = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_PatronHeaderVersion */

/* eslint-enable */
