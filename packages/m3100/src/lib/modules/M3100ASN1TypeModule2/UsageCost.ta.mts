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

/* START_OF_SYMBOL_DEFINITION UsageCost */
/**
 * @summary UsageCost
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageCost  ::=  INTEGER(0..255)
 * ```
 */
export type UsageCost = INTEGER;
/* END_OF_SYMBOL_DEFINITION UsageCost */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageCost */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageCost */

/* START_OF_SYMBOL_DEFINITION _decode_UsageCost */
export const _decode_UsageCost = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_UsageCost */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageCost */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageCost */

/* START_OF_SYMBOL_DEFINITION _encode_UsageCost */
export const _encode_UsageCost = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_UsageCost */

/* eslint-enable */
