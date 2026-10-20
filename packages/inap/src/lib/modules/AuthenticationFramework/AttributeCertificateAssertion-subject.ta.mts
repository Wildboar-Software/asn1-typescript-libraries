/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IssuerSerial, _decode_IssuerSerial, _encode_IssuerSerial } from "../AuthenticationFramework/IssuerSerial.ta.mjs";
// export { IssuerSerial, _decode_IssuerSerial, _encode_IssuerSerial } from "../AuthenticationFramework/IssuerSerial.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";


/**
 * @summary AttributeCertificateAssertion_subject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificateAssertion-subject ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttributeCertificateAssertion_subject =
    { baseCertificateID: IssuerSerial } /* CHOICE_ALT_ROOT */
    | { subjectName: Name } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeCertificateAssertion_subject: $.ASN1Decoder<AttributeCertificateAssertion_subject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion_subject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificateAssertion_subject (el: _Element): AttributeCertificateAssertion_subject {
    if (!_cached_decoder_for_AttributeCertificateAssertion_subject) { _cached_decoder_for_AttributeCertificateAssertion_subject = $._decode_inextensible_choice<AttributeCertificateAssertion_subject>({
    "CONTEXT 0": [ "baseCertificateID", $._decode_explicit<IssuerSerial>(() => _decode_IssuerSerial) ],
    "CONTEXT 1": [ "subjectName", $._decode_explicit<Name>(() => _decode_Name) ]
}); }
    return _cached_decoder_for_AttributeCertificateAssertion_subject(el);
}

let _cached_encoder_for_AttributeCertificateAssertion_subject: $.ASN1Encoder<AttributeCertificateAssertion_subject> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateAssertion_subject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion_subject, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateAssertion_subject (value: AttributeCertificateAssertion_subject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificateAssertion_subject) { _cached_encoder_for_AttributeCertificateAssertion_subject = $._encode_choice<AttributeCertificateAssertion_subject>({
    "baseCertificateID": $._encode_explicit(_TagClass.context, 0, () => _encode_IssuerSerial, $.BER),
    "subjectName": $._encode_explicit(_TagClass.context, 1, () => _encode_Name, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeCertificateAssertion_subject(value, elGetter);
}


/* eslint-enable */
