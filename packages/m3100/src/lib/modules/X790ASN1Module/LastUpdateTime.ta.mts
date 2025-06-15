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

/* START_OF_SYMBOL_DEFINITION LastUpdateTime */
/**
 * @summary LastUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastUpdateTime  ::=  GeneralizedTime
 * ```
 */
export type LastUpdateTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastUpdateTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _decode_LastUpdateTime */
export const _decode_LastUpdateTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastUpdateTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _encode_LastUpdateTime */
export const _encode_LastUpdateTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_LastUpdateTime */

/* eslint-enable */
