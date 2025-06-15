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

/* START_OF_SYMBOL_DEFINITION Text128 */
/**
 * @summary Text128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Text128  ::=  PrintableString(SIZE (0..128))
 * ```
 */
export type Text128 = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION Text128 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Text128 */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Text128 */

/* START_OF_SYMBOL_DEFINITION _decode_Text128 */
export const _decode_Text128 = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_Text128 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Text128 */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Text128 */

/* START_OF_SYMBOL_DEFINITION _encode_Text128 */
export const _encode_Text128 = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_Text128 */

/* eslint-enable */
