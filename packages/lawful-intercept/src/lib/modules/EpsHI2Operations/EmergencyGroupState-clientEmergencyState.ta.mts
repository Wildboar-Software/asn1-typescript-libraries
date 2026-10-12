/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EmergencyGroupState_clientEmergencyState {
    inform = 1,
    response = 2,
    cancelInform = 3,
    cancelResponse = 4,
}

/**
 * @summary EmergencyGroupState_clientEmergencyState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyGroupState-clientEmergencyState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type EmergencyGroupState_clientEmergencyState = _enum_for_EmergencyGroupState_clientEmergencyState | ENUMERATED;

/**
 * @summary EmergencyGroupState_clientEmergencyState_inform
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_inform: EmergencyGroupState_clientEmergencyState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inform
 * @constant
 * @type {number}
 */
export
const inform: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_inform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_response
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_response: EmergencyGroupState_clientEmergencyState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary response
 * @constant
 * @type {number}
 */
export
const response: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_cancelInform
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_cancelInform: EmergencyGroupState_clientEmergencyState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @constant
 * @type {number}
 */
export
const cancelInform: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_cancelResponse
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_cancelResponse: EmergencyGroupState_clientEmergencyState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @constant
 * @type {number}
 */
export
const cancelResponse: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EmergencyGroupState_clientEmergencyState: $.ASN1Decoder<EmergencyGroupState_clientEmergencyState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmergencyGroupState_clientEmergencyState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmergencyGroupState_clientEmergencyState (el: _Element): EmergencyGroupState_clientEmergencyState {
    if (!_cached_decoder_for_EmergencyGroupState_clientEmergencyState) { _cached_decoder_for_EmergencyGroupState_clientEmergencyState = $._decodeEnumerated; }
    return _cached_decoder_for_EmergencyGroupState_clientEmergencyState(el);
}

let _cached_encoder_for_EmergencyGroupState_clientEmergencyState: $.ASN1Encoder<EmergencyGroupState_clientEmergencyState> | null = null;

/**
 * @summary Encodes a(n) EmergencyGroupState_clientEmergencyState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmergencyGroupState_clientEmergencyState, encoded as an ASN.1 Element.
 */
export
function _encode_EmergencyGroupState_clientEmergencyState (value: EmergencyGroupState_clientEmergencyState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmergencyGroupState_clientEmergencyState) { _cached_encoder_for_EmergencyGroupState_clientEmergencyState = $._encodeEnumerated; }
    return _cached_encoder_for_EmergencyGroupState_clientEmergencyState(value, elGetter);
}


/* eslint-enable */
