/* eslint-disable */
import {
    GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION DateOfLeap */
/**
 * @summary DateOfLeap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateOfLeap  ::=  GeneralizedTime
 * ```
 */
export type DateOfLeap = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateOfLeap */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _decode_DateOfLeap */
export const _decode_DateOfLeap = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateOfLeap */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _encode_DateOfLeap */
export const _encode_DateOfLeap = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_DateOfLeap */

/* eslint-enable */
