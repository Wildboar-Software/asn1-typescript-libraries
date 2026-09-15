/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DestinationCondition
 * @description
 *
 * Called-party condition for Make Predictive Call
 * destination detection (ECMA-269 §17.1.20 Table 17-110):
 * `humanVoice`, `answeringMachine`, or
 * `facsimileMachine`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationCondition  ::=  ENUMERATED
 * {     humanVoice             (0),
 *     answeringMachine         (1),
 *     facsimileMachine         (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DestinationCondition {
    humanVoice = 0,
    answeringMachine = 1,
    facsimileMachine = 2,
}

/**
 * @summary DestinationCondition
 * @description
 *
 * Called-party condition for Make Predictive Call
 * destination detection (ECMA-269 §17.1.20 Table 17-110):
 * `humanVoice`, `answeringMachine`, or
 * `facsimileMachine`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationCondition  ::=  ENUMERATED
 * {     humanVoice             (0),
 *     answeringMachine         (1),
 *     facsimileMachine         (2) }
 * ```
 * 
 * @enum {number}
 */
export
type DestinationCondition = _enum_for_DestinationCondition;

/**
 * @summary DestinationCondition
 * @description
 *
 * Called-party condition for Make Predictive Call
 * destination detection (ECMA-269 §17.1.20 Table 17-110):
 * `humanVoice`, `answeringMachine`, or
 * `facsimileMachine`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationCondition  ::=  ENUMERATED
 * {     humanVoice             (0),
 *     answeringMachine         (1),
 *     facsimileMachine         (2) }
 * ```
 * 
 * @enum {number}
 */
export
const DestinationCondition = _enum_for_DestinationCondition;

/**
 * @summary DestinationCondition_humanVoice
 * @constant
 * @type {number}
 */
export
const DestinationCondition_humanVoice: DestinationCondition = DestinationCondition.humanVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary humanVoice
 * @constant
 * @type {number}
 */
export
const humanVoice: DestinationCondition = DestinationCondition.humanVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DestinationCondition_answeringMachine
 * @constant
 * @type {number}
 */
export
const DestinationCondition_answeringMachine: DestinationCondition = DestinationCondition.answeringMachine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answeringMachine
 * @constant
 * @type {number}
 */
export
const answeringMachine: DestinationCondition = DestinationCondition.answeringMachine; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DestinationCondition_facsimileMachine
 * @constant
 * @type {number}
 */
export
const DestinationCondition_facsimileMachine: DestinationCondition = DestinationCondition.facsimileMachine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary facsimileMachine
 * @constant
 * @type {number}
 */
export
const facsimileMachine: DestinationCondition = DestinationCondition.facsimileMachine; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DestinationCondition: $.ASN1Decoder<DestinationCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationCondition (el: _Element): DestinationCondition {
    if (!_cached_decoder_for_DestinationCondition) { _cached_decoder_for_DestinationCondition = $._decodeEnumerated; }
    return _cached_decoder_for_DestinationCondition(el);
}

let _cached_encoder_for_DestinationCondition: $.ASN1Encoder<DestinationCondition> | null = null;

/**
 * @summary Encodes a(n) DestinationCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationCondition, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationCondition (value: DestinationCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationCondition) { _cached_encoder_for_DestinationCondition = $._encodeEnumerated; }
    return _cached_encoder_for_DestinationCondition(value, elGetter);
}


/* eslint-enable */
