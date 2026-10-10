/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StateAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateAction  ::=  INTEGER {
 *     sta-update  (0)
 * 
 * }
 * ```
 */
export
type StateAction = INTEGER;

/**
 * @summary StateAction_sta_update
 * @constant
 * @type {number}
 */
export
const StateAction_sta_update: StateAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateAction_sta_update
 * @constant
 * @type {number}
 */
export
const sta_update: StateAction = StateAction_sta_update; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StateAction = $._decodeInteger;
export const _encode_StateAction = $._encodeInteger;


/* eslint-enable */
