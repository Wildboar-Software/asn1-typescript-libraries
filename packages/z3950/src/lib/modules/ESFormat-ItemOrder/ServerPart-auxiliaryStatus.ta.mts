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

let _cached_decoder_for_ServerPart_auxiliaryStatus: $.ASN1Decoder<ServerPart_auxiliaryStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart_auxiliaryStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart_auxiliaryStatus (el: _Element): ServerPart_auxiliaryStatus {
    if (!_cached_decoder_for_ServerPart_auxiliaryStatus) { _cached_decoder_for_ServerPart_auxiliaryStatus = $._decodeInteger; }
    return _cached_decoder_for_ServerPart_auxiliaryStatus(el);
}

let _cached_encoder_for_ServerPart_auxiliaryStatus: $.ASN1Encoder<ServerPart_auxiliaryStatus> | null = null;

/**
 * @summary Encodes a(n) ServerPart_auxiliaryStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart_auxiliaryStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart_auxiliaryStatus (value: ServerPart_auxiliaryStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart_auxiliaryStatus) { _cached_encoder_for_ServerPart_auxiliaryStatus = $._encodeInteger; }
    return _cached_encoder_for_ServerPart_auxiliaryStatus(value, elGetter);
}


/* eslint-enable */
