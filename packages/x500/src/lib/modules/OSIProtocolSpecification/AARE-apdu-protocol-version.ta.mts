/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AARE_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARE_apdu_protocol_version = BIT_STRING;

/**
 * @summary AARE_apdu_protocol_version_version1
 * @constant
 */
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version1
 * @constant
 */
export const version1: number = AARE_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */


export const _decode_AARE_apdu_protocol_version = $._decodeBitString;


export const _encode_AARE_apdu_protocol_version = $._encodeBitString;


/* eslint-enable */
