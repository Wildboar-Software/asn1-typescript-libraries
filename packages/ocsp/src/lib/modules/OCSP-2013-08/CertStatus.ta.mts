/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RevokedInfo,
    _decode_RevokedInfo,
    _encode_RevokedInfo,
} from "../OCSP-2013-08/RevokedInfo.ta.mjs";
import {
    UnknownInfo,
    _decode_UnknownInfo,
    _encode_UnknownInfo,
} from "../OCSP-2013-08/UnknownInfo.ta.mjs";

/**
 * @summary CertStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertStatus  ::=  CHOICE {
 * good                [0]     IMPLICIT NULL,
 * revoked             [1]     IMPLICIT RevokedInfo,
 * unknown             [2]     IMPLICIT UnknownInfo }
 * ```
 */
export type CertStatus =
    | { good: NULL } /* CHOICE_ALT_ROOT */
    | { revoked: RevokedInfo } /* CHOICE_ALT_ROOT */
    | { unknown: UnknownInfo } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CertStatus: $.ASN1Decoder<CertStatus> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertStatus} The decoded data structure.
 */
export function _decode_CertStatus(el: _Element): CertStatus {
    if (!_cached_decoder_for_CertStatus) {
        _cached_decoder_for_CertStatus = $._decode_inextensible_choice<CertStatus>(
            {
                "CONTEXT 0": [
                    "good",
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "revoked",
                    $._decode_implicit<RevokedInfo>(() => _decode_RevokedInfo),
                ],
                "CONTEXT 2": [
                    "unknown",
                    $._decode_implicit<UnknownInfo>(() => _decode_UnknownInfo),
                ],
            }
        );
    }
    return _cached_decoder_for_CertStatus(el);
}


let _cached_encoder_for_CertStatus: $.ASN1Encoder<CertStatus> | null = null;


/**
 * @summary Encodes a(n) CertStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertStatus, encoded as an ASN.1 Element.
 */
export function _encode_CertStatus(
    value: CertStatus,
    elGetter: $.ASN1Encoder<CertStatus>
): _Element {
    if (!_cached_encoder_for_CertStatus) {
        _cached_encoder_for_CertStatus = $._encode_choice<CertStatus>(
            {
                good: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.DER
                ),
                revoked: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RevokedInfo,
                    $.DER
                ),
                unknown: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_UnknownInfo,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertStatus(value, elGetter);
}


/* eslint-enable */
