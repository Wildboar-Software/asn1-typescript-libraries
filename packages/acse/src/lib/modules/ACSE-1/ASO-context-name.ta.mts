/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION ASO_context_name */
/**
 * @summary ASO_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ASO_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ASO_context_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_context_name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_context_name */

/* START_OF_SYMBOL_DEFINITION _decode_ASO_context_name */
export const _decode_ASO_context_name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_ASO_context_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_context_name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_context_name */

/* START_OF_SYMBOL_DEFINITION _encode_ASO_context_name */
export const _encode_ASO_context_name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_ASO_context_name */

/* eslint-enable */
