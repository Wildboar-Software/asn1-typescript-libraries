/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Relation, _encode_Relation, Relation } from "../MEDIA-GATEWAY-CONTROL/Relation.ta.mjs";
// export { Relation, _enum_for_Relation, Relation_greaterThan /* IMPORTED_LONG_ENUMERATION_ITEM */, greaterThan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Relation_smallerThan /* IMPORTED_LONG_ENUMERATION_ITEM */, smallerThan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Relation_unequalTo /* IMPORTED_LONG_ENUMERATION_ITEM */, unequalTo /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Relation, _encode_Relation } from "../MEDIA-GATEWAY-CONTROL/Relation.ta.mjs";


/**
 * @summary PropertyParm_extraInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PropertyParm-extraInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PropertyParm_extraInfo =
    { relation: Relation } /* CHOICE_ALT_ROOT */
    | { range: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { sublist: BOOLEAN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PropertyParm_extraInfo: $.ASN1Decoder<PropertyParm_extraInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PropertyParm_extraInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PropertyParm_extraInfo (el: _Element): PropertyParm_extraInfo {
    if (!_cached_decoder_for_PropertyParm_extraInfo) { _cached_decoder_for_PropertyParm_extraInfo = $._decode_inextensible_choice<PropertyParm_extraInfo>({
    "CONTEXT 0": [ "relation", $._decode_implicit<Relation>(() => _decode_Relation) ],
    "CONTEXT 1": [ "range", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 2": [ "sublist", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ]
}); }
    return _cached_decoder_for_PropertyParm_extraInfo(el);
}

let _cached_encoder_for_PropertyParm_extraInfo: $.ASN1Encoder<PropertyParm_extraInfo> | null = null;

/**
 * @summary Encodes a(n) PropertyParm_extraInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyParm_extraInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PropertyParm_extraInfo (value: PropertyParm_extraInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PropertyParm_extraInfo) { _cached_encoder_for_PropertyParm_extraInfo = $._encode_choice<PropertyParm_extraInfo>({
    "relation": $._encode_implicit(_TagClass.context, 0, () => _encode_Relation, $.BER),
    "range": $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER),
    "sublist": $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER),
}, $.BER); }
    return _cached_encoder_for_PropertyParm_extraInfo(value, elGetter);
}


/* eslint-enable */
