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

/* START_OF_SYMBOL_DEFINITION RegisteredAs */
/**
 * @summary RegisteredAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisteredAs  ::=  OBJECT IDENTIFIER
 * ```
 */
export type RegisteredAs = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisteredAs */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _decode_RegisteredAs */
export const _decode_RegisteredAs = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisteredAs */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _encode_RegisteredAs */
export const _encode_RegisteredAs = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_RegisteredAs */

/* eslint-enable */
