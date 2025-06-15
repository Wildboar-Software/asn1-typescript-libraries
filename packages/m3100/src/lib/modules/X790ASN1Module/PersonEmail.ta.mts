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

/* START_OF_SYMBOL_DEFINITION PersonEmail */
/**
 * @summary PersonEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonEmail  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonEmail = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonEmail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonEmail */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonEmail */

/* START_OF_SYMBOL_DEFINITION _decode_PersonEmail */
export const _decode_PersonEmail = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_PersonEmail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonEmail */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonEmail */

/* START_OF_SYMBOL_DEFINITION _encode_PersonEmail */
export const _encode_PersonEmail = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_PersonEmail */

/* eslint-enable */
