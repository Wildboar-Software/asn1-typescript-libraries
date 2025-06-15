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

/* START_OF_SYMBOL_DEFINITION LogicalChannelId */
/**
 * @summary LogicalChannelId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogicalChannelId  ::=  INTEGER(1..4095)
 * ```
 */
export type LogicalChannelId = INTEGER;
/* END_OF_SYMBOL_DEFINITION LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _decode_LogicalChannelId */
export const _decode_LogicalChannelId = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _encode_LogicalChannelId */
export const _encode_LogicalChannelId = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_LogicalChannelId */

/* eslint-enable */
