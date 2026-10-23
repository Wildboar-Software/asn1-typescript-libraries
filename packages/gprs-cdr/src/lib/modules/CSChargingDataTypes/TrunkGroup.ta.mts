/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrunkGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrunkGroup  ::=  CHOICE {
 *    tkgpNumber     [0] IMPLICIT INTEGER,
 *    tkgpName       [1] IMPLICIT GraphicString}
 * ```
 */
export
type TrunkGroup =
    { tkgpNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { tkgpName: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TrunkGroup: $.ASN1Decoder<TrunkGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrunkGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TrunkGroup (el: _Element): TrunkGroup {
    if (!_cached_decoder_for_TrunkGroup) { _cached_decoder_for_TrunkGroup = $._decode_inextensible_choice<TrunkGroup>({
    "CONTEXT 0": [ "tkgpNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "tkgpName", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ]
}); }
    return _cached_decoder_for_TrunkGroup(el);
}

let _cached_encoder_for_TrunkGroup: $.ASN1Encoder<TrunkGroup> | null = null;

/**
 * @summary Encodes a(n) TrunkGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrunkGroup, encoded as an ASN.1 Element.
 */
export
function _encode_TrunkGroup (value: TrunkGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TrunkGroup) { _cached_encoder_for_TrunkGroup = $._encode_choice<TrunkGroup>({
    "tkgpNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "tkgpName": $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER),
}, $.BER); }
    return _cached_encoder_for_TrunkGroup(value, elGetter);
}


/* eslint-enable */
