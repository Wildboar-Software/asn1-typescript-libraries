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

/* START_OF_SYMBOL_DEFINITION SyntaxVersion */
/**
 * @summary SyntaxVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SyntaxVersion  ::=  PrintableString(SIZE (1..ub-syntax-version))
 * ```
 */
export type SyntaxVersion = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION SyntaxVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxVersion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxVersion */

/* START_OF_SYMBOL_DEFINITION _decode_SyntaxVersion */
export const _decode_SyntaxVersion = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_SyntaxVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxVersion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxVersion */

/* START_OF_SYMBOL_DEFINITION _encode_SyntaxVersion */
export const _encode_SyntaxVersion = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_SyntaxVersion */

/* eslint-enable */
