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

/* START_OF_SYMBOL_DEFINITION ApplicationContext */
/**
 * @summary ApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContext  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ApplicationContext = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContext */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationContext */
export const _decode_ApplicationContext = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContext */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationContext */
export const _encode_ApplicationContext = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationContext */

/* eslint-enable */
