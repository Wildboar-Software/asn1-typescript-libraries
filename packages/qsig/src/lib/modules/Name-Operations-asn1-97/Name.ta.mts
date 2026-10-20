/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NamePresentationAllowed, _decode_NamePresentationAllowed, _encode_NamePresentationAllowed } from "../Name-Operations-asn1-97/NamePresentationAllowed.ta.mjs";
// export { NamePresentationAllowed, _decode_NamePresentationAllowed, _encode_NamePresentationAllowed } from "../Name-Operations-asn1-97/NamePresentationAllowed.ta.mjs";
import { NamePresentationRestricted, _decode_NamePresentationRestricted, _encode_NamePresentationRestricted } from "../Name-Operations-asn1-97/NamePresentationRestricted.ta.mjs";
// export { NamePresentationRestricted, _decode_NamePresentationRestricted, _encode_NamePresentationRestricted } from "../Name-Operations-asn1-97/NamePresentationRestricted.ta.mjs";
import { NameNotAvailable, _decode_NameNotAvailable, _encode_NameNotAvailable } from "../Name-Operations-asn1-97/NameNotAvailable.ta.mjs";
// export { NameNotAvailable, _decode_NameNotAvailable, _encode_NameNotAvailable } from "../Name-Operations-asn1-97/NameNotAvailable.ta.mjs";


/**
 * @summary Name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Name  ::=  CHOICE {
 *     namePresentationAllowed NamePresentationAllowed,
 *     namePresentationRestricted NamePresentationRestricted,
 *     nameNotAvailable NameNotAvailable
 * }
 * ```
 */
export
type Name =
    { namePresentationAllowed: NamePresentationAllowed } /* CHOICE_ALT_ROOT */
    | { namePresentationRestricted: NamePresentationRestricted } /* CHOICE_ALT_ROOT */
    | { nameNotAvailable: NameNotAvailable } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Name (el: _Element): Name {
    if (!_cached_decoder_for_Name) { _cached_decoder_for_Name = $._decode_inextensible_choice<Name>({
    "CONTEXT 0": [ "namePresentationAllowed", _decode_NamePresentationAllowed ],
    "CONTEXT 1": [ "namePresentationAllowed", _decode_NamePresentationAllowed ],
    "CONTEXT 2": [ "namePresentationRestricted", _decode_NamePresentationRestricted ],
    "CONTEXT 3": [ "namePresentationRestricted", _decode_NamePresentationRestricted ],
    "CONTEXT 7": [ "namePresentationRestricted", _decode_NamePresentationRestricted ],
    "CONTEXT 4": [ "nameNotAvailable", _decode_NameNotAvailable ]
}); }
    return _cached_decoder_for_Name(el);
}

let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;

/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export
function _encode_Name (value: Name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Name) { _cached_encoder_for_Name = $._encode_choice<Name>({
    "namePresentationAllowed": _encode_NamePresentationAllowed,
    "namePresentationRestricted": _encode_NamePresentationRestricted,
    "nameNotAvailable": $._encode_implicit(_TagClass.context, 4, () => _encode_NameNotAvailable, $.BER),
}, $.BER); }
    return _cached_encoder_for_Name(value, elGetter);
}


/* eslint-enable */
