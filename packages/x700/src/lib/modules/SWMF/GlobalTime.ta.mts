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

/* START_OF_SYMBOL_DEFINITION GlobalTime */
/**
 * @summary GlobalTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GlobalTime  ::=  GeneralizedTime
 * ```
 */
export type GlobalTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION GlobalTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GlobalTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GlobalTime */

/* START_OF_SYMBOL_DEFINITION _decode_GlobalTime */
export const _decode_GlobalTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_GlobalTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GlobalTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GlobalTime */

/* START_OF_SYMBOL_DEFINITION _encode_GlobalTime */
export const _encode_GlobalTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_GlobalTime */

/* eslint-enable */
