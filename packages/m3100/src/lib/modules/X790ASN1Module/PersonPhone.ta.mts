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

/* START_OF_SYMBOL_DEFINITION PersonPhone */
/**
 * @summary PersonPhone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonPhone  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonPhone = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonPhone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonPhone */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonPhone */

/* START_OF_SYMBOL_DEFINITION _decode_PersonPhone */
export const _decode_PersonPhone = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_PersonPhone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonPhone */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonPhone */

/* START_OF_SYMBOL_DEFINITION _encode_PersonPhone */
export const _encode_PersonPhone = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_PersonPhone */

/* eslint-enable */
