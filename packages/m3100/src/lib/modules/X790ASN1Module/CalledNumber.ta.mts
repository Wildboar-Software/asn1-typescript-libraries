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

/* START_OF_SYMBOL_DEFINITION CalledNumber */
/**
 * @summary CalledNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalledNumber  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type CalledNumber = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CalledNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CalledNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CalledNumber */

/* START_OF_SYMBOL_DEFINITION _decode_CalledNumber */
export const _decode_CalledNumber = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_CalledNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CalledNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CalledNumber */

/* START_OF_SYMBOL_DEFINITION _encode_CalledNumber */
export const _encode_CalledNumber = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_CalledNumber */

/* eslint-enable */
