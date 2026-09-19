/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocalName, _decode_LocalName, _encode_LocalName } from "../InformationFramework/LocalName.ta.mjs";
// export { LocalName, _decode_LocalName, _encode_LocalName } from "../InformationFramework/LocalName.ta.mjs";


/**
 * @summary ChopSpecification_specificExclusions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChopSpecification-specificExclusions-Item  ::=  CHOICE {
 *     chopBefore  [0]  LocalName,
 *     chopAfter   [1]  LocalName,
 *     ...}
 * ```
 */
export
type ChopSpecification_specificExclusions_Item =
    { chopBefore: LocalName } /* CHOICE_ALT_ROOT */
    | { chopAfter: LocalName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Decoder<ChopSpecification_specificExclusions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChopSpecification_specificExclusions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChopSpecification_specificExclusions_Item (el: _Element): ChopSpecification_specificExclusions_Item {
    if (!_cached_decoder_for_ChopSpecification_specificExclusions_Item) { _cached_decoder_for_ChopSpecification_specificExclusions_Item = $._decode_extensible_choice<ChopSpecification_specificExclusions_Item>({
    "CONTEXT 0": [ "chopBefore", $._decode_implicit<LocalName>(() => _decode_LocalName) ],
    "CONTEXT 1": [ "chopAfter", $._decode_implicit<LocalName>(() => _decode_LocalName) ]
}); }
    return _cached_decoder_for_ChopSpecification_specificExclusions_Item(el);
}

let _cached_encoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Encoder<ChopSpecification_specificExclusions_Item> | null = null;

/**
 * @summary Encodes a(n) ChopSpecification_specificExclusions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChopSpecification_specificExclusions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ChopSpecification_specificExclusions_Item (value: ChopSpecification_specificExclusions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChopSpecification_specificExclusions_Item) { _cached_encoder_for_ChopSpecification_specificExclusions_Item = $._encode_choice<ChopSpecification_specificExclusions_Item>({
    "chopBefore": $._encode_implicit(_TagClass.context, 0, () => _encode_LocalName, $.BER),
    "chopAfter": $._encode_implicit(_TagClass.context, 1, () => _encode_LocalName, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChopSpecification_specificExclusions_Item(value, elGetter);
}


/* eslint-enable */
