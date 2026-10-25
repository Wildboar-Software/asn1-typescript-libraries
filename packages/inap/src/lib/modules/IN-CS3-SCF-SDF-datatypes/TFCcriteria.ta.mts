/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDFCriteria, _decode_SDFCriteria, _encode_SDFCriteria } from "../IN-CS3-SCF-SDF-datatypes/SDFCriteria.ta.mjs";
// export { SDFCriteria, _decode_SDFCriteria, _encode_SDFCriteria } from "../IN-CS3-SCF-SDF-datatypes/SDFCriteria.ta.mjs";
import { SCFCriteria, _decode_SCFCriteria, _encode_SCFCriteria } from "../IN-CS3-SCF-SDF-datatypes/SCFCriteria.ta.mjs";
// export { SCFCriteria, _decode_SCFCriteria, _encode_SCFCriteria } from "../IN-CS3-SCF-SDF-datatypes/SCFCriteria.ta.mjs";


/**
 * @summary TFCcriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCcriteria  ::=  CHOICE {
 *   sdf  [0] IMPLICIT SDFCriteria, -- used if initiating FE is an SDF
 *   scf  [1] IMPLICIT SCFCriteria, -- used if initiating FE is an SCF
 *   ...
 * }
 * ```
 */
export
type TFCcriteria =
    { sdf: SDFCriteria } /* CHOICE_ALT_ROOT */
    | { scf: SCFCriteria } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TFCcriteria: $.ASN1Decoder<TFCcriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TFCcriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TFCcriteria (el: _Element): TFCcriteria {
    if (!_cached_decoder_for_TFCcriteria) { _cached_decoder_for_TFCcriteria = $._decode_extensible_choice<TFCcriteria>({
    "CONTEXT 0": [ "sdf", $._decode_implicit<SDFCriteria>(() => _decode_SDFCriteria) ],
    "CONTEXT 1": [ "scf", $._decode_implicit<SCFCriteria>(() => _decode_SCFCriteria) ]
}); }
    return _cached_decoder_for_TFCcriteria(el);
}

let _cached_encoder_for_TFCcriteria: $.ASN1Encoder<TFCcriteria> | null = null;

/**
 * @summary Encodes a(n) TFCcriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCcriteria, encoded as an ASN.1 Element.
 */
export
function _encode_TFCcriteria (value: TFCcriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TFCcriteria) { _cached_encoder_for_TFCcriteria = $._encode_choice<TFCcriteria>({
    "sdf": $._encode_implicit(_TagClass.context, 0, () => _encode_SDFCriteria, $.BER),
    "scf": $._encode_implicit(_TagClass.context, 1, () => _encode_SCFCriteria, $.BER),
}, $.BER); }
    return _cached_encoder_for_TFCcriteria(value, elGetter);
}


/* eslint-enable */
