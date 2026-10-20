/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IssuerSerial, _decode_IssuerSerial, _encode_IssuerSerial } from "../AuthenticationFramework/IssuerSerial.ta.mjs";
// export { IssuerSerial, _decode_IssuerSerial, _encode_IssuerSerial } from "../AuthenticationFramework/IssuerSerial.ta.mjs";


/**
 * @summary AttributeCertificateInfo_subject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificateInfo-subject ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttributeCertificateInfo_subject =
    { baseCertificateID: IssuerSerial } /* CHOICE_ALT_ROOT */
    | { subjectName: GeneralNames } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeCertificateInfo_subject: $.ASN1Decoder<AttributeCertificateInfo_subject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateInfo_subject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificateInfo_subject (el: _Element): AttributeCertificateInfo_subject {
    if (!_cached_decoder_for_AttributeCertificateInfo_subject) { _cached_decoder_for_AttributeCertificateInfo_subject = $._decode_inextensible_choice<AttributeCertificateInfo_subject>({
    "CONTEXT 0": [ "baseCertificateID", $._decode_explicit<IssuerSerial>(() => _decode_IssuerSerial) ],
    "CONTEXT 1": [ "subjectName", $._decode_explicit<GeneralNames>(() => _decode_GeneralNames) ]
}); }
    return _cached_decoder_for_AttributeCertificateInfo_subject(el);
}

let _cached_encoder_for_AttributeCertificateInfo_subject: $.ASN1Encoder<AttributeCertificateInfo_subject> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateInfo_subject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateInfo_subject, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateInfo_subject (value: AttributeCertificateInfo_subject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificateInfo_subject) { _cached_encoder_for_AttributeCertificateInfo_subject = $._encode_choice<AttributeCertificateInfo_subject>({
    "baseCertificateID": $._encode_explicit(_TagClass.context, 0, () => _encode_IssuerSerial, $.BER),
    "subjectName": $._encode_explicit(_TagClass.context, 1, () => _encode_GeneralNames, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeCertificateInfo_subject(value, elGetter);
}


/* eslint-enable */
