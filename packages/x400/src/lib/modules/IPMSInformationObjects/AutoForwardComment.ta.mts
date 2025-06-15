/* eslint-disable */
import {
    PrintableString,
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

/* START_OF_SYMBOL_DEFINITION AutoForwardComment */
/**
 * @summary AutoForwardComment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoForwardComment  ::=  PrintableString(SIZE (0..ub-auto-forward-comment))
 * ```
 */
export type AutoForwardComment = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardComment */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _decode_AutoForwardComment */
export const _decode_AutoForwardComment = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardComment */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _encode_AutoForwardComment */
export const _encode_AutoForwardComment = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_AutoForwardComment */

/* eslint-enable */
