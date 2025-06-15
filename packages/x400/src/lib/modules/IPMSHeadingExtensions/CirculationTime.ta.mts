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

/* START_OF_SYMBOL_DEFINITION CirculationTime */
/**
 * @summary CirculationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationTime  ::=  GeneralizedTime
 * ```
 */
export type CirculationTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION CirculationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationTime */

/* START_OF_SYMBOL_DEFINITION _decode_CirculationTime */
export const _decode_CirculationTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_CirculationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationTime */

/* START_OF_SYMBOL_DEFINITION _encode_CirculationTime */
export const _encode_CirculationTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_CirculationTime */

/* eslint-enable */
