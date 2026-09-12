/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EE_State, _decode_EE_State, _encode_EE_State } from "../ISO-9506-MMS-1/EE-State.ta.mjs";
// export { EE_State, EE_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_activeNoAckA /* IMPORTED_LONG_NAMED_INTEGER */, activeNoAckA /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleNoAckI /* IMPORTED_LONG_NAMED_INTEGER */, idleNoAckI /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleNoAckA /* IMPORTED_LONG_NAMED_INTEGER */, idleNoAckA /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_idleAcked /* IMPORTED_LONG_NAMED_INTEGER */, idleAcked /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_activeAcked /* IMPORTED_LONG_NAMED_INTEGER */, activeAcked /* IMPORTED_SHORT_NAMED_INTEGER */, EE_State_undefined /* IMPORTED_LONG_NAMED_INTEGER */, undefined /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_State, _encode_EE_State } from "../ISO-9506-MMS-1/EE-State.ta.mjs";


/**
 * @summary AlterEventEnrollment_Response_currentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterEventEnrollment-Response-currentState ::= CHOICE {
 *     state [0] IMPLICIT EE-State,
 *     undefined [1] IMPLICIT NULL
 * }
 * ```
 */
export
type AlterEventEnrollment_Response_currentState =
    { state: EE_State } /* CHOICE_ALT_ROOT */
    | { undefined: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlterEventEnrollment_Response_currentState: $.ASN1Decoder<AlterEventEnrollment_Response_currentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterEventEnrollment_Response_currentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterEventEnrollment_Response_currentState (el: _Element): AlterEventEnrollment_Response_currentState {
    if (!_cached_decoder_for_AlterEventEnrollment_Response_currentState) { _cached_decoder_for_AlterEventEnrollment_Response_currentState = $._decode_inextensible_choice<AlterEventEnrollment_Response_currentState>({
    "CONTEXT 0": [ "state", $._decode_implicit<EE_State>(() => _decode_EE_State) ],
    "CONTEXT 1": [ "undefined", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AlterEventEnrollment_Response_currentState(el);
}

let _cached_encoder_for_AlterEventEnrollment_Response_currentState: $.ASN1Encoder<AlterEventEnrollment_Response_currentState> | null = null;

/**
 * @summary Encodes a(n) AlterEventEnrollment_Response_currentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterEventEnrollment_Response_currentState, encoded as an ASN.1 Element.
 */
export
function _encode_AlterEventEnrollment_Response_currentState (value: AlterEventEnrollment_Response_currentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterEventEnrollment_Response_currentState) { _cached_encoder_for_AlterEventEnrollment_Response_currentState = $._encode_choice<AlterEventEnrollment_Response_currentState>({
    "state": $._encode_implicit(_TagClass.context, 0, () => _encode_EE_State, $.BER),
    "undefined": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlterEventEnrollment_Response_currentState(value, elGetter);
}


/* eslint-enable */
