/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AP_title_form1, _decode_AP_title_form1, _encode_AP_title_form1 } from "../XDLMS-1/AP-title-form1.ta.mjs";
// export { AP_title_form1, _decode_AP_title_form1, _encode_AP_title_form1 } from "../XDLMS-1/AP-title-form1.ta.mjs";
import { AP_title_form2, _decode_AP_title_form2, _encode_AP_title_form2 } from "../XDLMS-1/AP-title-form2.ta.mjs";
// export { AP_title_form2, _decode_AP_title_form2, _encode_AP_title_form2 } from "../XDLMS-1/AP-title-form2.ta.mjs";
import { AP_title_form3, _decode_AP_title_form3, _encode_AP_title_form3 } from "../XDLMS-1/AP-title-form3.ta.mjs";
// export { AP_title_form3, _decode_AP_title_form3, _encode_AP_title_form3 } from "../XDLMS-1/AP-title-form3.ta.mjs";


/**
 * @summary AP_title
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AP-title  ::=  CHOICE {
 *   ap-title-form1  AP-title-form1,
 *   ap-title-form2  AP-title-form2,
 *   ...,
 *   ap-title-form3  AP-title-form3
 * }
 * ```
 */
export
type AP_title =
    { ap_title_form1: AP_title_form1 } /* CHOICE_ALT_ROOT */
    | { ap_title_form2: AP_title_form2 } /* CHOICE_ALT_ROOT */
    | { ap_title_form3: AP_title_form3 } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AP_title: $.ASN1Decoder<AP_title> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AP_title
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AP_title (el: _Element): AP_title {
    if (!_cached_decoder_for_AP_title) { _cached_decoder_for_AP_title = $._decode_extensible_choice<AP_title>({
    "UNIVERSAL 16": [ "ap_title_form1", _decode_AP_title_form1 ],
    "UNIVERSAL 12": [ "ap_title_form1", _decode_AP_title_form1 ],
    "UNIVERSAL 6": [ "ap_title_form1", _decode_AP_title_form1 ],
    "UNIVERSAL 6": [ "ap_title_form2", _decode_AP_title_form2 ],
    "UNIVERSAL 19": [ "ap_title_form3", _decode_AP_title_form3 ]
}); }
    return _cached_decoder_for_AP_title(el);
}

let _cached_encoder_for_AP_title: $.ASN1Encoder<AP_title> | null = null;

/**
 * @summary Encodes a(n) AP_title into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title, encoded as an ASN.1 Element.
 */
export
function _encode_AP_title (value: AP_title, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AP_title) { _cached_encoder_for_AP_title = $._encode_choice<AP_title>({
    "ap_title_form1": _encode_AP_title_form1,
    "ap_title_form2": _encode_AP_title_form2,
    "ap_title_form3": _encode_AP_title_form3,
}, $.BER); }
    return _cached_encoder_for_AP_title(value, elGetter);
}


/* eslint-enable */
