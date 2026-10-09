/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerPart_auxiliaryStatus
 * @description
 * 
 * Auxiliary item-order status, supplementing the externally defined status
 * or error report. The standard names these values and does not define
 * them further.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart-auxiliaryStatus ::= INTEGER {
 *     notReceived (1),
 *     loanQueue (2),
 *     forwarded (3),
 *     unfilledCopyright (4),
 *     filledCopyright (5)
 * }
 * ```
 */
export
type ServerPart_auxiliaryStatus = INTEGER;

/**
 * @summary ServerPart_auxiliaryStatus_notReceived
 * @description
 * 
 * Auxiliary status `notReceived`. EXT.1.4 allows the server to supply an
 * auxiliary status and does not define this value beyond the name.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_notReceived: ServerPart_auxiliaryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_notReceived
 * @description
 * 
 * Auxiliary status `notReceived` (EXT.1.4). The standard does not define
 * it beyond the name.
 * 
 * @constant
 * @type {number}
 */
export
const notReceived: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_notReceived; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_loanQueue
 * @description
 * 
 * Auxiliary status `loanQueue`. EXT.1.4 does not define this value beyond
 * the name.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_loanQueue: ServerPart_auxiliaryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_loanQueue
 * @description
 * 
 * Auxiliary status `loanQueue` (EXT.1.4). The standard does not define it
 * beyond the name.
 * 
 * @constant
 * @type {number}
 */
export
const loanQueue: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_loanQueue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_forwarded
 * @description
 * 
 * Auxiliary status `forwarded`. EXT.1.4 does not define this value beyond
 * the name.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_forwarded: ServerPart_auxiliaryStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_forwarded
 * @description
 * 
 * Auxiliary status `forwarded` (EXT.1.4). The standard does not define it
 * beyond the name.
 * 
 * @constant
 * @type {number}
 */
export
const forwarded: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_forwarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_unfilledCopyright
 * @description
 * 
 * Auxiliary status `unfilledCopyright`. EXT.1.4 does not define this value
 * beyond the name.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_unfilledCopyright: ServerPart_auxiliaryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_unfilledCopyright
 * @description
 * 
 * Auxiliary status `unfilledCopyright` (EXT.1.4). The standard does not
 * define it beyond the name.
 * 
 * @constant
 * @type {number}
 */
export
const unfilledCopyright: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_unfilledCopyright; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_filledCopyright
 * @description
 * 
 * Auxiliary status `filledCopyright`. EXT.1.4 does not define this value
 * beyond the name.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_auxiliaryStatus_filledCopyright: ServerPart_auxiliaryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_auxiliaryStatus_filledCopyright
 * @description
 * 
 * Auxiliary status `filledCopyright` (EXT.1.4). The standard does not
 * define it beyond the name.
 * 
 * @constant
 * @type {number}
 */
export
const filledCopyright: ServerPart_auxiliaryStatus = ServerPart_auxiliaryStatus_filledCopyright; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServerPart_auxiliaryStatus = $._decodeInteger;
export const _encode_ServerPart_auxiliaryStatus = $._encodeInteger;


/* eslint-enable */
