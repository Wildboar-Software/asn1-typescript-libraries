/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IconObject_Item_bodyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IconObject-Item-bodyType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IconObject_Item_bodyType =
    { ianaType: InternationalString } /* CHOICE_ALT_ROOT */
    | { z3950type: InternationalString } /* CHOICE_ALT_ROOT */
    | { otherType: InternationalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IconObject_Item_bodyType: $.ASN1Decoder<IconObject_Item_bodyType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IconObject_Item_bodyType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IconObject_Item_bodyType (el: _Element): IconObject_Item_bodyType {
    if (!_cached_decoder_for_IconObject_Item_bodyType) { _cached_decoder_for_IconObject_Item_bodyType = $._decode_inextensible_choice<IconObject_Item_bodyType>({
    "CONTEXT 1": [ "ianaType", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "z3950type", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 3": [ "otherType", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ]
}); }
    return _cached_decoder_for_IconObject_Item_bodyType(el);
}

let _cached_encoder_for_IconObject_Item_bodyType: $.ASN1Encoder<IconObject_Item_bodyType> | null = null;

/**
 * @summary Encodes a(n) IconObject_Item_bodyType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IconObject_Item_bodyType, encoded as an ASN.1 Element.
 */
export
function _encode_IconObject_Item_bodyType (value: IconObject_Item_bodyType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IconObject_Item_bodyType) { _cached_encoder_for_IconObject_Item_bodyType = $._encode_choice<IconObject_Item_bodyType>({
    "ianaType": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "z3950type": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
    "otherType": $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IconObject_Item_bodyType(value, elGetter);
}


/* eslint-enable */
