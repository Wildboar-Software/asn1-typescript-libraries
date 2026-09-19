/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CertificateBodyField, _encode_CertificateBodyField, CertificateBodyField } from "../DeviationList/CertificateBodyField.ta.mjs";
// export { CertificateBodyField, CertificateBodyField_generic /* IMPORTED_LONG_NAMED_INTEGER */, generic /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_version /* IMPORTED_LONG_NAMED_INTEGER */, version /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_serialNumber /* IMPORTED_LONG_NAMED_INTEGER */, serialNumber /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_signature /* IMPORTED_LONG_NAMED_INTEGER */, signature /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_issuer /* IMPORTED_LONG_NAMED_INTEGER */, issuer /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_validity /* IMPORTED_LONG_NAMED_INTEGER */, validity /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subject /* IMPORTED_LONG_NAMED_INTEGER */, subject /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subjectPublicKeyInfo /* IMPORTED_LONG_NAMED_INTEGER */, subjectPublicKeyInfo /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_issuerUniqueID /* IMPORTED_LONG_NAMED_INTEGER */, issuerUniqueID /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subjectUniqueID /* IMPORTED_LONG_NAMED_INTEGER */, subjectUniqueID /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CertificateBodyField, _encode_CertificateBodyField } from "../DeviationList/CertificateBodyField.ta.mjs";


/**
 * @summary CertField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertField  ::=  CHOICE {
 *     body CertificateBodyField,
 *     extension OBJECT IDENTIFIER
 * }
 * ```
 */
export
type CertField =
    { body: CertificateBodyField } /* CHOICE_ALT_ROOT */
    | { extension: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CertField: $.ASN1Decoder<CertField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertField
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertField (el: _Element): CertField {
    if (!_cached_decoder_for_CertField) { _cached_decoder_for_CertField = $._decode_inextensible_choice<CertField>({
    "UNIVERSAL 2": [ "body", _decode_CertificateBodyField ],
    "UNIVERSAL 6": [ "extension", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_CertField(el);
}

let _cached_encoder_for_CertField: $.ASN1Encoder<CertField> | null = null;

/**
 * @summary Encodes a(n) CertField into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertField, encoded as an ASN.1 Element.
 */
export
function _encode_CertField (value: CertField, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertField) { _cached_encoder_for_CertField = $._encode_choice<CertField>({
    "body": _encode_CertificateBodyField,
    "extension": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_CertField(value, elGetter);
}


/* eslint-enable */
