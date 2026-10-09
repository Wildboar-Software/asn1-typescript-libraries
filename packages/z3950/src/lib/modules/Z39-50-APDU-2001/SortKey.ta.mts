/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Specification, _decode_Specification, _encode_Specification } from "../Z39-50-APDU-2001/Specification.ta.mjs";
import { SortKey_sortAttributes, _decode_SortKey_sortAttributes, _encode_SortKey_sortAttributes } from "../Z39-50-APDU-2001/SortKey-sortAttributes.ta.mjs";


/**
 * @summary SortKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKey  ::=  CHOICE {
 *     -- See comment 12
 *     privateSortKey  [0] IMPLICIT InternationalString,
 *     elementSpec     [1] IMPLICIT Specification,
 *     sortAttributes  [2] IMPLICIT SEQUENCE {
 *         id       AttributeSetId,
 *         list     AttributeList
 *     }
 * }
 * ```
 */
export
type SortKey =
    { privateSortKey: InternationalString } /* CHOICE_ALT_ROOT */
    | { elementSpec: Specification } /* CHOICE_ALT_ROOT */
    | { sortAttributes: SortKey_sortAttributes } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SortKey: $.ASN1Decoder<SortKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKey (el: _Element): SortKey {
    if (!_cached_decoder_for_SortKey) { _cached_decoder_for_SortKey = $._decode_inextensible_choice<SortKey>({
    "CONTEXT 0": [ "privateSortKey", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 1": [ "elementSpec", $._decode_implicit<Specification>(() => _decode_Specification) ],
    "CONTEXT 2": [ "sortAttributes", $._decode_implicit<SortKey_sortAttributes>(() => _decode_SortKey_sortAttributes) ]
}); }
    return _cached_decoder_for_SortKey(el);
}

let _cached_encoder_for_SortKey: $.ASN1Encoder<SortKey> | null = null;

/**
 * @summary Encodes a(n) SortKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKey, encoded as an ASN.1 Element.
 */
export
function _encode_SortKey (value: SortKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKey) { _cached_encoder_for_SortKey = $._encode_choice<SortKey>({
    "privateSortKey": $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER),
    "elementSpec": $._encode_implicit(_TagClass.context, 1, () => _encode_Specification, $.BER),
    "sortAttributes": $._encode_implicit(_TagClass.context, 2, () => _encode_SortKey_sortAttributes, $.BER),
}, $.BER); }
    return _cached_encoder_for_SortKey(value, elGetter);
}


/* eslint-enable */
