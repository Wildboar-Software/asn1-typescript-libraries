/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QuintupletList, _decode_QuintupletList, _encode_QuintupletList } from "../MAP-MS-DataTypes/QuintupletList.ta.mjs";
import { TripletList, _decode_TripletList, _encode_TripletList } from "../MAP-MS-DataTypes/TripletList.ta.mjs";


/**
 * @summary AuthenticationSetList
 * @description
 *
 * List of authentication parameter sets for a subscriber: either Authentication
 * Triplets (Rand, Sres, Kc) or Authentication Quintuplets (Rand, Xres, Ck, Ik,
 * Autn). Quintuplet lists are chronological, oldest first (3GPP TS 29.002
 * V19.1.0 clause 7.6.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationSetList  ::=  CHOICE {
 *     tripletList    [0] TripletList,
 *     quintupletList    [1] QuintupletList }
 * ```
 */
export
type AuthenticationSetList =
    { tripletList: TripletList } /* CHOICE_ALT_ROOT */
    | { quintupletList: QuintupletList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticationSetList: $.ASN1Decoder<AuthenticationSetList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationSetList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationSetList (el: _Element): AuthenticationSetList {
    if (!_cached_decoder_for_AuthenticationSetList) { _cached_decoder_for_AuthenticationSetList = $._decode_inextensible_choice<AuthenticationSetList>({
    "CONTEXT 0": [ "tripletList", $._decode_implicit<TripletList>(() => _decode_TripletList) ],
    "CONTEXT 1": [ "quintupletList", $._decode_implicit<QuintupletList>(() => _decode_QuintupletList) ]
}); }
    return _cached_decoder_for_AuthenticationSetList(el);
}

let _cached_encoder_for_AuthenticationSetList: $.ASN1Encoder<AuthenticationSetList> | null = null;

/**
 * @summary Encodes a(n) AuthenticationSetList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationSetList, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationSetList (value: AuthenticationSetList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationSetList) { _cached_encoder_for_AuthenticationSetList = $._encode_choice<AuthenticationSetList>({
    "tripletList": $._encode_implicit(_TagClass.context, 0, () => _encode_TripletList, $.BER),
    "quintupletList": $._encode_implicit(_TagClass.context, 1, () => _encode_QuintupletList, $.BER),
}, $.BER); }
    return _cached_encoder_for_AuthenticationSetList(value, elGetter);
}


/* eslint-enable */
