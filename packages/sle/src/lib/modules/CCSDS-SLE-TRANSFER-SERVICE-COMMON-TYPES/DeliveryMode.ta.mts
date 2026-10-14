/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeliveryMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeliveryMode               ::=    INTEGER
 * { rtnTimelyOnline                  (0)
 * , rtnCompleteOnline                (1)
 * , rtnOffline                       (2)
 * , fwdOnline                        (3)
 * , fwdOffline                       (4)
 * }
 * ```
 */
export
type DeliveryMode = INTEGER;

/**
 * @summary DeliveryMode_rtnTimelyOnline
 * @constant
 * @type {number}
 */
export
const DeliveryMode_rtnTimelyOnline: DeliveryMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnTimelyOnline
 * @constant
 * @type {number}
 */
export
const rtnTimelyOnline: DeliveryMode = DeliveryMode_rtnTimelyOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnCompleteOnline
 * @constant
 * @type {number}
 */
export
const DeliveryMode_rtnCompleteOnline: DeliveryMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnCompleteOnline
 * @constant
 * @type {number}
 */
export
const rtnCompleteOnline: DeliveryMode = DeliveryMode_rtnCompleteOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnOffline
 * @constant
 * @type {number}
 */
export
const DeliveryMode_rtnOffline: DeliveryMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnOffline
 * @constant
 * @type {number}
 */
export
const rtnOffline: DeliveryMode = DeliveryMode_rtnOffline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOnline
 * @constant
 * @type {number}
 */
export
const DeliveryMode_fwdOnline: DeliveryMode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOnline
 * @constant
 * @type {number}
 */
export
const fwdOnline: DeliveryMode = DeliveryMode_fwdOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOffline
 * @constant
 * @type {number}
 */
export
const DeliveryMode_fwdOffline: DeliveryMode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOffline
 * @constant
 * @type {number}
 */
export
const fwdOffline: DeliveryMode = DeliveryMode_fwdOffline; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeliveryMode: $.ASN1Decoder<DeliveryMode> = $._decodeInteger;
export const _encode_DeliveryMode: $.ASN1Encoder<DeliveryMode> = $._encodeInteger;


/* eslint-enable */
