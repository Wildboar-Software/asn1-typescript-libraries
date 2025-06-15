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

/* START_OF_SYMBOL_DEFINITION PersonFax */
/**
 * @summary PersonFax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonFax  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonFax = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonFax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonFax */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonFax */

/* START_OF_SYMBOL_DEFINITION _decode_PersonFax */
export const _decode_PersonFax = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_PersonFax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonFax */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonFax */

/* START_OF_SYMBOL_DEFINITION _encode_PersonFax */
export const _encode_PersonFax = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_PersonFax */

/* eslint-enable */
