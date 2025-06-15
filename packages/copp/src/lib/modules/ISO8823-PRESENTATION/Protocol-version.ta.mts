/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Protocol_version */
/**
 * @summary Protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-version  ::=  BIT STRING {version-1(0)}
 * ```
 */
export type Protocol_version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Protocol_version */

/* START_OF_SYMBOL_DEFINITION Protocol_version_version_1 */
/**
 * @summary Protocol_version_version_1
 * @constant
 */
export const Protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_version_version_1 */

/* START_OF_SYMBOL_DEFINITION version_1 */
/**
 * @summary version_1
 * @constant
 */
export const version_1: number = Protocol_version_version_1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version_1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_version */

/* START_OF_SYMBOL_DEFINITION _decode_Protocol_version */
export const _decode_Protocol_version = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Protocol_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_version */

/* START_OF_SYMBOL_DEFINITION _encode_Protocol_version */
export const _encode_Protocol_version = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Protocol_version */

/* eslint-enable */
