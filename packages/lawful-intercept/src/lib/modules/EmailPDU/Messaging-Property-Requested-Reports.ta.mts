/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Property_Requested_Reports {
    none = 0,
    delivery = 1,
    read = 2,
    delivery_and_read = 3,
}

/**
 * @summary Messaging_Property_Requested_Reports
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Requested-Reports  ::=  ENUMERATED
 * {
 *     none(0),
 *     delivery(1),
 *     read(2),
 *     delivery-and-read(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Requested_Reports = _enum_for_Messaging_Property_Requested_Reports | ENUMERATED;

/**
 * @summary Messaging_Property_Requested_Reports_none
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_none: Messaging_Property_Requested_Reports = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_delivery
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_delivery: Messaging_Property_Requested_Reports = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @constant
 * @type {number}
 */
export
const delivery: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_read
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_read: Messaging_Property_Requested_Reports = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_delivery_and_read
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_delivery_and_read: Messaging_Property_Requested_Reports = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_and_read
 * @constant
 * @type {number}
 */
export
const delivery_and_read: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_delivery_and_read; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Property_Requested_Reports: $.ASN1Decoder<Messaging_Property_Requested_Reports> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Property_Requested_Reports
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Property_Requested_Reports (el: _Element): Messaging_Property_Requested_Reports {
    if (!_cached_decoder_for_Messaging_Property_Requested_Reports) { _cached_decoder_for_Messaging_Property_Requested_Reports = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Property_Requested_Reports(el);
}

let _cached_encoder_for_Messaging_Property_Requested_Reports: $.ASN1Encoder<Messaging_Property_Requested_Reports> | null = null;

/**
 * @summary Encodes a(n) Messaging_Property_Requested_Reports into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Property_Requested_Reports, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Property_Requested_Reports (value: Messaging_Property_Requested_Reports, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Property_Requested_Reports) { _cached_encoder_for_Messaging_Property_Requested_Reports = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Property_Requested_Reports(value, elGetter);
}


/* eslint-enable */
