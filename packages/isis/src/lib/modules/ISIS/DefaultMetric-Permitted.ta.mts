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

/* START_OF_SYMBOL_DEFINITION DefaultMetric_Permitted */
/**
 * @summary DefaultMetric_Permitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultMetric-Permitted  ::=  INTEGER(1..maxLinkMetric)
 * ```
 */
export type DefaultMetric_Permitted = INTEGER;
/* END_OF_SYMBOL_DEFINITION DefaultMetric_Permitted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DefaultMetric_Permitted */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DefaultMetric_Permitted */

/* START_OF_SYMBOL_DEFINITION _decode_DefaultMetric_Permitted */
export const _decode_DefaultMetric_Permitted = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DefaultMetric_Permitted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DefaultMetric_Permitted */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DefaultMetric_Permitted */

/* START_OF_SYMBOL_DEFINITION _encode_DefaultMetric_Permitted */
export const _encode_DefaultMetric_Permitted = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DefaultMetric_Permitted */

/* eslint-enable */
