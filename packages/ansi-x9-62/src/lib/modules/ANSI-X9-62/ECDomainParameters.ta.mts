/* eslint-disable */
import { ASN1Element as _Element, NULL, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SpecifiedECDomain,
    _decode_SpecifiedECDomain,
    _encode_SpecifiedECDomain,
} from "../ANSI-X9-62/SpecifiedECDomain.ta.mjs";
/* START_OF_SYMBOL_DEFINITION ECDomainParameters */
/**
 * @summary ECDomainParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDomainParameters  ::=  CHOICE {
 * specified        SpecifiedECDomain, -- Full specification
 * named        ECDOMAIN.&id({ANSIX9NamedDomains}), -- Named
 * implicitCA         NULL -- Parameters same as issuer CA
 * }
 * ```
 */
export type ECDomainParameters =
    | { specified: SpecifiedECDomain } /* CHOICE_ALT_ROOT */
    | { named: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { implicitCA: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDomainParameters */
let _cached_decoder_for_ECDomainParameters: $.ASN1Decoder<ECDomainParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _decode_ECDomainParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ECDomainParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDomainParameters} The decoded data structure.
 */
export function _decode_ECDomainParameters(el: _Element) {
    if (!_cached_decoder_for_ECDomainParameters) {
        _cached_decoder_for_ECDomainParameters = $._decode_inextensible_choice<ECDomainParameters>(
            {
                "UNIVERSAL 16": ["specified", _decode_SpecifiedECDomain],
                "UNIVERSAL 6": ["named", $._decodeObjectIdentifier],
                "UNIVERSAL 5": ["implicitCA", $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_ECDomainParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDomainParameters */
let _cached_encoder_for_ECDomainParameters: $.ASN1Encoder<ECDomainParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _encode_ECDomainParameters */
/**
 * @summary Encodes a(n) ECDomainParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDomainParameters, encoded as an ASN.1 Element.
 */
export function _encode_ECDomainParameters(
    value: ECDomainParameters,
    elGetter: $.ASN1Encoder<ECDomainParameters>
) {
    if (!_cached_encoder_for_ECDomainParameters) {
        _cached_encoder_for_ECDomainParameters = $._encode_choice<ECDomainParameters>(
            {
                specified: _encode_SpecifiedECDomain,
                named: $._encodeObjectIdentifier,
                implicitCA: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ECDomainParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECDomainParameters */

/* eslint-enable */
