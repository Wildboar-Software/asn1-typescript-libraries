/* eslint-disable */
import {
    IA5String,
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

/* START_OF_SYMBOL_DEFINITION IA5TextData */
/**
 * @summary IA5TextData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IA5TextData  ::=  IA5String
 * ```
 */
export type IA5TextData = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION IA5TextData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextData */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextData */

/* START_OF_SYMBOL_DEFINITION _decode_IA5TextData */
export const _decode_IA5TextData = $._decodeIA5String;
/* END_OF_SYMBOL_DEFINITION _decode_IA5TextData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextData */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextData */

/* START_OF_SYMBOL_DEFINITION _encode_IA5TextData */
export const _encode_IA5TextData = $._encodeIA5String;

/* END_OF_SYMBOL_DEFINITION _encode_IA5TextData */

/* eslint-enable */
