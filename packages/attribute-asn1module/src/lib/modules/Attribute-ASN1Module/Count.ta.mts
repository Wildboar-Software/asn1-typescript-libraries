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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION Count */
/**
 * @summary Count
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Count  ::=  INTEGER
 * ```
 */
export
type Count = INTEGER;
/* END_OF_SYMBOL_DEFINITION Count */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Count */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Count */

/* START_OF_SYMBOL_DEFINITION _decode_Count */
export const _decode_Count = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Count */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Count */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Count */

/* START_OF_SYMBOL_DEFINITION _encode_Count */
export const _encode_Count = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Count */

/* eslint-enable */
