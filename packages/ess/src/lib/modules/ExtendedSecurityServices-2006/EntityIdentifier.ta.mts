/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "@wildboar/x500/EnhancedSecurity";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "@wildboar/x500/CertificateExtensions";


/**
 * @summary EntityIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityIdentifier  ::=  CHOICE {
 *     issuerAndSerialNumber IssuerAndSerialNumber,
 *     subjectKeyIdentifier SubjectKeyIdentifier
 * }
 * ```
 */
export type EntityIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_EntityIdentifier: $.ASN1Decoder<EntityIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EntityIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntityIdentifier} The decoded data structure.
 */
export function _decode_EntityIdentifier(el: _Element): EntityIdentifier {
    if (!_cached_decoder_for_EntityIdentifier) {
        _cached_decoder_for_EntityIdentifier = $._decode_inextensible_choice<EntityIdentifier>(
            {
                "UNIVERSAL 16": [
                    "issuerAndSerialNumber",
                    _decode_IssuerAndSerialNumber,
                ],
                "UNIVERSAL 4": [
                    "subjectKeyIdentifier",
                    _decode_SubjectKeyIdentifier,
                ],
            }
        );
    }
    return _cached_decoder_for_EntityIdentifier(el);
}


let _cached_encoder_for_EntityIdentifier: $.ASN1Encoder<EntityIdentifier> | null = null;


/**
 * @summary Encodes a(n) EntityIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_EntityIdentifier(
    value: EntityIdentifier,
    elGetter: $.ASN1Encoder<EntityIdentifier>
): _Element {
    if (!_cached_encoder_for_EntityIdentifier) {
        _cached_encoder_for_EntityIdentifier = $._encode_choice<EntityIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: _encode_SubjectKeyIdentifier,
            },
            $.DER
        );
    }
    return _cached_encoder_for_EntityIdentifier(value, elGetter);
}


/* eslint-enable */
