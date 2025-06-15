/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_RequestSource */
/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```@enum {number}
 */
export enum _enum_for_RequestSource {
    local = 0,
    remote = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RequestSource */

/* START_OF_SYMBOL_DEFINITION RequestSource */
/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```@enum {number}
 */
export type RequestSource = _enum_for_RequestSource;
/* END_OF_SYMBOL_DEFINITION RequestSource */

/* START_OF_SYMBOL_DEFINITION RequestSource */
/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```@enum {number}
 */
export const RequestSource = _enum_for_RequestSource;
/* END_OF_SYMBOL_DEFINITION RequestSource */

/* START_OF_SYMBOL_DEFINITION RequestSource_local */
/**
 * @summary RequestSource_local
 * @constant
 * @type {number}
 */
export const RequestSource_local: RequestSource =
    RequestSource.local; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestSource_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary local
 * @constant
 * @type {number}
 */
export const local: RequestSource =
    RequestSource.local; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION RequestSource_remote */
/**
 * @summary RequestSource_remote
 * @constant
 * @type {number}
 */
export const RequestSource_remote: RequestSource =
    RequestSource.remote; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestSource_remote */

/* START_OF_SYMBOL_DEFINITION remote */
/**
 * @summary remote
 * @constant
 * @type {number}
 */
export const remote: RequestSource =
    RequestSource.remote; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION remote */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestSource */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestSource */

/* START_OF_SYMBOL_DEFINITION _decode_RequestSource */
export const _decode_RequestSource = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_RequestSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestSource */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestSource */

/* START_OF_SYMBOL_DEFINITION _encode_RequestSource */
export const _encode_RequestSource = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_RequestSource */

/* eslint-enable */
