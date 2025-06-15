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

/* START_OF_SYMBOL_DEFINITION InformationString */
/**
 * @summary InformationString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationString  ::=  GeneralString
 * ```
 */
export type InformationString = GeneralString; // GeneralString
/* END_OF_SYMBOL_DEFINITION InformationString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationString */

/* START_OF_SYMBOL_DEFINITION _decode_InformationString */
export const _decode_InformationString = $._decodeGeneralString;
/* END_OF_SYMBOL_DEFINITION _decode_InformationString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationString */

/* START_OF_SYMBOL_DEFINITION _encode_InformationString */
export const _encode_InformationString = $._encodeGeneralString;

/* END_OF_SYMBOL_DEFINITION _encode_InformationString */

/* eslint-enable */
