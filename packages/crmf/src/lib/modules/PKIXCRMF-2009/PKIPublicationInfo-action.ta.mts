/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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


/**
 * @summary PKIPublicationInfo_action_dontPublish
 * @constant
 * @type {number}
 */
export const PKIPublicationInfo_action_dontPublish: PKIPublicationInfo_action = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIPublicationInfo_action_dontPublish
 * @constant
 * @type {number}
 */
export const dontPublish: PKIPublicationInfo_action = PKIPublicationInfo_action_dontPublish; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIPublicationInfo_action_pleasePublish
 * @constant
 * @type {number}
 */
export const PKIPublicationInfo_action_pleasePublish: PKIPublicationInfo_action = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIPublicationInfo_action_pleasePublish
 * @constant
 * @type {number}
 */
export const pleasePublish: PKIPublicationInfo_action = PKIPublicationInfo_action_pleasePublish; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PKIPublicationInfo_action = $._decodeInteger;




export const _encode_PKIPublicationInfo_action = $._encodeInteger;


/* eslint-enable */
