/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION SuppressObjectInstance */
/**
 * @summary SuppressObjectInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuppressObjectInstance  ::=  BOOLEAN
 * ```
 */
export type SuppressObjectInstance = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION SuppressObjectInstance */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SuppressObjectInstance */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SuppressObjectInstance */

/* START_OF_SYMBOL_DEFINITION _decode_SuppressObjectInstance */
export const _decode_SuppressObjectInstance = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_SuppressObjectInstance */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SuppressObjectInstance */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SuppressObjectInstance */

/* START_OF_SYMBOL_DEFINITION _encode_SuppressObjectInstance */
export const _encode_SuppressObjectInstance = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_SuppressObjectInstance */

/* eslint-enable */
