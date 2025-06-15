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

/* START_OF_SYMBOL_DEFINITION BCDTime */
/**
 * @summary BCDTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BCDTime  ::=  OCTET STRING(SIZE (7))
 * ```
 */
export type BCDTime = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BCDTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BCDTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BCDTime */

/* START_OF_SYMBOL_DEFINITION _decode_BCDTime */
export const _decode_BCDTime = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BCDTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BCDTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BCDTime */

/* START_OF_SYMBOL_DEFINITION _encode_BCDTime */
export const _encode_BCDTime = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BCDTime */

/* eslint-enable */
