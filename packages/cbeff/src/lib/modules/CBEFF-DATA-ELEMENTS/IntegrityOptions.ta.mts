/* eslint-disable */
import {
  BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION IntegrityOptions */
/**
 * @summary IntegrityOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntegrityOptions  ::=  BOOLEAN
 * ```
 */
export type IntegrityOptions = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntegrityOptions */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _decode_IntegrityOptions */
export const _decode_IntegrityOptions = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntegrityOptions */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _encode_IntegrityOptions */
export const _encode_IntegrityOptions = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_IntegrityOptions */

/* eslint-enable */
