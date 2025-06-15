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

/* START_OF_SYMBOL_DEFINITION ChannelNumber */
/**
 * @summary ChannelNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChannelNumber  ::=  INTEGER
 * ```
 */
export type ChannelNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _decode_ChannelNumber */
export const _decode_ChannelNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _encode_ChannelNumber */
export const _encode_ChannelNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ChannelNumber */

/* eslint-enable */
