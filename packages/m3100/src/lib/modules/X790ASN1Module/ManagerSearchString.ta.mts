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

/* START_OF_SYMBOL_DEFINITION ManagerSearchString */
/**
 * @summary ManagerSearchString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagerSearchString  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type ManagerSearchString = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ManagerSearchString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchString */

/* START_OF_SYMBOL_DEFINITION _decode_ManagerSearchString */
export const _decode_ManagerSearchString = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_ManagerSearchString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchString */

/* START_OF_SYMBOL_DEFINITION _encode_ManagerSearchString */
export const _encode_ManagerSearchString = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_ManagerSearchString */

/* eslint-enable */
