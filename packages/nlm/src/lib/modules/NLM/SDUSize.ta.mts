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

/* START_OF_SYMBOL_DEFINITION SDUSize */
/**
 * @summary SDUSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDUSize  ::=  INTEGER(0..65535)
 * ```
 */
export type SDUSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION SDUSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SDUSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SDUSize */

/* START_OF_SYMBOL_DEFINITION _decode_SDUSize */
export const _decode_SDUSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SDUSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SDUSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SDUSize */

/* START_OF_SYMBOL_DEFINITION _encode_SDUSize */
export const _encode_SDUSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SDUSize */

/* eslint-enable */
