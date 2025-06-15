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

/* START_OF_SYMBOL_DEFINITION InvokeId */
/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  INTEGER (1..MAX)
 * ```
 */
export type InvokeId = INTEGER;
/* END_OF_SYMBOL_DEFINITION InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeId */
export const _decode_InvokeId = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeId */
export const _encode_InvokeId = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_InvokeId */

/* eslint-enable */
