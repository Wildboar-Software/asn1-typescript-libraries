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

/* START_OF_SYMBOL_DEFINITION GeneralTextData */
/**
 * @summary GeneralTextData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralTextData  ::=  GeneralString
 * ```
 */
export type GeneralTextData = GeneralString; // GeneralString
/* END_OF_SYMBOL_DEFINITION GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralTextData */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralTextData */
export const _decode_GeneralTextData = $._decodeGeneralString;
/* END_OF_SYMBOL_DEFINITION _decode_GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralTextData */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralTextData */
export const _encode_GeneralTextData = $._encodeGeneralString;

/* END_OF_SYMBOL_DEFINITION _encode_GeneralTextData */

/* eslint-enable */
