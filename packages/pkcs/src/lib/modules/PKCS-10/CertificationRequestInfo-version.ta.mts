/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CertificationRequestInfo_version */
/**
 * @summary CertificationRequestInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationRequestInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertificationRequestInfo_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION CertificationRequestInfo_version_v1 */
/**
 * @summary CertificationRequestInfo_version_v1
 * @constant
 * @type {number}
 */
export const CertificationRequestInfo_version_v1: CertificationRequestInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CertificationRequestInfo_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary CertificationRequestInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: CertificationRequestInfo_version = CertificationRequestInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequestInfo_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION _decode_CertificationRequestInfo_version */
export const _decode_CertificationRequestInfo_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequestInfo_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION _encode_CertificationRequestInfo_version */
export const _encode_CertificationRequestInfo_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CertificationRequestInfo_version */

/* eslint-enable */
