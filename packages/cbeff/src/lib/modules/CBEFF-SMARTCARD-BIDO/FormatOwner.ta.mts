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

/* START_OF_SYMBOL_DEFINITION FormatOwner */
/**
 * @summary FormatOwner
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FormatOwner  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export type FormatOwner = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION FormatOwner */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FormatOwner */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FormatOwner */

/* START_OF_SYMBOL_DEFINITION _decode_FormatOwner */
export const _decode_FormatOwner = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_FormatOwner */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FormatOwner */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FormatOwner */

/* START_OF_SYMBOL_DEFINITION _encode_FormatOwner */
export const _encode_FormatOwner = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_FormatOwner */

/* eslint-enable */
