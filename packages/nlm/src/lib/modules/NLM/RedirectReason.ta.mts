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

/* START_OF_SYMBOL_DEFINITION RedirectReason */
/**
 * @summary RedirectReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectReason  ::=  INTEGER(0..127)
 * ```
 */
export type RedirectReason = INTEGER;
/* END_OF_SYMBOL_DEFINITION RedirectReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectReason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectReason */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectReason */
export const _decode_RedirectReason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RedirectReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectReason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectReason */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectReason */
export const _encode_RedirectReason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RedirectReason */

/* eslint-enable */
