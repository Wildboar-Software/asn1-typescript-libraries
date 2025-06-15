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

/* START_OF_SYMBOL_DEFINITION FormatType */
/**
 * @summary FormatType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FormatType  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export type FormatType = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION FormatType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FormatType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FormatType */

/* START_OF_SYMBOL_DEFINITION _decode_FormatType */
export const _decode_FormatType = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_FormatType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FormatType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FormatType */

/* START_OF_SYMBOL_DEFINITION _encode_FormatType */
export const _encode_FormatType = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_FormatType */

/* eslint-enable */
