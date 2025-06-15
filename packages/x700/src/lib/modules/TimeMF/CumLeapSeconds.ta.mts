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

/* START_OF_SYMBOL_DEFINITION CumLeapSeconds */
/**
 * @summary CumLeapSeconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CumLeapSeconds  ::=  INTEGER(0..255)
 * ```
 */
export type CumLeapSeconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CumLeapSeconds */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _decode_CumLeapSeconds */
export const _decode_CumLeapSeconds = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CumLeapSeconds */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _encode_CumLeapSeconds */
export const _encode_CumLeapSeconds = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CumLeapSeconds */

/* eslint-enable */
