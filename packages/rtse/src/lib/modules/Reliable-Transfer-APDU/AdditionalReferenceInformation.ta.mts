/* eslint-disable */
import {
  T61String,
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

/* START_OF_SYMBOL_DEFINITION AdditionalReferenceInformation */
/**
 * @summary AdditionalReferenceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalReferenceInformation  ::=  T61String
 * ```
 */
export type AdditionalReferenceInformation = T61String; // T61String
/* END_OF_SYMBOL_DEFINITION AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalReferenceInformation */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AdditionalReferenceInformation */
export const _decode_AdditionalReferenceInformation = $._decodeT61String;
/* END_OF_SYMBOL_DEFINITION _decode_AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalReferenceInformation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalReferenceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AdditionalReferenceInformation */
export const _encode_AdditionalReferenceInformation = $._encodeT61String;

/* END_OF_SYMBOL_DEFINITION _encode_AdditionalReferenceInformation */

/* eslint-enable */
