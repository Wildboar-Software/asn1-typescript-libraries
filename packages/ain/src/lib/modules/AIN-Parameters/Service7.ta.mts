/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service7
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service7 ::=  ENUMERATED{
 *         callingNumberDeliveryBlocking(0),
 *         callingNameDeliveryBlocking(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service7 {
    callingNumberDeliveryBlocking = 0,
    callingNameDeliveryBlocking = 1,
}

/**
 * @summary Service7
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service7 ::=  ENUMERATED{
 *         callingNumberDeliveryBlocking(0),
 *         callingNameDeliveryBlocking(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service7 = _enum_for_Service7;

/**
 * @summary Service7
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service7 ::=  ENUMERATED{
 *         callingNumberDeliveryBlocking(0),
 *         callingNameDeliveryBlocking(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service7 = _enum_for_Service7;

/**
 * @summary Service7_callingNumberDeliveryBlocking
 * @constant
 * @type {number}
 */
export
const Service7_callingNumberDeliveryBlocking: Service7 = Service7.callingNumberDeliveryBlocking; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingNumberDeliveryBlocking
 * @constant
 * @type {number}
 */
export
const callingNumberDeliveryBlocking: Service7 = Service7.callingNumberDeliveryBlocking; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service7_callingNameDeliveryBlocking
 * @constant
 * @type {number}
 */
export
const Service7_callingNameDeliveryBlocking: Service7 = Service7.callingNameDeliveryBlocking; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingNameDeliveryBlocking
 * @constant
 * @type {number}
 */
export
const callingNameDeliveryBlocking: Service7 = Service7.callingNameDeliveryBlocking; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service7: $.ASN1Decoder<Service7> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service7
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service7 (el: _Element): Service7 {
    if (!_cached_decoder_for_Service7) { _cached_decoder_for_Service7 = $._decodeEnumerated; }
    return _cached_decoder_for_Service7(el);
}

let _cached_encoder_for_Service7: $.ASN1Encoder<Service7> | null = null;

/**
 * @summary Encodes a(n) Service7 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service7, encoded as an ASN.1 Element.
 */
export
function _encode_Service7 (value: Service7, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service7) { _cached_encoder_for_Service7 = $._encodeEnumerated; }
    return _cached_encoder_for_Service7(value, elGetter);
}


/* eslint-enable */
