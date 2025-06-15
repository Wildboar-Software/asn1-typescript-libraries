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

/* START_OF_SYMBOL_DEFINITION Password */
/**
 * @summary Password
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Password  ::=  OCTET STRING(SIZE (0..254))
 * ```
 */
export type Password = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Password */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Password */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Password */

/* START_OF_SYMBOL_DEFINITION _decode_Password */
export const _decode_Password = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Password */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Password */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Password */

/* START_OF_SYMBOL_DEFINITION _encode_Password */
export const _encode_Password = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Password */

/* eslint-enable */
