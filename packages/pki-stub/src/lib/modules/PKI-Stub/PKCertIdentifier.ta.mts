/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerSerialNumber,
    _decode_IssuerSerialNumber,
    _encode_IssuerSerialNumber,
} from "../PKI-Stub/IssuerSerialNumber.ta.mjs";
import {
    FingerPrint,
    _get_decoder_for_FingerPrint,
    _get_encoder_for_FingerPrint,
} from "../PKI-Stub/FingerPrint.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../PKI-Stub/Certificate.ta.mjs";
import {
    PublicKey,
    _decode_PublicKey,
    _encode_PublicKey,
} from "../PKI-Stub/PublicKey.ta.mjs";

/**
 * @summary PKCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCertIdentifier  ::=  CHOICE {
 *   issuerSerialNumber         IssuerSerialNumber,
 *   fingerprintPKC        [0]  IMPLICIT FingerPrint {Certificate},
 *   fingerprintPK         [1]  IMPLICIT FingerPrint {PublicKey},
 *   ... }
 * ```
 */
export type PKCertIdentifier =
    | { issuerSerialNumber: IssuerSerialNumber } /* CHOICE_ALT_ROOT */
    | { fingerprintPKC: FingerPrint<Certificate> } /* CHOICE_ALT_ROOT */
    | { fingerprintPK: FingerPrint<PublicKey> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PKCertIdentifier: $.ASN1Decoder<PKCertIdentifier> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) PKCertIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCertIdentifier} The decoded data structure.
 */
export function _decode_PKCertIdentifier(el: _Element): PKCertIdentifier {
    if (!_cached_decoder_for_PKCertIdentifier) {
        _cached_decoder_for_PKCertIdentifier =
            $._decode_extensible_choice<PKCertIdentifier>({
                "UNIVERSAL 16": [
                    "issuerSerialNumber",
                    _decode_IssuerSerialNumber,
                ],
                "CONTEXT 0": [
                    "fingerprintPKC",
                    $._decode_implicit<FingerPrint<Certificate>>(() =>
                        _get_decoder_for_FingerPrint<Certificate>(
                            _decode_Certificate
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "fingerprintPK",
                    $._decode_implicit<FingerPrint<PublicKey>>(() =>
                        _get_decoder_for_FingerPrint<PublicKey>(
                            _decode_PublicKey
                        )
                    ),
                ],
            });
    }
    return _cached_decoder_for_PKCertIdentifier(el);
}

let _cached_encoder_for_PKCertIdentifier: $.ASN1Encoder<PKCertIdentifier> | null =
    null;

/**
 * @summary Encodes a(n) PKCertIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCertIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PKCertIdentifier(value: PKCertIdentifier, elGetter: $.ASN1Encoder<PKCertIdentifier>): _Element {
    if (!_cached_encoder_for_PKCertIdentifier) {
        _cached_encoder_for_PKCertIdentifier =
            $._encode_choice<PKCertIdentifier>(
                {
                    issuerSerialNumber: _encode_IssuerSerialNumber,
                    fingerprintPKC: $._encode_implicit(
                        _TagClass.context,
                        0,
                        () =>
                            _get_encoder_for_FingerPrint<Certificate>(
                                _encode_Certificate
                            ),
                        $.BER
                    ),
                    fingerprintPK: $._encode_implicit(
                        _TagClass.context,
                        1,
                        () =>
                            _get_encoder_for_FingerPrint<PublicKey>(
                                _encode_PublicKey
                            ),
                        $.BER
                    ),
                },
                $.BER
            );
    }
    return _cached_encoder_for_PKCertIdentifier(value, elGetter);
}


/* eslint-enable */
