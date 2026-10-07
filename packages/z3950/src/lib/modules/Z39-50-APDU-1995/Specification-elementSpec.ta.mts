/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "./InternationalString.ta.mjs";


/**
 * @summary Specification_elementSpec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Specification-elementSpec ::= CHOICE {
 *     elementSetName   [1] IMPLICIT InternationalString,
 *     externalEspec    [2] IMPLICIT EXTERNAL
 * }
 * ```
 */
export
type Specification_elementSpec =
    { elementSetName: InternationalString } /* CHOICE_ALT_ROOT */
    | { externalEspec: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Specification_elementSpec: $.ASN1Decoder<Specification_elementSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Specification_elementSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Specification_elementSpec (el: _Element): Specification_elementSpec {
    if (!_cached_decoder_for_Specification_elementSpec) { _cached_decoder_for_Specification_elementSpec = $._decode_inextensible_choice<Specification_elementSpec>({
    "CONTEXT 1": [ "elementSetName", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "externalEspec", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ]
}); }
    return _cached_decoder_for_Specification_elementSpec(el);
}

let _cached_encoder_for_Specification_elementSpec: $.ASN1Encoder<Specification_elementSpec> | null = null;

/**
 * @summary Encodes a(n) Specification_elementSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Specification_elementSpec, encoded as an ASN.1 Element.
 */
export
function _encode_Specification_elementSpec (value: Specification_elementSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Specification_elementSpec) { _cached_encoder_for_Specification_elementSpec = $._encode_choice<Specification_elementSpec>({
    "elementSetName": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "externalEspec": $._encode_implicit(_TagClass.context, 2, () => $._encodeExternal, $.BER),
}, $.BER); }
    return _cached_encoder_for_Specification_elementSpec(value, elGetter);
}

/* eslint-enable */
