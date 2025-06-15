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

/* START_OF_SYMBOL_DEFINITION SubheaderCount */
/**
 * @summary SubheaderCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubheaderCount  ::=  INTEGER(0..255)
 * ```
 */
export type SubheaderCount = INTEGER;
/* END_OF_SYMBOL_DEFINITION SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubheaderCount */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _decode_SubheaderCount */
export const _decode_SubheaderCount = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubheaderCount */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _encode_SubheaderCount */
export const _encode_SubheaderCount = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SubheaderCount */

/* eslint-enable */
