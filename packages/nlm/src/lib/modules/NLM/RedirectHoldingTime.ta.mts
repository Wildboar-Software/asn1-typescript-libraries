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

/* START_OF_SYMBOL_DEFINITION RedirectHoldingTime */
/**
 * @summary RedirectHoldingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectHoldingTime  ::=  INTEGER(1..65535)
 * ```
 */
export type RedirectHoldingTime = INTEGER;
/* END_OF_SYMBOL_DEFINITION RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime */
export const _decode_RedirectHoldingTime = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime */
export const _encode_RedirectHoldingTime = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime */

/* eslint-enable */
