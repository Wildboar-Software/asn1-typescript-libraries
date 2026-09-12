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
import { CS_GetProgramInvocationAttributes_Response_control_controlling, _decode_CS_GetProgramInvocationAttributes_Response_control_controlling, _encode_CS_GetProgramInvocationAttributes_Response_control_controlling } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control-controlling.ta.mjs";
// export { CS_GetProgramInvocationAttributes_Response_control_controlling, _decode_CS_GetProgramInvocationAttributes_Response_control_controlling, _encode_CS_GetProgramInvocationAttributes_Response_control_controlling } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control-controlling.ta.mjs";
import { CS_GetProgramInvocationAttributes_Response_control_controlled, _decode_CS_GetProgramInvocationAttributes_Response_control_controlled, _encode_CS_GetProgramInvocationAttributes_Response_control_controlled } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control-controlled.ta.mjs";
// export { CS_GetProgramInvocationAttributes_Response_control_controlled, _decode_CS_GetProgramInvocationAttributes_Response_control_controlled, _encode_CS_GetProgramInvocationAttributes_Response_control_controlled } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control-controlled.ta.mjs";


/**
 * @summary CS_GetProgramInvocationAttributes_Response_control
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetProgramInvocationAttributes-Response-control ::= CHOICE {
 *     controlling [0] IMPLICIT SEQUENCE {
 *         controlledPI [0] IMPLICIT SEQUENCE OF Identifier,
 *         programLocation [1] IMPLICIT VisibleString OPTIONAL,
 *         runningMode [2] CHOICE {
 *             freeRunning [0] IMPLICIT NULL,
 *             cycleLimited [1] IMPLICIT INTEGER,
 *             stepLimited [2] IMPLICIT INTEGER
 *         }
 *     },
 *     controlled [1] CHOICE {
 *         controllingPI [0] IMPLICIT Identifier,
 *         none [1] IMPLICIT NULL
 *     },
 *     normal [2] IMPLICIT NULL
 * }
 * ```
 */
export
type CS_GetProgramInvocationAttributes_Response_control =
    { controlling: CS_GetProgramInvocationAttributes_Response_control_controlling } /* CHOICE_ALT_ROOT */
    | { controlled: CS_GetProgramInvocationAttributes_Response_control_controlled } /* CHOICE_ALT_ROOT */
    | { normal: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control: $.ASN1Decoder<CS_GetProgramInvocationAttributes_Response_control> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetProgramInvocationAttributes_Response_control
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetProgramInvocationAttributes_Response_control (el: _Element): CS_GetProgramInvocationAttributes_Response_control {
    if (!_cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control) { _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control = $._decode_inextensible_choice<CS_GetProgramInvocationAttributes_Response_control>({
    "CONTEXT 0": [ "controlling", $._decode_implicit<CS_GetProgramInvocationAttributes_Response_control_controlling>(() => _decode_CS_GetProgramInvocationAttributes_Response_control_controlling) ],
    "CONTEXT 1": [ "controlled", $._decode_explicit<CS_GetProgramInvocationAttributes_Response_control_controlled>(() => _decode_CS_GetProgramInvocationAttributes_Response_control_controlled) ],
    "CONTEXT 2": [ "normal", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control(el);
}

let _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control: $.ASN1Encoder<CS_GetProgramInvocationAttributes_Response_control> | null = null;

/**
 * @summary Encodes a(n) CS_GetProgramInvocationAttributes_Response_control into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetProgramInvocationAttributes_Response_control, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetProgramInvocationAttributes_Response_control (value: CS_GetProgramInvocationAttributes_Response_control, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control) { _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control = $._encode_choice<CS_GetProgramInvocationAttributes_Response_control>({
    "controlling": $._encode_implicit(_TagClass.context, 0, () => _encode_CS_GetProgramInvocationAttributes_Response_control_controlling, $.BER),
    "controlled": $._encode_explicit(_TagClass.context, 1, () => _encode_CS_GetProgramInvocationAttributes_Response_control_controlled, $.BER),
    "normal": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control(value, elGetter);
}


/* eslint-enable */
