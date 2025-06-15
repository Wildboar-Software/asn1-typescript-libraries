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

/* START_OF_SYMBOL_DEFINITION Account */
/**
 * @summary Account
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Account  ::=  GraphicString
 * ```
 */
export type Account = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION Account */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Account */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Account */

/* START_OF_SYMBOL_DEFINITION _decode_Account */
export const _decode_Account = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_Account */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Account */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Account */

/* START_OF_SYMBOL_DEFINITION _encode_Account */
export const _encode_Account = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_Account */

/* eslint-enable */
