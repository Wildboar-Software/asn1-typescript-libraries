/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BiometricHeaderTemplateExplicit_tagAllocationAuthority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricHeaderTemplateExplicit-tagAllocationAuthority ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type BiometricHeaderTemplateExplicit_tagAllocationAuthority =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { country: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { issuerID: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { application: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority: $.ASN1Decoder<BiometricHeaderTemplateExplicit_tagAllocationAuthority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricHeaderTemplateExplicit_tagAllocationAuthority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricHeaderTemplateExplicit_tagAllocationAuthority (el: _Element): BiometricHeaderTemplateExplicit_tagAllocationAuthority {
    if (!_cached_decoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority) { _cached_decoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority = $._decode_inextensible_choice<BiometricHeaderTemplateExplicit_tagAllocationAuthority>({
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "APPLICATION 1": [ "country", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "APPLICATION 2": [ "issuerID", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "APPLICATION 15": [ "application", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority(el);
}

let _cached_encoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority: $.ASN1Encoder<BiometricHeaderTemplateExplicit_tagAllocationAuthority> | null = null;

/**
 * @summary Encodes a(n) BiometricHeaderTemplateExplicit_tagAllocationAuthority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricHeaderTemplateExplicit_tagAllocationAuthority, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricHeaderTemplateExplicit_tagAllocationAuthority (value: BiometricHeaderTemplateExplicit_tagAllocationAuthority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority) { _cached_encoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority = $._encode_choice<BiometricHeaderTemplateExplicit_tagAllocationAuthority>({
    "oid": $._encodeObjectIdentifier,
    "country": $._encode_implicit(_TagClass.application, 1, () => $._encodeOctetString, $.BER),
    "issuerID": $._encode_implicit(_TagClass.application, 2, () => $._encodeOctetString, $.BER),
    "application": $._encode_implicit(_TagClass.application, 15, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_BiometricHeaderTemplateExplicit_tagAllocationAuthority(value, elGetter);
}


/* eslint-enable */
