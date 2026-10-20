/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NameData, _decode_NameData, _encode_NameData } from "../Name-Operations-asn1-97/NameData.ta.mjs";
// export { NameData, _decode_NameData, _encode_NameData } from "../Name-Operations-asn1-97/NameData.ta.mjs";
import { NameSet, _decode_NameSet, _encode_NameSet } from "../Name-Operations-asn1-97/NameSet.ta.mjs";
// export { NameSet, _decode_NameSet, _encode_NameSet } from "../Name-Operations-asn1-97/NameSet.ta.mjs";


/**
 * @summary NamePresentationRestricted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamePresentationRestricted  ::=  CHOICE {
 *     namePresentationRestrictedSimple [2] IMPLICIT NameData,
 *     namePresentationRestrictedExtended [3] IMPLICIT NameSet,
 *     namePresentationRestrictedNull [7] IMPLICIT NULL
 * }
 * ```
 */
export
type NamePresentationRestricted =
    { namePresentationRestrictedSimple: NameData } /* CHOICE_ALT_ROOT */
    | { namePresentationRestrictedExtended: NameSet } /* CHOICE_ALT_ROOT */
    | { namePresentationRestrictedNull: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NamePresentationRestricted: $.ASN1Decoder<NamePresentationRestricted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamePresentationRestricted
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamePresentationRestricted (el: _Element): NamePresentationRestricted {
    if (!_cached_decoder_for_NamePresentationRestricted) { _cached_decoder_for_NamePresentationRestricted = $._decode_inextensible_choice<NamePresentationRestricted>({
    "CONTEXT 2": [ "namePresentationRestrictedSimple", $._decode_implicit<NameData>(() => _decode_NameData) ],
    "CONTEXT 3": [ "namePresentationRestrictedExtended", $._decode_implicit<NameSet>(() => _decode_NameSet) ],
    "CONTEXT 7": [ "namePresentationRestrictedNull", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_NamePresentationRestricted(el);
}

let _cached_encoder_for_NamePresentationRestricted: $.ASN1Encoder<NamePresentationRestricted> | null = null;

/**
 * @summary Encodes a(n) NamePresentationRestricted into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamePresentationRestricted, encoded as an ASN.1 Element.
 */
export
function _encode_NamePresentationRestricted (value: NamePresentationRestricted, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamePresentationRestricted) { _cached_encoder_for_NamePresentationRestricted = $._encode_choice<NamePresentationRestricted>({
    "namePresentationRestrictedSimple": $._encode_implicit(_TagClass.context, 2, () => _encode_NameData, $.BER),
    "namePresentationRestrictedExtended": $._encode_implicit(_TagClass.context, 3, () => _encode_NameSet, $.BER),
    "namePresentationRestrictedNull": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_NamePresentationRestricted(value, elGetter);
}


/* eslint-enable */
