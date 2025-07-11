/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
/**
 * @summary AttributeCertificateAssertion_holder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateAssertion-holder ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeCertificateAssertion_holder =
    | { baseCertificateID: IssuerSerial } /* CHOICE_ALT_ROOT */
    | { holderName: GeneralNames } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AttributeCertificateAssertion_holder: $.ASN1Decoder<AttributeCertificateAssertion_holder> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion_holder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateAssertion_holder} The decoded data structure.
 */
export function _decode_AttributeCertificateAssertion_holder(el: _Element): AttributeCertificateAssertion_holder {
    if (!_cached_decoder_for_AttributeCertificateAssertion_holder) {
        _cached_decoder_for_AttributeCertificateAssertion_holder = $._decode_extensible_choice<AttributeCertificateAssertion_holder>(
            {
                "CONTEXT 0": [
                    "baseCertificateID",
                    $._decode_implicit<IssuerSerial>(
                        () => _decode_IssuerSerial
                    ),
                ],
                "CONTEXT 1": [
                    "holderName",
                    $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AttributeCertificateAssertion_holder(el);
}

let _cached_encoder_for_AttributeCertificateAssertion_holder: $.ASN1Encoder<AttributeCertificateAssertion_holder> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateAssertion_holder into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion_holder, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateAssertion_holder(
    value: AttributeCertificateAssertion_holder,
    elGetter: $.ASN1Encoder<AttributeCertificateAssertion_holder>
): _Element {
    if (!_cached_encoder_for_AttributeCertificateAssertion_holder) {
        _cached_encoder_for_AttributeCertificateAssertion_holder = $._encode_choice<AttributeCertificateAssertion_holder>(
            {
                baseCertificateID: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IssuerSerial,
                    $.DER
                ),
                holderName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GeneralNames,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_AttributeCertificateAssertion_holder(
        value,
        elGetter
    );
}


/* eslint-enable */
