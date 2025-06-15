/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SubsequentMessage */
/**
 * @summary SubsequentMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubsequentMessage  ::=  INTEGER {
 *     encrCert (0),
 *     -- requests that resulting certificate be encrypted for the
 *     -- end entity (following which, POP will be proven in a
 *     -- confirmation message)
 *     challengeResp (1) }
 * ```
 */
export type SubsequentMessage = INTEGER;
/* END_OF_SYMBOL_DEFINITION SubsequentMessage */

/* START_OF_SYMBOL_DEFINITION SubsequentMessage_encrCert */
/**
 * @summary SubsequentMessage_encrCert
 * @constant
 * @type {number}
 */
export const SubsequentMessage_encrCert: SubsequentMessage = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubsequentMessage_encrCert */

/* START_OF_SYMBOL_DEFINITION encrCert */
/**
 * @summary SubsequentMessage_encrCert
 * @constant
 * @type {number}
 */
export const encrCert: SubsequentMessage = SubsequentMessage_encrCert; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION encrCert */

/* START_OF_SYMBOL_DEFINITION SubsequentMessage_challengeResp */
/**
 * @summary SubsequentMessage_challengeResp
 * @constant
 * @type {number}
 */
export const SubsequentMessage_challengeResp: SubsequentMessage = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubsequentMessage_challengeResp */

/* START_OF_SYMBOL_DEFINITION challengeResp */
/**
 * @summary SubsequentMessage_challengeResp
 * @constant
 * @type {number}
 */
export const challengeResp: SubsequentMessage = SubsequentMessage_challengeResp; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION challengeResp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubsequentMessage */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubsequentMessage */

/* START_OF_SYMBOL_DEFINITION _decode_SubsequentMessage */
export const _decode_SubsequentMessage = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SubsequentMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubsequentMessage */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubsequentMessage */

/* START_OF_SYMBOL_DEFINITION _encode_SubsequentMessage */
export const _encode_SubsequentMessage = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SubsequentMessage */

/* eslint-enable */
