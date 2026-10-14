/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SlduStatusNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SlduStatusNotification  ::=    INTEGER
 * { produceNotification           (0)
 * , doNotProduceNotification      (1)
 * }
 * ```
 */
export
type SlduStatusNotification = INTEGER;

/**
 * @summary SlduStatusNotification_produceNotification
 * @constant
 * @type {number}
 */
export
const SlduStatusNotification_produceNotification: SlduStatusNotification = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SlduStatusNotification_produceNotification
 * @constant
 * @type {number}
 */
export
const produceNotification: SlduStatusNotification = SlduStatusNotification_produceNotification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SlduStatusNotification_doNotProduceNotification
 * @constant
 * @type {number}
 */
export
const SlduStatusNotification_doNotProduceNotification: SlduStatusNotification = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SlduStatusNotification_doNotProduceNotification
 * @constant
 * @type {number}
 */
export
const doNotProduceNotification: SlduStatusNotification = SlduStatusNotification_doNotProduceNotification; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SlduStatusNotification: $.ASN1Decoder<SlduStatusNotification> = $._decodeInteger;
export const _encode_SlduStatusNotification: $.ASN1Encoder<SlduStatusNotification> = $._encodeInteger;


/* eslint-enable */
