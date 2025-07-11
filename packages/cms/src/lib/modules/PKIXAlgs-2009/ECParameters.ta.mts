/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ECParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters  ::=  CHOICE {
 * namedCurve      CURVE.&id({NamedCurve})
 * -- implicitCurve   NULL
 * -- implicitCurve MUST NOT be used in PKIX
 * -- specifiedCurve  SpecifiedCurve
 * -- specifiedCurve MUST NOT be used in PKIX
 * -- Details for specifiedCurve can be found in [X9.62]
 * -- Any future additions to this CHOICE should be coordinated
 * -- with ANSI X.9.
 * }
 * ```
 */
export type ECParameters = {
    namedCurve: OBJECT_IDENTIFIER;
} /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ECParameters: $.ASN1Decoder<ECParameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECParameters} The decoded data structure.
 */
export function _decode_ECParameters(el: _Element): ECParameters {
    if (!_cached_decoder_for_ECParameters) {
        _cached_decoder_for_ECParameters = $._decode_inextensible_choice<ECParameters>(
            {
                "UNIVERSAL 6": ["namedCurve", $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ECParameters(el);
}


let _cached_encoder_for_ECParameters: $.ASN1Encoder<ECParameters> | null = null;


/**
 * @summary Encodes a(n) ECParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters, encoded as an ASN.1 Element.
 */
export function _encode_ECParameters(
    value: ECParameters,
    elGetter: $.ASN1Encoder<ECParameters>
): _Element {
    if (!_cached_encoder_for_ECParameters) {
        _cached_encoder_for_ECParameters = $._encode_choice<ECParameters>(
            {
                namedCurve: $._encodeObjectIdentifier,
            },
            $.DER
        );
    }
    return _cached_encoder_for_ECParameters(value, elGetter);
}


/* eslint-enable */
