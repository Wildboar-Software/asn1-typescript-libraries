/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION SignedInt */
/**
 * @summary SignedInt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedInt  ::=  INTEGER(min-signed-int..max-signed-int)
 * ```
 */
export type SignedInt = INTEGER;
/* END_OF_SYMBOL_DEFINITION SignedInt */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedInt */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedInt */

/* START_OF_SYMBOL_DEFINITION _decode_SignedInt */
export const _decode_SignedInt = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SignedInt */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedInt */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedInt */

/* START_OF_SYMBOL_DEFINITION _encode_SignedInt */
export const _encode_SignedInt = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SignedInt */

/* eslint-enable */
