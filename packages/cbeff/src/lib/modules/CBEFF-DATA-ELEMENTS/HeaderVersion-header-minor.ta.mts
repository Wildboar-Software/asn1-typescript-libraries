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

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_minor */
/**
 * @summary HeaderVersion_header_minor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-minor ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type HeaderVersion_header_minor = INTEGER;
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_minor_version0 */
/**
 * @summary HeaderVersion_header_minor_version0
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_minor_version0: HeaderVersion_header_minor = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_minor_version0 */

/* START_OF_SYMBOL_DEFINITION version0 */
/**
 * @summary HeaderVersion_header_minor_version0
 * @constant
 * @type {number}
 */
export const version0: HeaderVersion_header_minor = HeaderVersion_header_minor_version0; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION version0 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_minor */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_minor */
export const _decode_HeaderVersion_header_minor = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_minor */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_minor */
export const _encode_HeaderVersion_header_minor = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_minor */

/* eslint-enable */
