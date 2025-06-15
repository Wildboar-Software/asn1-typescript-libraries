/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION NamingString */
/**
 * @summary NamingString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamingString  ::=  GraphicString(SIZE (0..32))
 * ```
 */
export type NamingString = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION NamingString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamingString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamingString */

/* START_OF_SYMBOL_DEFINITION _decode_NamingString */
export const _decode_NamingString = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_NamingString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamingString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamingString */

/* START_OF_SYMBOL_DEFINITION _encode_NamingString */
export const _encode_NamingString = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_NamingString */

/* eslint-enable */
