/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ComplexSBIR, _decode_ComplexSBIR, _encode_ComplexSBIR } from "../SELF-IDENTIFYING-TAG-ORIENTED-COMPLEX-BIR-PATRON-FORMAT/ComplexSBIR.ta.mjs";
import { SBIR, _decode_SBIR, _encode_SBIR } from "../SELF-IDENTIFYING-TAG-ORIENTED-SIMPLE-BIR-PATRON-FORMAT/SBIR.ta.mjs";


/**
 * @summary PadSBIR_padBir_childBir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PadSBIR-padBir-childBir ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PadSBIR_padBir_childBir =
    { simpleBIR: SBIR } /* CHOICE_ALT_ROOT */
    | { complexBIR: ComplexSBIR } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PadSBIR_padBir_childBir: $.ASN1Decoder<PadSBIR_padBir_childBir> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PadSBIR_padBir_childBir
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PadSBIR_padBir_childBir (el: _Element): PadSBIR_padBir_childBir {
    if (!_cached_decoder_for_PadSBIR_padBir_childBir) { _cached_decoder_for_PadSBIR_padBir_childBir = $._decode_inextensible_choice<PadSBIR_padBir_childBir>({
    "APPLICATION 96": [ "simpleBIR", $._decode_implicit<SBIR>(() => _decode_SBIR) ],
    "APPLICATION 97": [ "complexBIR", $._decode_implicit<ComplexSBIR>(() => _decode_ComplexSBIR) ]
}); }
    return _cached_decoder_for_PadSBIR_padBir_childBir(el);
}

let _cached_encoder_for_PadSBIR_padBir_childBir: $.ASN1Encoder<PadSBIR_padBir_childBir> | null = null;

/**
 * @summary Encodes a(n) PadSBIR_padBir_childBir into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PadSBIR_padBir_childBir, encoded as an ASN.1 Element.
 */
export
function _encode_PadSBIR_padBir_childBir (value: PadSBIR_padBir_childBir, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PadSBIR_padBir_childBir) { _cached_encoder_for_PadSBIR_padBir_childBir = $._encode_choice<PadSBIR_padBir_childBir>({
    "simpleBIR": $._encode_implicit(_TagClass.application, 96, () => _encode_SBIR, $.BER),
    "complexBIR": $._encode_implicit(_TagClass.application, 97, () => _encode_ComplexSBIR, $.BER),
}, $.BER); }
    return _cached_encoder_for_PadSBIR_padBir_childBir(value, elGetter);
}


/* eslint-enable */
