/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerPart_auxiliaryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart-auxiliaryStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServerPart_auxiliaryStatus = INTEGER;

/**
 * @summary ServerPart_auxiliaryStatus_notReceived
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_notReceived: ServerPart_auxiliaryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_notReceived
 * @constant
 * @type {number}
 */
export
const notReceived: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_notReceived; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_loanQueue
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_loanQueue: ServerPart_auxiliaryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_loanQueue
 * @constant
 * @type {number}
 */
export
const loanQueue: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_loanQueue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_forwarded
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_forwarded: ServerPart_auxiliaryStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_forwarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_unfilledCopyright
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_unfilledCopyright: ServerPart_auxiliaryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_unfilledCopyright
 * @constant
 * @type {number}
 */
export
const unfilledCopyright: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_unfilledCopyright; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_filledCopyright
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_filledCopyright: ServerPart_auxiliaryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_filledCopyright
 * @constant
 * @type {number}
 */
export
const filledCopyright: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_filledCopyright; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServerPart_auxiliaryStatus = $._decodeInteger;
export const _encode_ServerPart_auxiliaryStatus = $._encodeInteger;


/* eslint-enable */
