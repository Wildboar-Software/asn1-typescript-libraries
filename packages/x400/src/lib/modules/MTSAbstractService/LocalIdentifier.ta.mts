/* eslint-disable */
import {
    IA5String,
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

/* START_OF_SYMBOL_DEFINITION LocalIdentifier */
/**
 * @summary LocalIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalIdentifier  ::=  IA5String(SIZE (1..ub-local-id-length))
 * ```
 */
export type LocalIdentifier = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_LocalIdentifier */
export const _decode_LocalIdentifier = $._decodeIA5String;
/* END_OF_SYMBOL_DEFINITION _decode_LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_LocalIdentifier */
export const _encode_LocalIdentifier = $._encodeIA5String;

/* END_OF_SYMBOL_DEFINITION _encode_LocalIdentifier */

/* eslint-enable */
