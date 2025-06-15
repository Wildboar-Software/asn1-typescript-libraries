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

/* START_OF_SYMBOL_DEFINITION SupplementaryInformation */
/**
 * @summary SupplementaryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplementaryInformation  ::=
 *   PrintableString(SIZE (1..ub-supplementary-info-length))
 * ```
 */
export type SupplementaryInformation = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION SupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplementaryInformation */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _decode_SupplementaryInformation */
export const _decode_SupplementaryInformation = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_SupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplementaryInformation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _encode_SupplementaryInformation */
export const _encode_SupplementaryInformation = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_SupplementaryInformation */

/* eslint-enable */
