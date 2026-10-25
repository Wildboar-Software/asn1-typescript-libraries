/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallType    ::=  INTEGER {
 *    mobileOriginated    ( 0 ),
 *    mobileTerminated    ( 1 )}
 * ```
 */
export
type CallType = INTEGER;

/**
 * @summary CallType_mobileOriginated
 * @constant
 * @type {number}
 */
export
const CallType_mobileOriginated: CallType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CallType_mobileOriginated
 * @constant
 * @type {number}
 */
export
const mobileOriginated: CallType = CallType_mobileOriginated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CallType_mobileTerminated
 * @constant
 * @type {number}
 */
export
const CallType_mobileTerminated: CallType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CallType_mobileTerminated
 * @constant
 * @type {number}
 */
export
const mobileTerminated: CallType = CallType_mobileTerminated; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CallType: $.ASN1Decoder<CallType> = $._decodeInteger;

export
const _encode_CallType: $.ASN1Encoder<CallType> = $._encodeInteger;

/* eslint-enable */
