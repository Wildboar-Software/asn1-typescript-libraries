/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CriteriaItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriteriaItem  ::=  CHOICE {
 *   equality          [0]  AttributeType,
 *   substrings        [1]  AttributeType,
 *   greaterOrEqual    [2]  AttributeType,
 *   lessOrEqual       [3]  AttributeType,
 *   approximateMatch  [4]  AttributeType,
 *   ... }
 * ```
 */
export
type CriteriaItem =
    { equality: AttributeType } /* CHOICE_ALT_ROOT */
    | { substrings: AttributeType } /* CHOICE_ALT_ROOT */
    | { greaterOrEqual: AttributeType } /* CHOICE_ALT_ROOT */
    | { lessOrEqual: AttributeType } /* CHOICE_ALT_ROOT */
    | { approximateMatch: AttributeType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CriteriaItem: $.ASN1Decoder<CriteriaItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CriteriaItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CriteriaItem (el: _Element): CriteriaItem {
    if (!_cached_decoder_for_CriteriaItem) { _cached_decoder_for_CriteriaItem = $._decode_extensible_choice<CriteriaItem>({
    "CONTEXT 0": [ "equality", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 1": [ "substrings", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 2": [ "greaterOrEqual", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 3": [ "lessOrEqual", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 4": [ "approximateMatch", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ]
}); }
    return _cached_decoder_for_CriteriaItem(el);
}

let _cached_encoder_for_CriteriaItem: $.ASN1Encoder<CriteriaItem> | null = null;

/**
 * @summary Encodes a(n) CriteriaItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CriteriaItem, encoded as an ASN.1 Element.
 */
export
function _encode_CriteriaItem (value: CriteriaItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CriteriaItem) { _cached_encoder_for_CriteriaItem = $._encode_choice<CriteriaItem>({
    "equality": $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeType, $.BER),
    "substrings": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeType, $.BER),
    "greaterOrEqual": $._encode_implicit(_TagClass.context, 2, () => _encode_AttributeType, $.BER),
    "lessOrEqual": $._encode_implicit(_TagClass.context, 3, () => _encode_AttributeType, $.BER),
    "approximateMatch": $._encode_implicit(_TagClass.context, 4, () => _encode_AttributeType, $.BER),
}, $.BER); }
    return _cached_encoder_for_CriteriaItem(value, elGetter);
}


/* eslint-enable */
