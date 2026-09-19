/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service4 ::=  ENUMERATED{
 *         callForwardingVariable(0),
 *         callForwardingDontAnswer(1),
 *         callForwardingBusyLine(2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service4 {
    callForwardingVariable = 0,
    callForwardingDontAnswer = 1,
    callForwardingBusyLine = 2,
}

/**
 * @summary Service4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service4 ::=  ENUMERATED{
 *         callForwardingVariable(0),
 *         callForwardingDontAnswer(1),
 *         callForwardingBusyLine(2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service4 = _enum_for_Service4;

/**
 * @summary Service4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service4 ::=  ENUMERATED{
 *         callForwardingVariable(0),
 *         callForwardingDontAnswer(1),
 *         callForwardingBusyLine(2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service4 = _enum_for_Service4;

/**
 * @summary Service4_callForwardingVariable
 * @constant
 * @type {number}
 */
export
const Service4_callForwardingVariable: Service4 = Service4.callForwardingVariable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingVariable
 * @constant
 * @type {number}
 */
export
const callForwardingVariable: Service4 = Service4.callForwardingVariable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service4_callForwardingDontAnswer
 * @constant
 * @type {number}
 */
export
const Service4_callForwardingDontAnswer: Service4 = Service4.callForwardingDontAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingDontAnswer
 * @constant
 * @type {number}
 */
export
const callForwardingDontAnswer: Service4 = Service4.callForwardingDontAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service4_callForwardingBusyLine
 * @constant
 * @type {number}
 */
export
const Service4_callForwardingBusyLine: Service4 = Service4.callForwardingBusyLine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingBusyLine
 * @constant
 * @type {number}
 */
export
const callForwardingBusyLine: Service4 = Service4.callForwardingBusyLine; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service4: $.ASN1Decoder<Service4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service4
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service4 (el: _Element): Service4 {
    if (!_cached_decoder_for_Service4) { _cached_decoder_for_Service4 = $._decodeEnumerated; }
    return _cached_decoder_for_Service4(el);
}

let _cached_encoder_for_Service4: $.ASN1Encoder<Service4> | null = null;

/**
 * @summary Encodes a(n) Service4 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service4, encoded as an ASN.1 Element.
 */
export
function _encode_Service4 (value: Service4, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service4) { _cached_encoder_for_Service4 = $._encodeEnumerated; }
    return _cached_encoder_for_Service4(value, elGetter);
}


/* eslint-enable */
