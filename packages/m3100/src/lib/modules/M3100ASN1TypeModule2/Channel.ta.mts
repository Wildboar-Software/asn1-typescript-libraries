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

/* START_OF_SYMBOL_DEFINITION Channel */
/**
 * @summary Channel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Channel  ::=  INTEGER
 * ```
 */
export type Channel = INTEGER;
/* END_OF_SYMBOL_DEFINITION Channel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Channel */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Channel */

/* START_OF_SYMBOL_DEFINITION _decode_Channel */
export const _decode_Channel = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Channel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Channel */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Channel */

/* START_OF_SYMBOL_DEFINITION _encode_Channel */
export const _encode_Channel = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Channel */

/* eslint-enable */
