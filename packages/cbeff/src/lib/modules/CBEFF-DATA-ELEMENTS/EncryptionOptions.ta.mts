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

/* START_OF_SYMBOL_DEFINITION EncryptionOptions */
/**
 * @summary EncryptionOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionOptions  ::=  BOOLEAN
 * ```
 */
export type EncryptionOptions = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION EncryptionOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionOptions */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionOptions */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptionOptions */
export const _decode_EncryptionOptions = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_EncryptionOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionOptions */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionOptions */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptionOptions */
export const _encode_EncryptionOptions = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_EncryptionOptions */

/* eslint-enable */
