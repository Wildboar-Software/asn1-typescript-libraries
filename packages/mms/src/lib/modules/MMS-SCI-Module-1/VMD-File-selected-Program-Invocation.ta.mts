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
import { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
// export { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";


/**
 * @summary VMD_File_selected_Program_Invocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMD-File-selected-Program-Invocation ::= CHOICE {
 *     selectedProgram [26] IMPLICIT Program-Invocation-instance,
 *     noneSelected [27] IMPLICIT NULL
 * }
 * ```
 */
export
type VMD_File_selected_Program_Invocation =
    { selectedProgram: Program_Invocation_instance } /* CHOICE_ALT_ROOT */
    | { noneSelected: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VMD_File_selected_Program_Invocation: $.ASN1Decoder<VMD_File_selected_Program_Invocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VMD_File_selected_Program_Invocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VMD_File_selected_Program_Invocation (el: _Element): VMD_File_selected_Program_Invocation {
    if (!_cached_decoder_for_VMD_File_selected_Program_Invocation) { _cached_decoder_for_VMD_File_selected_Program_Invocation = $._decode_inextensible_choice<VMD_File_selected_Program_Invocation>({
    "CONTEXT 26": [ "selectedProgram", $._decode_implicit<Program_Invocation_instance>(() => _decode_Program_Invocation_instance) ],
    "CONTEXT 27": [ "noneSelected", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_VMD_File_selected_Program_Invocation(el);
}

let _cached_encoder_for_VMD_File_selected_Program_Invocation: $.ASN1Encoder<VMD_File_selected_Program_Invocation> | null = null;

/**
 * @summary Encodes a(n) VMD_File_selected_Program_Invocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VMD_File_selected_Program_Invocation, encoded as an ASN.1 Element.
 */
export
function _encode_VMD_File_selected_Program_Invocation (value: VMD_File_selected_Program_Invocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VMD_File_selected_Program_Invocation) { _cached_encoder_for_VMD_File_selected_Program_Invocation = $._encode_choice<VMD_File_selected_Program_Invocation>({
    "selectedProgram": $._encode_implicit(_TagClass.context, 26, () => _encode_Program_Invocation_instance, $.BER),
    "noneSelected": $._encode_implicit(_TagClass.context, 27, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_VMD_File_selected_Program_Invocation(value, elGetter);
}


/* eslint-enable */
