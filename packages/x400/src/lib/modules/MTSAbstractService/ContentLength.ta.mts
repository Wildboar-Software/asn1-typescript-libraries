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

/* START_OF_SYMBOL_DEFINITION ContentLength */
/**
 * @summary ContentLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentLength  ::=  INTEGER(0..ub-content-length)
 * ```
 */
export type ContentLength = INTEGER;
/* END_OF_SYMBOL_DEFINITION ContentLength */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentLength */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentLength */

/* START_OF_SYMBOL_DEFINITION _decode_ContentLength */
export const _decode_ContentLength = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ContentLength */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentLength */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentLength */

/* START_OF_SYMBOL_DEFINITION _encode_ContentLength */
export const _encode_ContentLength = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ContentLength */

/* eslint-enable */
