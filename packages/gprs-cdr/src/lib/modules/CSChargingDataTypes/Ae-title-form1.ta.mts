/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Pcs_Extensions, _decode_Pcs_Extensions, _encode_Pcs_Extensions } from "../CSChargingDataTypes/Pcs-Extensions.ta.mjs";


/**
 * @summary Ae_title_form1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ae-title-form1  ::=  CHOICE {
 *    rdnSequence     SEQUENCE  OF
 *       SET  OF
 *          Pcs-Extensions}
 * ```
 */
export
type Ae_title_form1 =
    { rdnSequence: Pcs_Extensions[][] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Ae_title_form1: $.ASN1Decoder<Ae_title_form1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ae_title_form1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ae_title_form1 (el: _Element): Ae_title_form1 {
    if (!_cached_decoder_for_Ae_title_form1) { _cached_decoder_for_Ae_title_form1 = $._decode_inextensible_choice<Ae_title_form1>({
    "UNIVERSAL 16": [ "rdnSequence", $._decodeSequenceOf<Pcs_Extensions[]>(() => $._decodeSetOf<Pcs_Extensions>(() => _decode_Pcs_Extensions)) ]
}); }
    return _cached_decoder_for_Ae_title_form1(el);
}

let _cached_encoder_for_Ae_title_form1: $.ASN1Encoder<Ae_title_form1> | null = null;

/**
 * @summary Encodes a(n) Ae_title_form1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ae_title_form1, encoded as an ASN.1 Element.
 */
export
function _encode_Ae_title_form1 (value: Ae_title_form1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ae_title_form1) { _cached_encoder_for_Ae_title_form1 = $._encode_choice<Ae_title_form1>({
    "rdnSequence": $._encodeSequenceOf<Pcs_Extensions[]>(() => $._encodeSetOf<Pcs_Extensions>(() => _encode_Pcs_Extensions, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_Ae_title_form1(value, elGetter);
}


/* eslint-enable */
