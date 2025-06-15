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

/* START_OF_SYMBOL_DEFINITION PersonNumber */
/**
 * @summary PersonNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonNumber  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonNumber = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonNumber */

/* START_OF_SYMBOL_DEFINITION _decode_PersonNumber */
export const _decode_PersonNumber = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_PersonNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonNumber */

/* START_OF_SYMBOL_DEFINITION _encode_PersonNumber */
export const _encode_PersonNumber = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_PersonNumber */

/* eslint-enable */
