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

/* START_OF_SYMBOL_DEFINITION DurationInSeconds */
/**
 * @summary DurationInSeconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DurationInSeconds  ::=  INTEGER
 * ```
 */
export type DurationInSeconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DurationInSeconds */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _decode_DurationInSeconds */
export const _decode_DurationInSeconds = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DurationInSeconds */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _encode_DurationInSeconds */
export const _encode_DurationInSeconds = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DurationInSeconds */

/* eslint-enable */
