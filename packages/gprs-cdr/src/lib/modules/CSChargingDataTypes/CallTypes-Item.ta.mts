/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallTypes_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypes-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CallTypes_Item = INTEGER;

/**
 * @summary CallTypes_Item_mobileOriginated
 * @constant
 * @type {number}
 */
export
const CallTypes_Item_mobileOriginated: CallTypes_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CallTypes_Item_mobileOriginated
 * @constant
 * @type {number}
 */
export
const mobileOriginated: CallTypes_Item = CallTypes_Item_mobileOriginated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CallTypes_Item_mobileTerminated
 * @constant
 * @type {number}
 */
export
const CallTypes_Item_mobileTerminated: CallTypes_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CallTypes_Item_mobileTerminated
 * @constant
 * @type {number}
 */
export
const mobileTerminated: CallTypes_Item = CallTypes_Item_mobileTerminated; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CallTypes_Item: $.ASN1Decoder<CallTypes_Item> = $._decodeInteger;

export
const _encode_CallTypes_Item: $.ASN1Encoder<CallTypes_Item> = $._encodeInteger;

/* eslint-enable */
