/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


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


/**
 * @summary SubsequentMessage_encrCert
 * @constant
 * @type {number}
 */
export const SubsequentMessage_encrCert: SubsequentMessage = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SubsequentMessage_encrCert
 * @constant
 * @type {number}
 */
export const encrCert: SubsequentMessage = SubsequentMessage_encrCert; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SubsequentMessage_challengeResp
 * @constant
 * @type {number}
 */
export const SubsequentMessage_challengeResp: SubsequentMessage = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SubsequentMessage_challengeResp
 * @constant
 * @type {number}
 */
export const challengeResp: SubsequentMessage = SubsequentMessage_challengeResp; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_SubsequentMessage = $._decodeInteger;




export const _encode_SubsequentMessage = $._encodeInteger;


/* eslint-enable */
