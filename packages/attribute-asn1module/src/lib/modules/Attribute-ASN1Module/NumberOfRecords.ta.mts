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



/* START_OF_SYMBOL_DEFINITION NumberOfRecords */
/**
 * @summary NumberOfRecords
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfRecords  ::=  INTEGER
 * ```
 */
export
type NumberOfRecords = INTEGER;
/* END_OF_SYMBOL_DEFINITION NumberOfRecords */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfRecords */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfRecords */

/* START_OF_SYMBOL_DEFINITION _decode_NumberOfRecords */
export const _decode_NumberOfRecords = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_NumberOfRecords */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfRecords */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfRecords */

/* START_OF_SYMBOL_DEFINITION _encode_NumberOfRecords */
export const _encode_NumberOfRecords = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_NumberOfRecords */

/* eslint-enable */
