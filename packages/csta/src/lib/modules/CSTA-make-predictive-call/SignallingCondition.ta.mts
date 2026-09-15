/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SignallingCondition
 * @description
 *
 * Call-progress trigger for Make Predictive Call
 * (ECMA-269 §17.1.20 Table 17-110): `callDelivered`
 * (delivered or answered, whichever first) or
 * `callEstablished` (answered).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingCondition  ::=  ENUMERATED
 * {     callDelivered             (0),
 *     callEstablished         (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SignallingCondition {
    callDelivered = 0,
    callEstablished = 1,
}

/**
 * @summary SignallingCondition
 * @description
 *
 * Call-progress trigger for Make Predictive Call
 * (ECMA-269 §17.1.20 Table 17-110): `callDelivered`
 * (delivered or answered, whichever first) or
 * `callEstablished` (answered).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingCondition  ::=  ENUMERATED
 * {     callDelivered             (0),
 *     callEstablished         (1) }
 * ```
 * 
 * @enum {number}
 */
export
type SignallingCondition = _enum_for_SignallingCondition;

/**
 * @summary SignallingCondition
 * @description
 *
 * Call-progress trigger for Make Predictive Call
 * (ECMA-269 §17.1.20 Table 17-110): `callDelivered`
 * (delivered or answered, whichever first) or
 * `callEstablished` (answered).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingCondition  ::=  ENUMERATED
 * {     callDelivered             (0),
 *     callEstablished         (1) }
 * ```
 * 
 * @enum {number}
 */
export
const SignallingCondition = _enum_for_SignallingCondition;

/**
 * @summary SignallingCondition_callDelivered
 * @constant
 * @type {number}
 */
export
const SignallingCondition_callDelivered: SignallingCondition = SignallingCondition.callDelivered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDelivered
 * @constant
 * @type {number}
 */
export
const callDelivered: SignallingCondition = SignallingCondition.callDelivered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignallingCondition_callEstablished
 * @constant
 * @type {number}
 */
export
const SignallingCondition_callEstablished: SignallingCondition = SignallingCondition.callEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callEstablished
 * @constant
 * @type {number}
 */
export
const callEstablished: SignallingCondition = SignallingCondition.callEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SignallingCondition: $.ASN1Decoder<SignallingCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignallingCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignallingCondition (el: _Element): SignallingCondition {
    if (!_cached_decoder_for_SignallingCondition) { _cached_decoder_for_SignallingCondition = $._decodeEnumerated; }
    return _cached_decoder_for_SignallingCondition(el);
}

let _cached_encoder_for_SignallingCondition: $.ASN1Encoder<SignallingCondition> | null = null;

/**
 * @summary Encodes a(n) SignallingCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignallingCondition, encoded as an ASN.1 Element.
 */
export
function _encode_SignallingCondition (value: SignallingCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignallingCondition) { _cached_encoder_for_SignallingCondition = $._encodeEnumerated; }
    return _cached_encoder_for_SignallingCondition(value, elGetter);
}


/* eslint-enable */
