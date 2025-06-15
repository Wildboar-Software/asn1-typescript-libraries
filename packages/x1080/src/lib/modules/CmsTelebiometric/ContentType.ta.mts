/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
/* START_OF_SYMBOL_DEFINITION ContentType */
/**
 * @summary ContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentType  ::=  CONTENT-TYPE.&id
 * ```
 */
export type ContentType = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION ContentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentType */

/* START_OF_SYMBOL_DEFINITION _decode_ContentType */
export const _decode_ContentType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_ContentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentType */

/* START_OF_SYMBOL_DEFINITION _encode_ContentType */
export const _encode_ContentType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_ContentType */

/* eslint-enable */
