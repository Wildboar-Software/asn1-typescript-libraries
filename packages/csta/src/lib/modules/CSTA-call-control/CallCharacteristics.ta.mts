/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallCharacteristics
 * @description
 *
 * High-level characteristics of a call (ACD, priority,
 * sensitivity, encryption). On an event, describes the call; on
 * a service request, the characteristics to associate with the
 * call. Multiple bits may be set. If several priority or
 * sensitivity bits are set, the highest is suggested.
 * Sensitivity, increasing: `privateCall`, `personalCall`,
 * `sensitiveCall`, `confidentialCall`. Priority, increasing:
 * `lowPriorityCall`, `priorityCall`, `highPriorityCall`.
 * ECMA-269 §12.2.4.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallCharacteristics  ::=  BIT STRING
 * {     acdCall                     ( 0),
 *     lowPriorityCall                    (11),
 *     priorityCall                     ( 1),
 *     highPriorityCall                (12),
 *     maintainanceCall                 ( 2),
 *     directAgent                     ( 3),
 *     assistCall                     ( 4),
 *     voiceUnitCall                     ( 5),
 *     privateCall                    ( 6),
 *     personalCall                    ( 7),
 *     sensitiveCall                    ( 8),
 *     confidentialCall                ( 9),
 *     encryptedCall                    (10) }
 * ```
 */
export
type CallCharacteristics = BIT_STRING;

/**
 * @summary CallCharacteristics_acdCall
 * @description
 *
 * ACD call. Cleared once the call is no longer associated with
 * the ACD. When a switch classifies a call as ACD (and when it
 * ceases to be) is switching-function dependent.
 * ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_acdCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acdCall
 * @constant
 */
export
const acdCall: number = CallCharacteristics_acdCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_lowPriorityCall
 * @description
 *
 * Lowest of the three priority levels. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_lowPriorityCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary lowPriorityCall
 * @constant
 */
export
const lowPriorityCall: number = CallCharacteristics_lowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_priorityCall
 * @description
 *
 * Normal (middle) priority. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_priorityCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary priorityCall
 * @constant
 */
export
const priorityCall: number = CallCharacteristics_priorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_highPriorityCall
 * @description
 *
 * Highest of the three priority levels. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_highPriorityCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary highPriorityCall
 * @constant
 */
export
const highPriorityCall: number = CallCharacteristics_highPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_maintainanceCall
 * @description
 *
 * Maintenance call. ASN.1 spelling `maintainanceCall` (typo in
 * ECMA-285). ECMA-269 §12.2.4 (`maintenanceCall`).
 *
 * @constant
 */
export
const CallCharacteristics_maintainanceCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary maintainanceCall
 * @constant
 */
export
const maintainanceCall: number = CallCharacteristics_maintainanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_directAgent
 * @description
 *
 * Call placed directly to a device (e.g. ACD or station),
 * possibly overriding agent states, forwarding, or DND.
 * ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_directAgent: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary directAgent
 * @constant
 */
export
const directAgent: number = CallCharacteristics_directAgent; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_assistCall
 * @description
 *
 * Call whose purpose is to request assistance. ECMA-269
 * §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_assistCall: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary assistCall
 * @constant
 */
export
const assistCall: number = CallCharacteristics_assistCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_voiceUnitCall
 * @description
 *
 * Call involving a Voice Unit (e.g. voice mail) or Interactive
 * Voice Device. Cleared when that device leaves the call.
 * ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_voiceUnitCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary voiceUnitCall
 * @constant
 */
export
const voiceUnitCall: number = CallCharacteristics_voiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_privateCall
 * @description
 *
 * Lowest sensitivity level. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_privateCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateCall
 * @constant
 */
export
const privateCall: number = CallCharacteristics_privateCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_personalCall
 * @description
 *
 * Sensitivity above `privateCall`. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_personalCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary personalCall
 * @constant
 */
export
const personalCall: number = CallCharacteristics_personalCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_sensitiveCall
 * @description
 *
 * Normal (third) sensitivity level. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_sensitiveCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary sensitiveCall
 * @constant
 */
export
const sensitiveCall: number = CallCharacteristics_sensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_confidentialCall
 * @description
 *
 * Highest sensitivity level. ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_confidentialCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary confidentialCall
 * @constant
 */
export
const confidentialCall: number = CallCharacteristics_confidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallCharacteristics_encryptedCall
 * @description
 *
 * Payload/media (and possibly signalling) is encrypted. The
 * mechanism (TLS, IPsec, SRTP, etc.) is implementation-specific.
 * ECMA-269 §12.2.4.
 *
 * @constant
 */
export
const CallCharacteristics_encryptedCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary encryptedCall
 * @constant
 */
export
const encryptedCall: number = CallCharacteristics_encryptedCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallCharacteristics: $.ASN1Decoder<CallCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallCharacteristics (el: _Element): CallCharacteristics {
    if (!_cached_decoder_for_CallCharacteristics) { _cached_decoder_for_CallCharacteristics = $._decodeBitString; }
    return _cached_decoder_for_CallCharacteristics(el);
}

let _cached_encoder_for_CallCharacteristics: $.ASN1Encoder<CallCharacteristics> | null = null;

/**
 * @summary Encodes a(n) CallCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_CallCharacteristics (value: CallCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallCharacteristics) { _cached_encoder_for_CallCharacteristics = $._encodeBitString; }
    return _cached_encoder_for_CallCharacteristics(value, elGetter);
}


/* eslint-enable */
