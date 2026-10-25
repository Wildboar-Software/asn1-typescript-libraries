/* eslint-disable */
import {
    type INTEGER
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
const StateAction_sta_update: 0 = 0 satisfies StateAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateAction_sta_update
 * @constant
 * @type {number}
 */
export
const sta_update: 0 = StateAction_sta_update; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StateAction: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_StateAction: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
