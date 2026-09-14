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
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
import {
    type InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";


/**
 * @summary AbandonArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonArgument  ::=  CHOICE {
 *     task-id     [0] TaskId,
 *     invoke-id   [1] InvokeId
 * }
 * ```
 */
export
type AbandonArgument =
    { task_id: TaskId } /* CHOICE_ALT_ROOT */
    | { invoke_id: InvokeId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AbandonArgument: $.ASN1Decoder<AbandonArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbandonArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbandonArgument (el: _Element): AbandonArgument {
    if (!_cached_decoder_for_AbandonArgument) { _cached_decoder_for_AbandonArgument = $._decode_inextensible_choice<AbandonArgument>({
    "CONTEXT 0": [ "task_id", $._decode_implicit<TaskId>(() => _decode_TaskId) ],
    "CONTEXT 1": [ "invoke_id", $._decode_implicit<InvokeId>(() => _decode_InvokeId) ]
}); }
    return _cached_decoder_for_AbandonArgument(el);
}

let _cached_encoder_for_AbandonArgument: $.ASN1Encoder<AbandonArgument> | null = null;

/**
 * @summary Encodes a(n) AbandonArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AbandonArgument (value: AbandonArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbandonArgument) { _cached_encoder_for_AbandonArgument = $._encode_choice<AbandonArgument>({
    "task_id": $._encode_implicit(_TagClass.context, 0, () => _encode_TaskId, $.BER),
    "invoke_id": $._encode_implicit(_TagClass.context, 1, () => _encode_InvokeId, $.BER),
}, $.BER); }
    return _cached_encoder_for_AbandonArgument(value, elGetter);
}


/* eslint-enable */
