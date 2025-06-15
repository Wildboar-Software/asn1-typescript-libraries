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

/* START_OF_SYMBOL_DEFINITION User_Identity */
/**
 * @summary User_Identity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Identity  ::=  GraphicString
 * ```
 */
export type User_Identity = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION User_Identity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_User_Identity */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_User_Identity */

/* START_OF_SYMBOL_DEFINITION _decode_User_Identity */
export const _decode_User_Identity = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_User_Identity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_User_Identity */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_User_Identity */

/* START_OF_SYMBOL_DEFINITION _encode_User_Identity */
export const _encode_User_Identity = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_User_Identity */

/* eslint-enable */
