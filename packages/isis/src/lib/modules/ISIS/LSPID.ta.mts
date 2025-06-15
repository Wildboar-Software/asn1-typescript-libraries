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

/* START_OF_SYMBOL_DEFINITION LSPID */
/**
 * @summary LSPID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LSPID  ::=  OCTET STRING(SIZE (2..11))
 * ```
 */
export type LSPID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION LSPID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LSPID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LSPID */

/* START_OF_SYMBOL_DEFINITION _decode_LSPID */
export const _decode_LSPID = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_LSPID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LSPID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LSPID */

/* START_OF_SYMBOL_DEFINITION _encode_LSPID */
export const _encode_LSPID = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_LSPID */

/* eslint-enable */
