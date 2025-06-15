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

/* START_OF_SYMBOL_DEFINITION ResultInterval */
/**
 * @summary ResultInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultInterval  ::=  INTEGER
 * ```
 */
export type ResultInterval = INTEGER;
/* END_OF_SYMBOL_DEFINITION ResultInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultInterval */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultInterval */

/* START_OF_SYMBOL_DEFINITION _decode_ResultInterval */
export const _decode_ResultInterval = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ResultInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultInterval */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultInterval */

/* START_OF_SYMBOL_DEFINITION _encode_ResultInterval */
export const _encode_ResultInterval = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ResultInterval */

/* eslint-enable */
