/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SignallingConditionsAction
 * @description
 *
 * Action after a Make Predictive Call signalling condition
 * (ECMA-269 §17.1.20 Table 17-110):
 * `destinationDetection` or `remainConnected`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingConditionsAction  ::=  ENUMERATED
 * {     destinationDetection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SignallingConditionsAction {
    destinationDetection = 0,
    remainConnected = 1,
}

/**
 * @summary SignallingConditionsAction
 * @description
 *
 * Action after a Make Predictive Call signalling condition
 * (ECMA-269 §17.1.20 Table 17-110):
 * `destinationDetection` or `remainConnected`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingConditionsAction  ::=  ENUMERATED
 * {     destinationDetection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
type SignallingConditionsAction = _enum_for_SignallingConditionsAction;

/**
 * @summary SignallingConditionsAction
 * @description
 *
 * Action after a Make Predictive Call signalling condition
 * (ECMA-269 §17.1.20 Table 17-110):
 * `destinationDetection` or `remainConnected`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingConditionsAction  ::=  ENUMERATED
 * {     destinationDetection         (0),
 *     remainConnected         (1) }
 * ```
 * 
 * @enum {number}
 */
export
const SignallingConditionsAction = _enum_for_SignallingConditionsAction;

/**
 * @summary SignallingConditionsAction_destinationDetection
 * @constant
 * @type {number}
 */
export
const SignallingConditionsAction_destinationDetection: SignallingConditionsAction = SignallingConditionsAction.destinationDetection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDetection
 * @constant
 * @type {number}
 */
export
const destinationDetection: SignallingConditionsAction = SignallingConditionsAction.destinationDetection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignallingConditionsAction_remainConnected
 * @constant
 * @type {number}
 */
export
const SignallingConditionsAction_remainConnected: SignallingConditionsAction = SignallingConditionsAction.remainConnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainConnected
 * @constant
 * @type {number}
 */
export
const remainConnected: SignallingConditionsAction = SignallingConditionsAction.remainConnected; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SignallingConditionsAction: $.ASN1Decoder<SignallingConditionsAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignallingConditionsAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignallingConditionsAction (el: _Element): SignallingConditionsAction {
    if (!_cached_decoder_for_SignallingConditionsAction) { _cached_decoder_for_SignallingConditionsAction = $._decodeEnumerated; }
    return _cached_decoder_for_SignallingConditionsAction(el);
}

let _cached_encoder_for_SignallingConditionsAction: $.ASN1Encoder<SignallingConditionsAction> | null = null;

/**
 * @summary Encodes a(n) SignallingConditionsAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignallingConditionsAction, encoded as an ASN.1 Element.
 */
export
function _encode_SignallingConditionsAction (value: SignallingConditionsAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignallingConditionsAction) { _cached_encoder_for_SignallingConditionsAction = $._encodeEnumerated; }
    return _cached_encoder_for_SignallingConditionsAction(value, elGetter);
}


/* eslint-enable */
