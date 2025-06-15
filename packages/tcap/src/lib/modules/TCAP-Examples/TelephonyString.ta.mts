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

/* START_OF_SYMBOL_DEFINITION TelephonyString */
/**
 * @summary TelephonyString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephonyString  ::=
 *   IA5String
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "*" |
 *            "#"))(SIZE (1..15))
 * ```
 */
export type TelephonyString = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION TelephonyString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephonyString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephonyString */

/* START_OF_SYMBOL_DEFINITION _decode_TelephonyString */
export const _decode_TelephonyString = $._decodeIA5String;
/* END_OF_SYMBOL_DEFINITION _decode_TelephonyString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephonyString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephonyString */

/* START_OF_SYMBOL_DEFINITION _encode_TelephonyString */
export const _encode_TelephonyString = $._encodeIA5String;

/* END_OF_SYMBOL_DEFINITION _encode_TelephonyString */

/* eslint-enable */
