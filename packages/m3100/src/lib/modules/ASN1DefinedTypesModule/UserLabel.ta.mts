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

/* START_OF_SYMBOL_DEFINITION UserLabel */
/**
 * @summary UserLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserLabel  ::=  GraphicString
 * ```
 */
export type UserLabel = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION UserLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserLabel */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserLabel */

/* START_OF_SYMBOL_DEFINITION _decode_UserLabel */
export const _decode_UserLabel = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_UserLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserLabel */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserLabel */

/* START_OF_SYMBOL_DEFINITION _encode_UserLabel */
export const _encode_UserLabel = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_UserLabel */

/* eslint-enable */
