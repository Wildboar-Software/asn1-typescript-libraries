/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NameData, _decode_NameData, _encode_NameData } from "../Name-Operations-asn1-97/NameData.ta.mjs";
import { NameSet, _decode_NameSet, _encode_NameSet } from "../Name-Operations-asn1-97/NameSet.ta.mjs";

/**
 * @summary NamePresentationAllowed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamePresentationAllowed  ::=  CHOICE {
 *     namePresentationAllowedSimple [0] IMPLICIT NameData,
 *     namePresentationAllowedExtended [1] IMPLICIT NameSet
 * }
 * ```
 */
export
type NamePresentationAllowed =
    { namePresentationAllowedSimple: NameData } /* CHOICE_ALT_ROOT */
    | { namePresentationAllowedExtended: NameSet } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NamePresentationAllowed: $.ASN1Decoder<NamePresentationAllowed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamePresentationAllowed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamePresentationAllowed (el: _Element): NamePresentationAllowed {
    if (!_cached_decoder_for_NamePresentationAllowed) { _cached_decoder_for_NamePresentationAllowed = $._decode_inextensible_choice<NamePresentationAllowed>({
    "CONTEXT 0": [ "namePresentationAllowedSimple", $._decode_implicit<NameData>(() => _decode_NameData) ],
    "CONTEXT 1": [ "namePresentationAllowedExtended", $._decode_implicit<NameSet>(() => _decode_NameSet) ]
}); }
    return _cached_decoder_for_NamePresentationAllowed(el);
}

let _cached_encoder_for_NamePresentationAllowed: $.ASN1Encoder<NamePresentationAllowed> | null = null;

/**
 * @summary Encodes a(n) NamePresentationAllowed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamePresentationAllowed, encoded as an ASN.1 Element.
 */
export
function _encode_NamePresentationAllowed (value: NamePresentationAllowed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamePresentationAllowed) { _cached_encoder_for_NamePresentationAllowed = $._encode_choice<NamePresentationAllowed>({
    "namePresentationAllowedSimple": $._encode_implicit(_TagClass.context, 0, () => _encode_NameData, $.BER),
    "namePresentationAllowedExtended": $._encode_implicit(_TagClass.context, 1, () => _encode_NameSet, $.BER),
}, $.BER); }
    return _cached_encoder_for_NamePresentationAllowed(value, elGetter);
}

/* eslint-enable */
