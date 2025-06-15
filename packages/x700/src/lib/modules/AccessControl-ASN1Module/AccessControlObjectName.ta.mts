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

/* START_OF_SYMBOL_DEFINITION AccessControlObjectName */
/**
 * @summary AccessControlObjectName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlObjectName  ::=  GraphicString
 * ```
 */
export type AccessControlObjectName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION AccessControlObjectName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControlObjectName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControlObjectName */

/* START_OF_SYMBOL_DEFINITION _decode_AccessControlObjectName */
export const _decode_AccessControlObjectName = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_AccessControlObjectName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControlObjectName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControlObjectName */

/* START_OF_SYMBOL_DEFINITION _encode_AccessControlObjectName */
export const _encode_AccessControlObjectName = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_AccessControlObjectName */

/* eslint-enable */
