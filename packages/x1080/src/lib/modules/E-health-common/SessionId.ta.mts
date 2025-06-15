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

/* START_OF_SYMBOL_DEFINITION SessionId */
/**
 * @summary SessionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SessionId  ::=  INTEGER (1..32767)
 * ```
 */
export type SessionId = INTEGER;
/* END_OF_SYMBOL_DEFINITION SessionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionId */

/* START_OF_SYMBOL_DEFINITION _decode_SessionId */
export const _decode_SessionId = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SessionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionId */

/* START_OF_SYMBOL_DEFINITION _encode_SessionId */
export const _encode_SessionId = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SessionId */

/* eslint-enable */
