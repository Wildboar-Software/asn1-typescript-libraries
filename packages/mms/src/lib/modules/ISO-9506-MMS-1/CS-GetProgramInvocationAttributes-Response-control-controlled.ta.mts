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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary CS_GetProgramInvocationAttributes_Response_control_controlled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetProgramInvocationAttributes-Response-control-controlled ::= CHOICE {
 *     controllingPI [0] IMPLICIT Identifier,
 *     none [1] IMPLICIT NULL
 * }
 * ```
 */
export
type CS_GetProgramInvocationAttributes_Response_control_controlled =
    { controllingPI: Identifier } /* CHOICE_ALT_ROOT */
    | { none: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled: $.ASN1Decoder<CS_GetProgramInvocationAttributes_Response_control_controlled> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetProgramInvocationAttributes_Response_control_controlled
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetProgramInvocationAttributes_Response_control_controlled (el: _Element): CS_GetProgramInvocationAttributes_Response_control_controlled {
    if (!_cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled) { _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled = $._decode_inextensible_choice<CS_GetProgramInvocationAttributes_Response_control_controlled>({
    "CONTEXT 0": [ "controllingPI", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled(el);
}

let _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled: $.ASN1Encoder<CS_GetProgramInvocationAttributes_Response_control_controlled> | null = null;

/**
 * @summary Encodes a(n) CS_GetProgramInvocationAttributes_Response_control_controlled into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetProgramInvocationAttributes_Response_control_controlled, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetProgramInvocationAttributes_Response_control_controlled (value: CS_GetProgramInvocationAttributes_Response_control_controlled, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled) { _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled = $._encode_choice<CS_GetProgramInvocationAttributes_Response_control_controlled>({
    "controllingPI": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "none": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlled(value, elGetter);
}


/* eslint-enable */
