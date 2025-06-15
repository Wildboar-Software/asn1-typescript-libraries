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

/* START_OF_SYMBOL_DEFINITION Label */
/**
 * @summary Label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Label  ::=  INTEGER
 * ```
 */
export type Label = INTEGER;
/* END_OF_SYMBOL_DEFINITION Label */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Label */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Label */

/* START_OF_SYMBOL_DEFINITION _decode_Label */
export const _decode_Label = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Label */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Label */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Label */

/* START_OF_SYMBOL_DEFINITION _encode_Label */
export const _encode_Label = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Label */

/* eslint-enable */
