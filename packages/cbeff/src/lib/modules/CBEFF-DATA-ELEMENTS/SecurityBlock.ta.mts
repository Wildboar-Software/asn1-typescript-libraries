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

/* START_OF_SYMBOL_DEFINITION SecurityBlock */
/**
 * @summary SecurityBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityBlock  ::=  OCTET STRING
 * ```
 */
export type SecurityBlock = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SecurityBlock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityBlock */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityBlock */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityBlock */
export const _decode_SecurityBlock = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityBlock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityBlock */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityBlock */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityBlock */
export const _encode_SecurityBlock = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityBlock */

/* eslint-enable */
