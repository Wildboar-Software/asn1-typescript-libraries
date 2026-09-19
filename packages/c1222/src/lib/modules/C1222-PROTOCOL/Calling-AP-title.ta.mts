/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    RELATIVE_OID
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Calling_AP_title
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-AP-title  ::=  CHOICE {
 *     calling-ap-title-abs OBJECT IDENTIFIER,
 *     calling-ap-title-rel [0] IMPLICIT RELATIVE-OID
 * }
 * ```
 */
export
type Calling_AP_title =
    { calling_ap_title_abs: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { calling_ap_title_rel: RELATIVE_OID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Calling_AP_title: $.ASN1Decoder<Calling_AP_title> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_AP_title
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_AP_title (el: _Element): Calling_AP_title {
    if (!_cached_decoder_for_Calling_AP_title) { _cached_decoder_for_Calling_AP_title = $._decode_inextensible_choice<Calling_AP_title>({
    "UNIVERSAL 6": [ "calling_ap_title_abs", $._decodeObjectIdentifier ],
    "CONTEXT 0": [ "calling_ap_title_rel", $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID) ]
}); }
    return _cached_decoder_for_Calling_AP_title(el);
}

let _cached_encoder_for_Calling_AP_title: $.ASN1Encoder<Calling_AP_title> | null = null;

/**
 * @summary Encodes a(n) Calling_AP_title into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_AP_title, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_AP_title (value: Calling_AP_title, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_AP_title) { _cached_encoder_for_Calling_AP_title = $._encode_choice<Calling_AP_title>({
    "calling_ap_title_abs": $._encodeObjectIdentifier,
    "calling_ap_title_rel": $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER),
}, $.BER); }
    return _cached_encoder_for_Calling_AP_title(value, elGetter);
}


/* eslint-enable */
