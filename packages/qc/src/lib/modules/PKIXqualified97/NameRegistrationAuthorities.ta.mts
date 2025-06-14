/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralName.ta.mjs";


/**
 * @summary NameRegistrationAuthorities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameRegistrationAuthorities  ::=  SEQUENCE SIZE (1..MAX) OF GeneralName
 * ```
 */
export type NameRegistrationAuthorities = GeneralName[]; // SequenceOfType


let _cached_decoder_for_NameRegistrationAuthorities: $.ASN1Decoder<NameRegistrationAuthorities> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NameRegistrationAuthorities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameRegistrationAuthorities} The decoded data structure.
 */
export function _decode_NameRegistrationAuthorities(el: _Element) {
    if (!_cached_decoder_for_NameRegistrationAuthorities) {
        _cached_decoder_for_NameRegistrationAuthorities = $._decodeSequenceOf<GeneralName>(
            () => _decode_GeneralName
        );
    }
    return _cached_decoder_for_NameRegistrationAuthorities(el);
}


let _cached_encoder_for_NameRegistrationAuthorities: $.ASN1Encoder<NameRegistrationAuthorities> | null = null;


/**
 * @summary Encodes a(n) NameRegistrationAuthorities into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameRegistrationAuthorities, encoded as an ASN.1 Element.
 */
export function _encode_NameRegistrationAuthorities(
    value: NameRegistrationAuthorities,
    elGetter: $.ASN1Encoder<NameRegistrationAuthorities>
) {
    if (!_cached_encoder_for_NameRegistrationAuthorities) {
        _cached_encoder_for_NameRegistrationAuthorities = $._encodeSequenceOf<GeneralName>(
            () => _encode_GeneralName,
            $.BER
        );
    }
    return _cached_encoder_for_NameRegistrationAuthorities(value, elGetter);
}


/* eslint-enable */
