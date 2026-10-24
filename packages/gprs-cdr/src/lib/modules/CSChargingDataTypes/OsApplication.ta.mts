/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Ae_title_form1, _decode_Ae_title_form1, _encode_Ae_title_form1 } from "../CSChargingDataTypes/Ae-title-form1.ta.mjs";


/**
 * @summary OsApplication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OsApplication  ::=  CHOICE {
 *    ae-title-form1     Ae-title-form1,
 *    ae-title-form2     OBJECT IDENTIFIER,
 *    ...}
 * ```
 */
export
type OsApplication =
    { ae_title_form1: Ae_title_form1 } /* CHOICE_ALT_ROOT */
    | { ae_title_form2: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_OsApplication: $.ASN1Decoder<OsApplication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsApplication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OsApplication (el: _Element): OsApplication {
    if (!_cached_decoder_for_OsApplication) { _cached_decoder_for_OsApplication = $._decode_extensible_choice<OsApplication>({
    "UNIVERSAL 16": [ "ae_title_form1", _decode_Ae_title_form1 ],
    "UNIVERSAL 6": [ "ae_title_form2", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_OsApplication(el);
}

let _cached_encoder_for_OsApplication: $.ASN1Encoder<OsApplication> | null = null;

/**
 * @summary Encodes a(n) OsApplication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsApplication, encoded as an ASN.1 Element.
 */
export
function _encode_OsApplication (value: OsApplication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OsApplication) { _cached_encoder_for_OsApplication = $._encode_choice<OsApplication>({
    "ae_title_form1": _encode_Ae_title_form1,
    "ae_title_form2": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_OsApplication(value, elGetter);
}


/* eslint-enable */
