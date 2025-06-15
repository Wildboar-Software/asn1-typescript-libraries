/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION VersionInformationData */
/**
 * @summary VersionInformationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VersionInformationData  ::=  INTEGER {v1(0)}(0..MAX)
 * ```
 */
export type VersionInformationData = INTEGER;
/* END_OF_SYMBOL_DEFINITION VersionInformationData */

/* START_OF_SYMBOL_DEFINITION VersionInformationData_v1 */
/**
 * @summary VersionInformationData_v1
 * @constant
 * @type {number}
 */
export const VersionInformationData_v1: VersionInformationData = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION VersionInformationData_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary VersionInformationData_v1
 * @constant
 * @type {number}
 */
export const v1: VersionInformationData = VersionInformationData_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VersionInformationData */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VersionInformationData */

/* START_OF_SYMBOL_DEFINITION _decode_VersionInformationData */
export const _decode_VersionInformationData = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_VersionInformationData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VersionInformationData */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VersionInformationData */

/* START_OF_SYMBOL_DEFINITION _encode_VersionInformationData */
export const _encode_VersionInformationData = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_VersionInformationData */

/* eslint-enable */
