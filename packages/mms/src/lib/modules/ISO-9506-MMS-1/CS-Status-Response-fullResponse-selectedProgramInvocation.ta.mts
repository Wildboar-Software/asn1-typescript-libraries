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
 * @summary CS_Status_Response_fullResponse_selectedProgramInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Status-Response-fullResponse-selectedProgramInvocation ::= CHOICE {
 *     programInvocation [3] IMPLICIT Identifier,
 *     noneSelected [4] IMPLICIT NULL
 * }
 * ```
 */
export
type CS_Status_Response_fullResponse_selectedProgramInvocation =
    { programInvocation: Identifier } /* CHOICE_ALT_ROOT */
    | { noneSelected: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation: $.ASN1Decoder<CS_Status_Response_fullResponse_selectedProgramInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Status_Response_fullResponse_selectedProgramInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Status_Response_fullResponse_selectedProgramInvocation (el: _Element): CS_Status_Response_fullResponse_selectedProgramInvocation {
    if (!_cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation) { _cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation = $._decode_inextensible_choice<CS_Status_Response_fullResponse_selectedProgramInvocation>({
    "CONTEXT 3": [ "programInvocation", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 4": [ "noneSelected", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation(el);
}

let _cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation: $.ASN1Encoder<CS_Status_Response_fullResponse_selectedProgramInvocation> | null = null;

/**
 * @summary Encodes a(n) CS_Status_Response_fullResponse_selectedProgramInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Status_Response_fullResponse_selectedProgramInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Status_Response_fullResponse_selectedProgramInvocation (value: CS_Status_Response_fullResponse_selectedProgramInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation) { _cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation = $._encode_choice<CS_Status_Response_fullResponse_selectedProgramInvocation>({
    "programInvocation": $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER),
    "noneSelected": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation(value, elGetter);
}


/* eslint-enable */
