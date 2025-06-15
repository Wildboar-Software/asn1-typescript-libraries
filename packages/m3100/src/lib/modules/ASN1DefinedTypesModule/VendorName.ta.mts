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

/* START_OF_SYMBOL_DEFINITION VendorName */
/**
 * @summary VendorName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VendorName  ::=  GraphicString
 * ```
 */
export type VendorName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION VendorName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VendorName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VendorName */

/* START_OF_SYMBOL_DEFINITION _decode_VendorName */
export const _decode_VendorName = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_VendorName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VendorName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VendorName */

/* START_OF_SYMBOL_DEFINITION _encode_VendorName */
export const _encode_VendorName = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_VendorName */

/* eslint-enable */
