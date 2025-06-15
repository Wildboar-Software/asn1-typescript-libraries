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

/* START_OF_SYMBOL_DEFINITION NonEmptyOctetString */
/**
 * @summary NonEmptyOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonEmptyOctetString  ::=  OCTET STRING(SIZE (1..four-gig))
 * ```
 */
export type NonEmptyOctetString = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonEmptyOctetString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _decode_NonEmptyOctetString */
export const _decode_NonEmptyOctetString = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonEmptyOctetString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _encode_NonEmptyOctetString */
export const _encode_NonEmptyOctetString = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_NonEmptyOctetString */

/* eslint-enable */
