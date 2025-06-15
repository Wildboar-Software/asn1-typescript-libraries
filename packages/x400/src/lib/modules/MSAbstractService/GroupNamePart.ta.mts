/* eslint-disable */
import {
    GeneralString,
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

/* START_OF_SYMBOL_DEFINITION GroupNamePart */
/**
 * @summary GroupNamePart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GroupNamePart  ::=  GeneralString(SIZE (1..ub-group-part-length))
 * ```
 */
export type GroupNamePart = GeneralString; // GeneralString
/* END_OF_SYMBOL_DEFINITION GroupNamePart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GroupNamePart */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GroupNamePart */

/* START_OF_SYMBOL_DEFINITION _decode_GroupNamePart */
export const _decode_GroupNamePart = $._decodeGeneralString;
/* END_OF_SYMBOL_DEFINITION _decode_GroupNamePart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GroupNamePart */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GroupNamePart */

/* START_OF_SYMBOL_DEFINITION _encode_GroupNamePart */
export const _encode_GroupNamePart = $._encodeGeneralString;

/* END_OF_SYMBOL_DEFINITION _encode_GroupNamePart */

/* eslint-enable */
