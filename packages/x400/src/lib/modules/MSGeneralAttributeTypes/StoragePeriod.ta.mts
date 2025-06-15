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

/* START_OF_SYMBOL_DEFINITION StoragePeriod */
/**
 * @summary StoragePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StoragePeriod  ::=  INTEGER
 * ```
 */
export type StoragePeriod = INTEGER;
/* END_OF_SYMBOL_DEFINITION StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StoragePeriod */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _decode_StoragePeriod */
export const _decode_StoragePeriod = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StoragePeriod */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StoragePeriod */

/* START_OF_SYMBOL_DEFINITION _encode_StoragePeriod */
export const _encode_StoragePeriod = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_StoragePeriod */

/* eslint-enable */
