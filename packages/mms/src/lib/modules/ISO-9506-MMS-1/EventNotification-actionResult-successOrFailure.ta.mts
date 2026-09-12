/* eslint-disable */
import {
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
import { EventNotification_actionResult_successOrFailure_success, _decode_EventNotification_actionResult_successOrFailure_success, _encode_EventNotification_actionResult_successOrFailure_success } from "../ISO-9506-MMS-1/EventNotification-actionResult-successOrFailure-success.ta.mjs";
// export { EventNotification_actionResult_successOrFailure_success, _decode_EventNotification_actionResult_successOrFailure_success, _encode_EventNotification_actionResult_successOrFailure_success } from "../ISO-9506-MMS-1/EventNotification-actionResult-successOrFailure-success.ta.mjs";
import { EventNotification_actionResult_successOrFailure_failure, _decode_EventNotification_actionResult_successOrFailure_failure, _encode_EventNotification_actionResult_successOrFailure_failure } from "../ISO-9506-MMS-1/EventNotification-actionResult-successOrFailure-failure.ta.mjs";
// export { EventNotification_actionResult_successOrFailure_failure, _decode_EventNotification_actionResult_successOrFailure_failure, _encode_EventNotification_actionResult_successOrFailure_failure } from "../ISO-9506-MMS-1/EventNotification-actionResult-successOrFailure-failure.ta.mjs";


/**
 * @summary EventNotification_actionResult_successOrFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotification-actionResult-successOrFailure ::= CHOICE {
 *     success [0] IMPLICIT SEQUENCE {
 *         confirmedServiceResponse ConfirmedServiceResponse,
 *         cs-Response-Detail [79] Response-Detail OPTIONAL -- shall not be transmitted if value is the
 *         -- value of a tagged type derived from NULL
 *     },
 *     failure [1] IMPLICIT SEQUENCE {
 *         modifierPosition [0] IMPLICIT Unsigned32 OPTIONAL,
 *         serviceError [1] IMPLICIT ServiceError
 *     }
 * }
 * ```
 */
export
type EventNotification_actionResult_successOrFailure =
    { success: EventNotification_actionResult_successOrFailure_success } /* CHOICE_ALT_ROOT */
    | { failure: EventNotification_actionResult_successOrFailure_failure } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventNotification_actionResult_successOrFailure: $.ASN1Decoder<EventNotification_actionResult_successOrFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventNotification_actionResult_successOrFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventNotification_actionResult_successOrFailure (el: _Element): EventNotification_actionResult_successOrFailure {
    if (!_cached_decoder_for_EventNotification_actionResult_successOrFailure) { _cached_decoder_for_EventNotification_actionResult_successOrFailure = $._decode_inextensible_choice<EventNotification_actionResult_successOrFailure>({
    "CONTEXT 0": [ "success", $._decode_implicit<EventNotification_actionResult_successOrFailure_success>(() => _decode_EventNotification_actionResult_successOrFailure_success) ],
    "CONTEXT 1": [ "failure", $._decode_implicit<EventNotification_actionResult_successOrFailure_failure>(() => _decode_EventNotification_actionResult_successOrFailure_failure) ]
}); }
    return _cached_decoder_for_EventNotification_actionResult_successOrFailure(el);
}

let _cached_encoder_for_EventNotification_actionResult_successOrFailure: $.ASN1Encoder<EventNotification_actionResult_successOrFailure> | null = null;

/**
 * @summary Encodes a(n) EventNotification_actionResult_successOrFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventNotification_actionResult_successOrFailure, encoded as an ASN.1 Element.
 */
export
function _encode_EventNotification_actionResult_successOrFailure (value: EventNotification_actionResult_successOrFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventNotification_actionResult_successOrFailure) { _cached_encoder_for_EventNotification_actionResult_successOrFailure = $._encode_choice<EventNotification_actionResult_successOrFailure>({
    "success": $._encode_implicit(_TagClass.context, 0, () => _encode_EventNotification_actionResult_successOrFailure_success, $.BER),
    "failure": $._encode_implicit(_TagClass.context, 1, () => _encode_EventNotification_actionResult_successOrFailure_failure, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventNotification_actionResult_successOrFailure(value, elGetter);
}


/* eslint-enable */
