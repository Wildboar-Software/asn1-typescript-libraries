/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION RedirectHoldingTime_Permitted */
/**
 * @summary RedirectHoldingTime_Permitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectHoldingTime-Permitted  ::=  INTEGER(1..65535)
 * ```
 */
export type RedirectHoldingTime_Permitted = INTEGER;
/* END_OF_SYMBOL_DEFINITION RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime_Permitted */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime_Permitted */
export const _decode_RedirectHoldingTime_Permitted = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime_Permitted */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime_Permitted */
export const _encode_RedirectHoldingTime_Permitted = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime_Permitted */

/* eslint-enable */
