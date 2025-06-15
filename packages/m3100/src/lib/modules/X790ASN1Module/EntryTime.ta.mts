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

/* START_OF_SYMBOL_DEFINITION EntryTime */
/**
 * @summary EntryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryTime  ::=  GeneralizedTime
 * ```
 */
export type EntryTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION EntryTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryTime */

/* START_OF_SYMBOL_DEFINITION _decode_EntryTime */
export const _decode_EntryTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_EntryTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryTime */

/* START_OF_SYMBOL_DEFINITION _encode_EntryTime */
export const _encode_EntryTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_EntryTime */

/* eslint-enable */
