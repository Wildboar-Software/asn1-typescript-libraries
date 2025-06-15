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

/* START_OF_SYMBOL_DEFINITION GdmoObjectClass */
/**
 * @summary GdmoObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GdmoObjectClass  ::=  OBJECT IDENTIFIER
 * ```
 */
export type GdmoObjectClass = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION GdmoObjectClass */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GdmoObjectClass */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GdmoObjectClass */

/* START_OF_SYMBOL_DEFINITION _decode_GdmoObjectClass */
export const _decode_GdmoObjectClass = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_GdmoObjectClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GdmoObjectClass */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GdmoObjectClass */

/* START_OF_SYMBOL_DEFINITION _encode_GdmoObjectClass */
export const _encode_GdmoObjectClass = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_GdmoObjectClass */

/* eslint-enable */
