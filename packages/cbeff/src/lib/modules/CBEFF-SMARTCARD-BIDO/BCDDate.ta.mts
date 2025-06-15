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

/* START_OF_SYMBOL_DEFINITION BCDDate */
/**
 * @summary BCDDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BCDDate  ::=  OCTET STRING(SIZE (4))
 * ```
 */
export type BCDDate = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BCDDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BCDDate */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BCDDate */

/* START_OF_SYMBOL_DEFINITION _decode_BCDDate */
export const _decode_BCDDate = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BCDDate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BCDDate */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BCDDate */

/* START_OF_SYMBOL_DEFINITION _encode_BCDDate */
export const _encode_BCDDate = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BCDDate */

/* eslint-enable */
