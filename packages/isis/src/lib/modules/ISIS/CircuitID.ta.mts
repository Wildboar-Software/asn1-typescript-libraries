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

/* START_OF_SYMBOL_DEFINITION CircuitID */
/**
 * @summary CircuitID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitID  ::=  OCTET STRING(SIZE (2..9))
 * ```
 */
export type CircuitID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CircuitID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitID */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitID */
export const _decode_CircuitID = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_CircuitID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitID */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitID */
export const _encode_CircuitID = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_CircuitID */

/* eslint-enable */
