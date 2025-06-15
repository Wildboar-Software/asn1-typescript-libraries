/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION MimeType */
/**
 * @summary MimeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MimeType  ::=  UTF8String
 * ```
 */
export
type MimeType = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION MimeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MimeType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MimeType */

/* START_OF_SYMBOL_DEFINITION _decode_MimeType */
export const _decode_MimeType = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_MimeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MimeType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MimeType */

/* START_OF_SYMBOL_DEFINITION _encode_MimeType */
export const _encode_MimeType = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_MimeType */

/* eslint-enable */
