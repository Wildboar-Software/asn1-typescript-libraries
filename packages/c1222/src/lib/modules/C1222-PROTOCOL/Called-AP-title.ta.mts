/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    RELATIVE_OID
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Called_AP_title
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Called-AP-title  ::=  CHOICE {
 *     called-ap-title-abs OBJECT IDENTIFIER,
 *     called-ap-title-rel [0] IMPLICIT RELATIVE-OID
 * }
 * ```
 */
export
type Called_AP_title =
    { called_ap_title_abs: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { called_ap_title_rel: RELATIVE_OID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Called_AP_title: $.ASN1Decoder<Called_AP_title> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Called_AP_title
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Called_AP_title (el: _Element): Called_AP_title {
    if (!_cached_decoder_for_Called_AP_title) { _cached_decoder_for_Called_AP_title = $._decode_inextensible_choice<Called_AP_title>({
    "UNIVERSAL 6": [ "called_ap_title_abs", $._decodeObjectIdentifier ],
    "CONTEXT 0": [ "called_ap_title_rel", $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID) ]
}); }
    return _cached_decoder_for_Called_AP_title(el);
}

let _cached_encoder_for_Called_AP_title: $.ASN1Encoder<Called_AP_title> | null = null;

/**
 * @summary Encodes a(n) Called_AP_title into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Called_AP_title, encoded as an ASN.1 Element.
 */
export
function _encode_Called_AP_title (value: Called_AP_title, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Called_AP_title) { _cached_encoder_for_Called_AP_title = $._encode_choice<Called_AP_title>({
    "called_ap_title_abs": $._encodeObjectIdentifier,
    "called_ap_title_rel": $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER),
}, $.BER); }
    return _cached_encoder_for_Called_AP_title(value, elGetter);
}


/* eslint-enable */
