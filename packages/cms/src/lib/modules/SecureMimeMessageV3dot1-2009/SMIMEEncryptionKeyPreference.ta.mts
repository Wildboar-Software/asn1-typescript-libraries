/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax-2010/IssuerAndSerialNumber.ta.mjs";
import {
    RecipientKeyIdentifier,
    _decode_RecipientKeyIdentifier,
    _encode_RecipientKeyIdentifier,
} from "../CryptographicMessageSyntax-2010/RecipientKeyIdentifier.ta.mjs";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CryptographicMessageSyntax-2010/SubjectKeyIdentifier.ta.mjs";

/**
 * @summary SMIMEEncryptionKeyPreference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIMEEncryptionKeyPreference  ::=  CHOICE {
 * issuerAndSerialNumber    [0] IssuerAndSerialNumber,
 * receipentKeyId        [1] RecipientKeyIdentifier,
 * subjectAltKeyIdentifier    [2] SubjectKeyIdentifier
 * }
 * ```
 */
export type SMIMEEncryptionKeyPreference =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { receipentKeyId: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectAltKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_SMIMEEncryptionKeyPreference: $.ASN1Decoder<SMIMEEncryptionKeyPreference> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SMIMEEncryptionKeyPreference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMEEncryptionKeyPreference} The decoded data structure.
 */
export function _decode_SMIMEEncryptionKeyPreference(el: _Element): SMIMEEncryptionKeyPreference {
    if (!_cached_decoder_for_SMIMEEncryptionKeyPreference) {
        _cached_decoder_for_SMIMEEncryptionKeyPreference = $._decode_inextensible_choice<SMIMEEncryptionKeyPreference>(
            {
                "CONTEXT 0": [
                    "issuerAndSerialNumber",
                    $._decode_implicit<IssuerAndSerialNumber>(
                        () => _decode_IssuerAndSerialNumber
                    ),
                ],
                "CONTEXT 1": [
                    "receipentKeyId",
                    $._decode_implicit<RecipientKeyIdentifier>(
                        () => _decode_RecipientKeyIdentifier
                    ),
                ],
                "CONTEXT 2": [
                    "subjectAltKeyIdentifier",
                    $._decode_implicit<SubjectKeyIdentifier>(
                        () => _decode_SubjectKeyIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SMIMEEncryptionKeyPreference(el);
}


let _cached_encoder_for_SMIMEEncryptionKeyPreference: $.ASN1Encoder<SMIMEEncryptionKeyPreference> | null = null;


/**
 * @summary Encodes a(n) SMIMEEncryptionKeyPreference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMEEncryptionKeyPreference, encoded as an ASN.1 Element.
 */
export function _encode_SMIMEEncryptionKeyPreference(
    value: SMIMEEncryptionKeyPreference,
    elGetter: $.ASN1Encoder<SMIMEEncryptionKeyPreference>
): _Element {
    if (!_cached_encoder_for_SMIMEEncryptionKeyPreference) {
        _cached_encoder_for_SMIMEEncryptionKeyPreference = $._encode_choice<SMIMEEncryptionKeyPreference>(
            {
                issuerAndSerialNumber: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IssuerAndSerialNumber,
                    $.DER
                ),
                receipentKeyId: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RecipientKeyIdentifier,
                    $.DER
                ),
                subjectAltKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SubjectKeyIdentifier,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_SMIMEEncryptionKeyPreference(value, elGetter);
}


/* eslint-enable */
