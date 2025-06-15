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

/* START_OF_SYMBOL_DEFINITION Seconds */
/**
 * @summary Seconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Seconds  ::=  INTEGER(0..4294967295)
 * ```
 */
export type Seconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION Seconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Seconds */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Seconds */

/* START_OF_SYMBOL_DEFINITION _decode_Seconds */
export const _decode_Seconds = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Seconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Seconds */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Seconds */

/* START_OF_SYMBOL_DEFINITION _encode_Seconds */
export const _encode_Seconds = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Seconds */

/* eslint-enable */
