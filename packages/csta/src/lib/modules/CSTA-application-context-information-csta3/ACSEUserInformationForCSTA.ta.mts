/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { OldACSEUserInformationForCSTA, _decode_OldACSEUserInformationForCSTA, _encode_OldACSEUserInformationForCSTA } from "../CSTA-application-context-information-csta3/OldACSEUserInformationForCSTA.ta.mjs";

import { NewACSEUserInformationForCSTA, _decode_NewACSEUserInformationForCSTA, _encode_NewACSEUserInformationForCSTA } from "../CSTA-application-context-information-csta3/NewACSEUserInformationForCSTA.ta.mjs";



/**
 * @summary ACSEUserInformationForCSTA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACSEUserInformationForCSTA  ::=  CHOICE
 * {    oldDefinition                 OldACSEUserInformationForCSTA,
 *     newDefinition         [0] IMPLICIT    NewACSEUserInformationForCSTA }
 * ```
 */
export
type ACSEUserInformationForCSTA =
    { oldDefinition: OldACSEUserInformationForCSTA } /* CHOICE_ALT_ROOT */
    | { newDefinition: NewACSEUserInformationForCSTA } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ACSEUserInformationForCSTA: $.ASN1Decoder<ACSEUserInformationForCSTA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACSEUserInformationForCSTA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACSEUserInformationForCSTA (el: _Element): ACSEUserInformationForCSTA {
    if (!_cached_decoder_for_ACSEUserInformationForCSTA) { _cached_decoder_for_ACSEUserInformationForCSTA = $._decode_inextensible_choice<ACSEUserInformationForCSTA>({
    "UNIVERSAL 16": [ "oldDefinition", _decode_OldACSEUserInformationForCSTA ],
    "CONTEXT 0": [ "newDefinition", $._decode_implicit<NewACSEUserInformationForCSTA>(() => _decode_NewACSEUserInformationForCSTA) ]
}); }
    return _cached_decoder_for_ACSEUserInformationForCSTA(el);
}

let _cached_encoder_for_ACSEUserInformationForCSTA: $.ASN1Encoder<ACSEUserInformationForCSTA> | null = null;

/**
 * @summary Encodes a(n) ACSEUserInformationForCSTA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACSEUserInformationForCSTA, encoded as an ASN.1 Element.
 */
export
function _encode_ACSEUserInformationForCSTA (value: ACSEUserInformationForCSTA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACSEUserInformationForCSTA) { _cached_encoder_for_ACSEUserInformationForCSTA = $._encode_choice<ACSEUserInformationForCSTA>({
    "oldDefinition": _encode_OldACSEUserInformationForCSTA,
    "newDefinition": $._encode_implicit(_TagClass.context, 0, () => _encode_NewACSEUserInformationForCSTA, $.BER),
}, $.BER); }
    return _cached_encoder_for_ACSEUserInformationForCSTA(value, elGetter);
}


/* eslint-enable */
