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

/* START_OF_SYMBOL_DEFINITION DiscardReason */
/**
 * @summary DiscardReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardReason  ::=  INTEGER(0..255)
 * ```
 */
export type DiscardReason = INTEGER;
/* END_OF_SYMBOL_DEFINITION DiscardReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DiscardReason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DiscardReason */

/* START_OF_SYMBOL_DEFINITION _decode_DiscardReason */
export const _decode_DiscardReason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DiscardReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DiscardReason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DiscardReason */

/* START_OF_SYMBOL_DEFINITION _encode_DiscardReason */
export const _encode_DiscardReason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DiscardReason */

/* eslint-enable */
