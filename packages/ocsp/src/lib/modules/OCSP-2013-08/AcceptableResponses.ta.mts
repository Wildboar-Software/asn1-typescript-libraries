/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AcceptableResponses
 * @description
 *
 * Value of the Acceptable Response Types request extension
 * (`id-pkix-ocsp-response`): OIDs of response types the client can
 * accept (e.g. `id-pkix-ocsp-basic`)
 * ([RFC 6960 §4.4.3](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.3)).
 * Included as one of the `requestExtensions` in requests. OCSP
 * responders and clients SHALL support `id-pkix-ocsp-basic`
 * (§4.2.1, §4.4.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptableResponses  ::=  SEQUENCE OF RESPONSE.&id({ResponseSet})
 * ```
 */
export type AcceptableResponses = OBJECT_IDENTIFIER[]; // SequenceOfType


let _cached_decoder_for_AcceptableResponses: $.ASN1Decoder<AcceptableResponses> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableResponses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableResponses} The decoded data structure.
 */
export function _decode_AcceptableResponses(el: _Element): AcceptableResponses {
    if (!_cached_decoder_for_AcceptableResponses) {
        _cached_decoder_for_AcceptableResponses = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_AcceptableResponses(el);
}


let _cached_encoder_for_AcceptableResponses: $.ASN1Encoder<AcceptableResponses> | null = null;


/**
 * @summary Encodes a(n) AcceptableResponses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableResponses, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableResponses(
    value: AcceptableResponses,
    elGetter: $.ASN1Encoder<AcceptableResponses>
): _Element {
    if (!_cached_encoder_for_AcceptableResponses) {
        _cached_encoder_for_AcceptableResponses = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_AcceptableResponses(value, elGetter);
}


/* eslint-enable */
