/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PKIPublicationInfo_action */
/**
 * @summary PKIPublicationInfo_action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIPublicationInfo-action ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKIPublicationInfo_action = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKIPublicationInfo_action */

/* START_OF_SYMBOL_DEFINITION PKIPublicationInfo_action_dontPublish */
/**
 * @summary PKIPublicationInfo_action_dontPublish
 * @constant
 * @type {number}
 */
export const PKIPublicationInfo_action_dontPublish: PKIPublicationInfo_action = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIPublicationInfo_action_dontPublish */

/* START_OF_SYMBOL_DEFINITION dontPublish */
/**
 * @summary PKIPublicationInfo_action_dontPublish
 * @constant
 * @type {number}
 */
export const dontPublish: PKIPublicationInfo_action = PKIPublicationInfo_action_dontPublish; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dontPublish */

/* START_OF_SYMBOL_DEFINITION PKIPublicationInfo_action_pleasePublish */
/**
 * @summary PKIPublicationInfo_action_pleasePublish
 * @constant
 * @type {number}
 */
export const PKIPublicationInfo_action_pleasePublish: PKIPublicationInfo_action = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIPublicationInfo_action_pleasePublish */

/* START_OF_SYMBOL_DEFINITION pleasePublish */
/**
 * @summary PKIPublicationInfo_action_pleasePublish
 * @constant
 * @type {number}
 */
export const pleasePublish: PKIPublicationInfo_action = PKIPublicationInfo_action_pleasePublish; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pleasePublish */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIPublicationInfo_action */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIPublicationInfo_action */

/* START_OF_SYMBOL_DEFINITION _decode_PKIPublicationInfo_action */
export const _decode_PKIPublicationInfo_action = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PKIPublicationInfo_action */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIPublicationInfo_action */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIPublicationInfo_action */

/* START_OF_SYMBOL_DEFINITION _encode_PKIPublicationInfo_action */
export const _encode_PKIPublicationInfo_action = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PKIPublicationInfo_action */

/* eslint-enable */
