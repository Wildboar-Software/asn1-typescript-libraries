/* eslint-disable */
import {
    ASN1Element as _Element,
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

let _cached_decoder_for_DeliveryMode: $.ASN1Decoder<DeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeliveryMode (el: _Element): DeliveryMode {
    if (!_cached_decoder_for_DeliveryMode) { _cached_decoder_for_DeliveryMode = $._decodeInteger; }
    return _cached_decoder_for_DeliveryMode(el);
}

let _cached_encoder_for_DeliveryMode: $.ASN1Encoder<DeliveryMode> | null = null;

/**
 * @summary Encodes a(n) DeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_DeliveryMode (value: DeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeliveryMode) { _cached_encoder_for_DeliveryMode = $._encodeInteger; }
    return _cached_encoder_for_DeliveryMode(value, elGetter);
}


/* eslint-enable */
