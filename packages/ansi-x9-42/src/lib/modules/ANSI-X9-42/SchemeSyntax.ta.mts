/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SchemeIdentifier,
    _decode_SchemeIdentifier,
    _encode_SchemeIdentifier,
} from "../ANSI-X9-42/SchemeIdentifier.ta.mjs";
import {
    SchemeNumber,
    _decode_SchemeNumber,
    _encode_SchemeNumber,
} from "../ANSI-X9-42/SchemeNumber.ta.mjs";
import {
    SchemeOID,
    _decode_SchemeOID,
    _encode_SchemeOID,
} from "../ANSI-X9-42/SchemeOID.ta.mjs";

/**
 * @summary SchemeSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeSyntax { KeyDerivationMethod: kdm }  ::=  CHOICE {
 * schemeId     SchemeIdentifier,
 * oid            SchemeOID,
 * number    SchemeNumber
 * } (CONSTRAINED BY { KeyDerivationMethod: kdm } )
 * ```
 */
export type SchemeSyntax =
    | { schemeId: SchemeIdentifier } /* CHOICE_ALT_ROOT */
    | { oid: SchemeOID } /* CHOICE_ALT_ROOT */
    | { number_: SchemeNumber } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_SchemeSyntax: $.ASN1Decoder<SchemeSyntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SchemeSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeSyntax} The decoded data structure.
 */
export function _decode_SchemeSyntax(el: _Element) {
    if (!_cached_decoder_for_SchemeSyntax) {
        _cached_decoder_for_SchemeSyntax = $._decode_inextensible_choice<SchemeSyntax>(
            {
                "UNIVERSAL 16": ["schemeId", _decode_SchemeIdentifier],
                "UNIVERSAL 6": ["oid", _decode_SchemeOID],
                "UNIVERSAL 10": ["number_", _decode_SchemeNumber],
            }
        );
    }
    return _cached_decoder_for_SchemeSyntax(el);
}


let _cached_encoder_for_SchemeSyntax: $.ASN1Encoder<SchemeSyntax> | null = null;


/**
 * @summary Encodes a(n) SchemeSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SchemeSyntax(
    value: SchemeSyntax,
    elGetter: $.ASN1Encoder<SchemeSyntax>
) {
    if (!_cached_encoder_for_SchemeSyntax) {
        _cached_encoder_for_SchemeSyntax = $._encode_choice<SchemeSyntax>(
            {
                schemeId: _encode_SchemeIdentifier,
                oid: _encode_SchemeOID,
                number_: _encode_SchemeNumber,
            },
            $.DER
        );
    }
    return _cached_encoder_for_SchemeSyntax(value, elGetter);
}


/* eslint-enable */
