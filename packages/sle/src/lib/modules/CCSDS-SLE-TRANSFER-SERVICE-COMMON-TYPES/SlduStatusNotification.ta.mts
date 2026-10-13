/* eslint-disable */
import {
    ASN1Element as _Element,
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

let _cached_decoder_for_SlduStatusNotification: $.ASN1Decoder<SlduStatusNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SlduStatusNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SlduStatusNotification (el: _Element): SlduStatusNotification {
    if (!_cached_decoder_for_SlduStatusNotification) { _cached_decoder_for_SlduStatusNotification = $._decodeInteger; }
    return _cached_decoder_for_SlduStatusNotification(el);
}

let _cached_encoder_for_SlduStatusNotification: $.ASN1Encoder<SlduStatusNotification> | null = null;

/**
 * @summary Encodes a(n) SlduStatusNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SlduStatusNotification, encoded as an ASN.1 Element.
 */
export
function _encode_SlduStatusNotification (value: SlduStatusNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SlduStatusNotification) { _cached_encoder_for_SlduStatusNotification = $._encodeInteger; }
    return _cached_encoder_for_SlduStatusNotification(value, elGetter);
}


/* eslint-enable */
