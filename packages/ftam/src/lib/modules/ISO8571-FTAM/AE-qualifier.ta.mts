/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION AE_qualifier */
/**
 * @summary AE_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-qualifier  ::=  TYPE-IDENTIFIER.&Type
 * ```
 */
export type AE_qualifier = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_qualifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _decode_AE_qualifier */
export const _decode_AE_qualifier = $._decodeAny;
/* END_OF_SYMBOL_DEFINITION _decode_AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_qualifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _encode_AE_qualifier */
export const _encode_AE_qualifier = $._encodeAny;

/* END_OF_SYMBOL_DEFINITION _encode_AE_qualifier */

/* eslint-enable */
